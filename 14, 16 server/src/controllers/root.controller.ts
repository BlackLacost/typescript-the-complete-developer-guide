import { NextFunction, Request, Response } from 'express'
import { controller, get, use } from '../common/decorators'

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session?.loggedIn) {
    next()
  } else {
    res.status(403).send('Not permitted')
  }
}

@controller('/')
export class RootController {
  @get('/')
  index(req: Request, res: Response) {
    if (req.session?.loggedIn) {
      res.send(/*html*/ `
			<div>
				<div>You are logged in</div>
				<a href="/auth/logout">Logout</a>
			</div>
		`)
    } else {
      res.send(/*html*/ `
			<div>
				<div>You are not logged in</div>
				<a href="/auth/login">Login</a>
			</div>
		`)
    }
  }

  @get('protected')
  @use(requireAuth)
  protected(req: Request, res: Response) {
    res.send('Welcome to protected route!')
  }
}
