import { IEnvironment } from '../environment.interface';

/**
 * Reduce the most commonly used environment values here
 */
export const environmentBase: IEnvironment = {
  production: false,
  // apiEndpoint: '/api',
  // apiEndpoint: 'http://psycho.loc/api',
  apiEndpoint: '//server.mebelsmile.ru/api',
  // apiEndpoint: 'https://server.psychologycorp.ru/api',
  // wsEndpoint: 'http://localhost:4000'
  wsEndpoint: '//ws.psychologycorp.ru/'
};
