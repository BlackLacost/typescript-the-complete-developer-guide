import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/1'

interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

axios.get<Todo>(url).then((response) => {
  const todo = response.data

  logTodo(todo.id, todo.title, todo.completed)
})

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(
    `
		The Todo with ID: ${id}
		Has a title of: ${title}
		Is it finished? ${completed}
	`
  )
}
