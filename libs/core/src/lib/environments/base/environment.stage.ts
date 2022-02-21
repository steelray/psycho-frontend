import { deepMerge } from '@psycho/utils';
import { IEnvironment } from '../environment.interface';
import { environmentBase } from './environment.base';

export const environmentStage = deepMerge(environmentBase, {
  apiEndpoint: 'https://server.zarland.ru/api',
  wsEndpoint: 'https://zarland.ru/',
  production: true
} as IEnvironment);
