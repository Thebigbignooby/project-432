import express from 'express'
import { hello } from 'hello.world'

const app = express()
const port = process.env.PORT | 3000

app.get('/', async (req, res, next) => {
  const message = await hello()
  console.log('message', message)
  res.send(message)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
