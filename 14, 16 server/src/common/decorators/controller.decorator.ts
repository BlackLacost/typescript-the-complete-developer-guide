import { NextFunction, Request, RequestHandler, Response } from 'express'
import { AppRouter } from '../../AppRouter'
import { MetadataKey } from './MetadataKey'
import { Method } from './Method'

function bodyValidators(keys: string[]): RequestHandler {
  return function (req: Request, res: Response, next: NextFunction) {
    if (!req.body) {
      res.status(422).send('Invalid request')
      return
    }

    for (let key of keys) {
      if (!req.body[key]) {
        res.status(422).send(`Missing property ${key}`)
        return
      }
    }
    next()
  }
}

export function controller(routePrefix: string) {
  return function (target: Function) {
    const router = AppRouter.getInstance()
    for (let key in target.prototype) {
      const routeHandler = target.prototype[key]
      const path = Reflect.getMetadata(MetadataKey.path, target.prototype, key)
      const method: Method = Reflect.getMetadata(
        MetadataKey.method,
        target.prototype,
        key
      )
      const middlewares =
        Reflect.getMetadata(MetadataKey.middleware, target.prototype, key) ?? []
      const requiredBodyProps =
        Reflect.getMetadata(MetadataKey.validator, target.prototype, key) ?? []

      const validator = bodyValidators(requiredBodyProps)

      if (path) {
        router[method](
          `${routePrefix}${path}`,
          ...middlewares,
          validator,
          routeHandler
        )
      }
    }
  }
}
