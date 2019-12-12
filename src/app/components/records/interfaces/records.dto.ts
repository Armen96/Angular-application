import {RecordsInterface} from './records.interface';

export class RecordsDto {
  id: number;
  body: string;
  title: string;
  userId: number;

  constructor(serverDto: RecordsInterface) {
    Object.assign(this, serverDto);

    this.body = serverDto.body ? serverDto.body : '';
    this.title = serverDto.title ? serverDto.title : '';
    this.userId = serverDto.userId ? serverDto.userId : 0;
    this.id = serverDto.id ? serverDto.id : 0;
  }
}
