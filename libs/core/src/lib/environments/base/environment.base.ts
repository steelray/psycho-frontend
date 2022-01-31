import { IEnvironment } from '../environment.interface';

/**
 * Reduce the most commonly used environment values here
 */
export const environmentBase: IEnvironment = {
  production: false,
  // apiEndpoint: '/api',
  // apiEndpoint: 'http://psycho.loc/api',
  // apiEndpoint: 'http://server.zarland.ru/api',
  apiEndpoint: 'https://server.psychologycorp.ru/api',
  wsEndpoint: 'wss://socket.zarland.ru/'
};
