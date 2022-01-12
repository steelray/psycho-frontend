import { deepMerge } from '@psycho/utils';
import { IEnvironment } from '../environment.interface';
import { environmentBase } from './environment.base';

export const environmentStage = deepMerge(environmentBase, {
  apiEndpoint: 'http://server.zarland.ru/api',
  production: true
} as IEnvironment);
