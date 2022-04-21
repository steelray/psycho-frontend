import { deepMerge } from '@psycho/utils';
import { IEnvironment } from '../environment.interface';
import { environmentBase } from './environment.base';

export const environmentProd = deepMerge(environmentBase, {
  // apiEndpoint: 'https://server.psychologycorp.ru/api',
  wsEndpoint: 'https://ws.psychologycorp.ru/',
  production: true
} as IEnvironment);
