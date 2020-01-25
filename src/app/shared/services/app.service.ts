import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable()
export abstract  class AppService {

  private defaultServicePath = '';

  protected constructor(protected http: HttpClient) { }

  protected setDefaultServicePath(path: string): void {
    this.defaultServicePath = path;
  }

  protected getUrl(servicePath: string = this.defaultServicePath, subPath: string, id: number | string = 0): string {
    return environment.LOCAL_REST_URL + servicePath + subPath + (id ? '/' + id : '');
  }

  protected getUrlNoServicePath(subPath: string, id: number | string = 0): string {
    return environment.REST_URL + this.defaultServicePath + subPath + (id ? '/' + id : '');
  }

  protected replaceValues(stringValue, mapObj) {
    const re = new RegExp(Object.keys(mapObj).join('|'), 'gi');

    return stringValue.replace(re, (matched) => {
      return mapObj[matched];
    });
  }
}
