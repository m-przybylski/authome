import * as express from 'express';

export const Get: (url: string) => MethodDecorator = url => 
(target, propKey) => {
  const app = express();
  app.get(url, target[propKey])
  return target;
};
