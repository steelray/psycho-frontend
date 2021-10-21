import { IEnvironment } from '../environment.interface';

/**
 * Reduce the most commonly used environment values here
 */
export const environmentBase: IEnvironment = {
  production: false,
  apiEndpoint: '/api',
  wsEndpoint: 'ws://localhost:8080'
};
