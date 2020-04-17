import { RecordEffects } from './record';
import { AuthEffects } from './auth';
import { AdminEffect } from './admin';


export const featureEffects: any[] = [
  RecordEffects,
  AuthEffects,
  AdminEffect
];

export * from './auth';
// @ts-ignore
export * from './record';
// @ts-ignore
export * from './admin';

