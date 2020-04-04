import { Component, EventEmitter, Output, ViewChild, Input, OnInit } from '@angular/core';
import { CropperSettings, ImageCropperComponent } from 'ngx-img-cropper';
import { ImageCropperModalFileType } from './image-cropper-modal-file-type.type';

@Component({
  selector: 'app-image-cropper-modal',
  templateUrl: './image-cropper-modal.component.html',
  styleUrls: ['./image-cropper-modal.component.css']
})
export class ImageCropperModalComponent implements OnInit {
  @Input() fileTypes: ImageCropperModalFileType[] = [];
  @Output() submit = new EventEmitter<{ originalFile: File; croppedImage: string }>();
  @Output() cancel = new EventEmitter<MouseEvent>();
  @ViewChild('cropper', undefined) cropper: ImageCropperComponent;

  readonly IMAGES: ImageCropperModalFileType = 'images';
  readonly DOCUMENTS: ImageCropperModalFileType = 'documents';

  cropperSettings: CropperSettings;
  data: any;
  file: File;
  extensions = {
    [this.IMAGES]: '.jpg, .jpeg, .png, .bmp,',
    [this.DOCUMENTS]: '.pdf, .doc, .docx, .xls, .xlsx, .ppt, .pptx,'
  };
  acceptFiles = '';
  formatError: boolean;

  constructor() {
    this.cropperSettings = new CropperSettings();

    this.cropperSettings.noFileInput = true;
    this.cropperSettings.canvasWidth = 500;
    this.cropperSettings.canvasHeight = 400;

    this.cropperSettings.minWidth = 100;
    this.cropperSettings.minHeight = 100;

    this.cropperSettings.cropperDrawSettings.strokeColor = 'rgba(255,255,255,1)';
    this.cropperSettings.cropperDrawSettings.strokeWidth = 2;

    this.cropperSettings.rounded = false;
    this.cropperSettings.keepAspect = false;
    this.cropperSettings.preserveSize = true;
    this.data = {};
  }

  get isFileImageType(): boolean {
    return (
      this.file &&
      ((this.file.name.length >= 4 &&
        (this.file.name.slice(-4).toLowerCase() === '.jpg' ||
          this.file.name.slice(-4).toLowerCase() === '.png' ||
          this.file.name.slice(-4).toLowerCase() === '.bmp')) ||
        (this.file.name.length >= 5 && this.file.name.slice(-5).toLowerCase() === '.jpeg'))
    );
  }

  get isFilePDFType(): boolean {
    return this.file && this.file.name.length >= 4 && this.file.name.slice(-4).toLowerCase() === '.pdf';
  }

  get isFileWordType(): boolean {
    return (
      this.file &&
      ((this.file.name.length >= 4 && this.file.name.slice(-4).toLowerCase() === '.doc') ||
        (this.file.name.length >= 5 && this.file.name.slice(-5).toLowerCase() === '.docx'))
    );
  }

  get isFileExcelType(): boolean {
    return (
      this.file &&
      ((this.file.name.length >= 4 && this.file.name.slice(-4).toLowerCase() === '.xls') ||
        (this.file.name.length >= 5 && this.file.name.slice(-5).toLowerCase() === '.xlsx'))
    );
  }

  get isFilePowerPointType(): boolean {
    return (
      this.file &&
      ((this.file.name.length >= 4 && this.file.name.slice(-4).toLowerCase() === '.ppt') ||
        (this.file.name.length >= 5 && this.file.name.slice(-5).toLowerCase() === '.pptx'))
    );
  }

  ngOnInit() {
    this.acceptFiles = '';
    if (
      !this.fileTypes ||
      !(this.fileTypes instanceof Array) ||
      (this.fileTypes instanceof Array && !this.fileTypes.length)
    ) {
      // default extension is IMAGES
      this.acceptFiles = this.extensions[this.IMAGES];
    } else {
      // add allowed extensions to input file in HTML
      Object.keys(this.extensions).forEach((type: ImageCropperModalFileType) => {
        if (this.fileTypes.indexOf(type) !== -1) {
          this.acceptFiles += this.extensions[type];
        }
      });
    }
  }

  public clickedSubmit() {
    this.submit.emit({ originalFile: this.file, croppedImage: this.data.image });
  }

  public clickedCancel(event: MouseEvent) {
    this.cancel.emit(event);
  }

  fileChangeListener($event) {
    if (!$event.target.files[0]) {
      return;
    }

    this.file = $event.target.files[0];

    const myReader: FileReader = new FileReader();
    const that = this;
    myReader.onloadend = function(loadEvent: any) {
      if (that.isFileImageType) {
        const image = new Image();
        image.src = loadEvent.target.result;
        that.cropper.setImage(image);
      } else {
        that.data.image = loadEvent.target.result;
      }
    };
    myReader.readAsDataURL(this.file);

    this.formatError = !(this.file && this.isFileFormatValid());
  }

  // not a getter because of too many logic
  isFileFormatValid(): boolean {
    if (!this.file) {
      return false;
    }
    const fileName = this.file.name;
    const extension = fileName.substr(fileName.lastIndexOf('.'));
    return this.acceptFiles.includes(extension);
  }
}
