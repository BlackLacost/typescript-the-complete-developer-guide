import axios, { AxiosResponse } from 'axios'

interface HasId {
  id?: number
}

export class Sync<T extends HasId> {
  constructor(public rootUrl: string) {}

  fetch(id: number): Promise<AxiosResponse<T>> {
    return axios.get<T>(`${this.rootUrl}/${id}`)
  }

  save(data: T): Promise<AxiosResponse<T>> {
    const { id } = data

    return id
      ? axios.put<T>(`${this.rootUrl}/${id}`, data)
      : axios.post<T>(this.rootUrl, data)
  }
}
