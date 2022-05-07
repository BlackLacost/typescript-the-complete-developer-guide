import { AxiosPromise } from 'axios'

interface ModelAttributes<T> {
  get: <K extends keyof T>(key: K) => T[K]
  set: (value: T) => void
  getAll: () => T
}

interface Sync<T> {
  fetch: (id: number) => AxiosPromise<T>
  save: (data: T) => AxiosPromise<T>
}

interface Events {
  on: (eventName: string, callback: () => void) => void
  trigger: (eventName: string) => void
}

interface HasId {
  id?: number
}

export class Model<T extends HasId> {
  on = this.events.on
  trigger = this.events.trigger
  get = this.attributes.get

  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>
  ) {}

  set(update: T): void {
    this.attributes.set(update)
    this.events.trigger('change')
  }

  fetch(): void {
    const id = this.get('id')

    if (typeof id !== 'number') {
      throw new Error('Cannot fetch without an id')
    }

    this.sync.fetch(id).then((response): void => {
      this.set(response.data)
    })
  }

  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then((_): void => {
        this.trigger('save')
      })
      .catch(() => {
        this.trigger('error')
      })
  }
}
