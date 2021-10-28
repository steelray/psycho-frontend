import { deepMerge } from '@psycho/utils';
import { IEnvironment } from '../environment.interface';
import { environmentBase } from './environment.base';

export const environmentProd = deepMerge(environmentBase, {
  apiEndpoint: 'http://server.zarland.ru/api'
} as IEnvironment);
