import { NextFunction, Request, Response, Router } from 'express'

const router = Router()

interface Login {
  email?: string
  password?: string
}

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session?.loggedIn) {
    next()
  } else {
    res.status(403).send('Not permitted')
  }
}

router.get('/login', (req: Request, res: Response) => {
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
})

router.post('/login', (req: Request<{}, any, Login>, res: Response) => {
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
})

router.get('/', (req: Request, res: Response) => {
  if (req.session?.loggedIn) {
    res.send(/*html*/ `
			<div>
				<div>You are logged in</div>
				<a href="/logout">Logout</a>
			</div>
		`)
  } else {
    res.send(/*html*/ `
			<div>
				<div>You are not logged in</div>
				<a href="/login">Login</a>
			</div>
		`)
  }
})

router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined
  res.redirect('/')
})

router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send('Welcome to protected route!')
})

export { router }
