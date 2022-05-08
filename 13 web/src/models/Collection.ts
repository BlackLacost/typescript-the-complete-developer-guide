import axios from 'axios'
import { Eventing } from './Eventing'

export class Collection<T, K> {
  public models: T[] = []
  private events: Eventing = new Eventing()

  constructor(public rootUrl: string, public deserialize: (json: K) => T) {}

  get on() {
    return this.events.on
  }

  get trigger() {
    return this.events.trigger
  }

  fetch(): void {
    axios.get<K[]>(this.rootUrl).then((response): void => {
      response.data.forEach((modelProps) => {
        this.models.push(this.deserialize(modelProps))
      })
      this.trigger('change')
    })
  }
}
