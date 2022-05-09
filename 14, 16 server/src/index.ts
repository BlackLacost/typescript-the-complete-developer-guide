import cookieSession from 'cookie-session'
import express from 'express'
import 'reflect-metadata'
import { AppRouter } from './AppRouter'
import './controllers/login.controller'
import './controllers/root.controller'

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(cookieSession({ keys: ['fgfdgsdfgs'] }))

app.use(AppRouter.getInstance())

app.listen(3000, () => {
  console.log(`Server on http://localhost:${3000}`)
})
