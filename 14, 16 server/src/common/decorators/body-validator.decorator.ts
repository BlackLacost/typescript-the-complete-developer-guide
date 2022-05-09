import { MetadataKey } from './MetadataKey'

export function bodyValidator(...keys: string[]) {
  return function (target: any, key: string) {
    Reflect.defineMetadata(MetadataKey.validator, keys, target, key)
  }
}
