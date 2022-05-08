import { User, UserProps } from '../models/User'
import { View } from './View'

export class UserShow extends View<User, UserProps> {
  eventsMap: () => { [key: string]: () => void } = () => {
    return {}
  }

  template(): string {
    return /*html*/ `
		<div>
			<h1>User</h1>
			<p>Name: ${this.model.get('name')}</p>
			<p>Age: ${this.model.get('age')}</p>
		</div>
		`
  }
}
