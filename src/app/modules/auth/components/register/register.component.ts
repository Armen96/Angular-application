import {Component, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../../../shared/ngrx/appState';
import * as fromStore from '../../../../store/auth';
import {Router} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {ImageCropperModalFileType} from '../../../../shared/components/image-cropper-modal/image-cropper-modal-file-type.type';
import {AppFileUtils} from '../../../../shared/utils/file-utils.class';
import {AuthService} from '../../../../services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnDestroy {
  private unsubscribe$: Subject<void> = new Subject();
  selectedFile: any;
  error: HttpErrorResponse;
  loader: boolean;
  emailHasError = '';
  passwordHasError = '';
  nameHasError = '';
  imageHasError = '';

  showUploadDocumentPopup: boolean;
  readonly acceptedTypes: ImageCropperModalFileType[] = ['images'];
  didUploadAFile = false;

  constructor(
    private store: Store<AppState>,
    protected router: Router,
    protected authService: AuthService
  ) {}

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  register(name: string, email: string, password: string) {
    const emailStatus = this.authService.emailVerification(email);
    const passwordStatus = this.authService.passwordVerification(password);
    const nameStatus = this.authService.nameVerification(name);
    const imageStatus = this.authService.imageVerification(this.selectedFile);

    this.emailHasError = emailStatus.message;
    this.passwordHasError = passwordStatus.message;
    this.nameHasError = nameStatus.message;
    this.imageHasError = imageStatus.message;

    if (!this.emailHasError && !this.passwordHasError && !this.nameHasError && !this.imageHasError) {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('image', this.selectedFile, this.selectedFile.name);

      this.store.dispatch(new fromStore.Register(formData));

      this.store.pipe(select(fromStore.getUser), takeUntil(this.unsubscribe$)).subscribe(
        state => {
          if (state) {
            setTimeout(() => {
              this.router.navigate(['/profile']);
            }, 1000);
          }
        }
      );
    }
  }

  onUploadFile(params: { originalFile: File; croppedImage: string }) {
    const fileName = params.originalFile.name;
    let source;
    if (this.isImageFile(fileName)) {
      const contentType = params.croppedImage.substr(6, params.croppedImage.indexOf(';'));
      const blob = AppFileUtils.fileB64ToBlob(params.croppedImage, contentType);
      source = new File([blob], fileName);
    } else {
      source = params.originalFile;
    }

    this.selectedFile = source;
    this.showUploadDocumentPopup = false;
    this.didUploadAFile = true;
  }

  isImageFile(fileName: string): boolean {
    const expression: RegExp = /\.jpeg$|\.jpg$|\.png$|\.bmp$/im;
    return expression.test(fileName);
  }
}
