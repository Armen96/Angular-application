import { Action } from '@ngrx/store';

export enum WeatherActionTypes {
  LoadWeather = '[Home Page] Load Weather'
}

export class WeatherAction implements Action {
  type: string;
  payload: {
    weatherData: any
  };
}

export class LoadWeather implements Action {
  readonly type = WeatherActionTypes.LoadWeather;

  constructor(readonly payload: {weatherData: any}) {

  }
}


export type WeatherActions = LoadWeather;
