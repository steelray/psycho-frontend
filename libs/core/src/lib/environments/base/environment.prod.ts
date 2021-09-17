import { deepMerge } from '@psycho/utils';
import { IEnvironment } from '..';
import { environmentBase } from './environment.base';

export const environmentProd = deepMerge(environmentBase, {
} as IEnvironment);
