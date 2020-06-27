import { RecordEffects } from './record';
import { AuthEffects } from './auth';


export const featureEffects: any[] = [
  RecordEffects,
  AuthEffects
];

export * from './auth';
// @ts-ignore
export * from './record';
// @ts-ignore

