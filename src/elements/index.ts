import { Elements, Props } from '@root/types';

import ErrorHandlerInstance from './ErrorHandler';
import MiddlewareInstance from './Middleware';
import RootInstance from './Root';
import RouteInstance from './Route';

export function createInstance(type: string, props?: Props) {
  if (type === Elements.Express) {
    return new RootInstance(Elements.Express, props);
  } else if (type === Elements.Root) {
    return new RootInstance(Elements.Root, props);
  } else if (type === Elements.Middleware) {
    return new MiddlewareInstance(Elements.Middleware, props as any);
  } else if (type === Elements.Route) {
    return new RouteInstance(Elements.Route, props as any);
  } else if (type === Elements.ErrorHandler) {
    return new ErrorHandlerInstance(Elements.ErrorHandler, props as any);
  } else {
    throw new Error(`${type} is not supported`);
  }
}
