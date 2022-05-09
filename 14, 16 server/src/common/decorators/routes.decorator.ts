import { RequestHandler } from 'express'
import { MetadataKey } from './MetadataKey'
import { Method } from './Method'

interface RouteHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler
}

function routeBinder(method: Method) {
  return function (path: string) {
    return function (target: any, key: string, desc: RouteHandlerDescriptor) {
      Reflect.defineMetadata(MetadataKey.path, path, target, key)
      Reflect.defineMetadata(MetadataKey.method, method, target, key)
    }
  }
}

export const get = routeBinder(Method.get)
export const post = routeBinder(Method.post)
export const put = routeBinder(Method.put)
export const patch = routeBinder(Method.patch)
export const del = routeBinder(Method.del)
export const options = routeBinder(Method.options)
