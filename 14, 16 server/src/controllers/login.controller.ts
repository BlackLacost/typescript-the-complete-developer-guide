import { NextFunction, Request, Response } from 'express'
import { bodyValidator, controller, get, post, use } from '../common/decorators'

interface Login {
  email?: string
  password?: string
}

function logger(req: Request, res: Response, next: NextFunction) {
  console.log('Request was made!!!')
  next()
}

@controller('/auth')
export class LoginController {
  // @get('/a')
  // add(a: number, b: number): number {
  //   return a + b
  // }

  @get('/login')
  @use(logger)
  loginForm(req: Request, res: Response): void {
    res.send(/*html*/ `
		<form method="POST">
			<div>
				<lable>Email</lable>
				<input name="email" type="email" />
			</div>
			<div>
				<lable>Password</lable>
				<input name="password" type="password" />
			</div>
			<button>Submit</button>
		</form>
	`)
  }

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: Request<{}, any, Login>, res: Response) {
    const { email, password } = req.body

    if (
      email &&
      password &&
      email === 'blacklacost@gmail.com' &&
      password === 'qwe'
    ) {
      req.session = { loggedIn: true }
      res.redirect('/')
    } else {
      res.send('Invalid email or password')
    }
  }

  @get('/logout')
  logout(req: Request, res: Response) {
    req.session = undefined
    res.redirect('/')
  }
}
