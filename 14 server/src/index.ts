import cookieSession from 'cookie-session'
import express from 'express'
import { router } from './routes/login.routes'

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(cookieSession({ keys: ['fgfdgsdfgs'] }))

app.use(router)

app.listen(3000, () => {
  console.log(`Server on http://localhost:${3000}`)
})
