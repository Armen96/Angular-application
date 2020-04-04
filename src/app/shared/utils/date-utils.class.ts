import * as moment from 'moment';

export default class DateUtils {

  constructor() {
  }

  // returns the timestamp of the UTC date
  public static toUTCDateTimestamp(date: any): number {
    if (!date) {
      return null;
    }

    if (typeof date === 'number') {
      return date;
    }

    const myDate = moment(date);
    return Date.UTC(myDate.year(), myDate.month(), myDate.date());
  }

  // returns the date from a UTC timestamp
  public static toDateFromUTCTimestamp(date: any): Date {
    const myDate = new Date(date);
    if (myDate.getTimezoneOffset() >= 0) {
      return new Date(myDate.getUTCFullYear(), myDate.getUTCMonth(), myDate.getUTCDate());
    } else {
      return new Date(myDate.getFullYear(), myDate.getMonth(), myDate.getDate());
    }
  }
}
