import express from 'express'
import { hello } from './hello.world'

const app = express()
const port = process.env.PORT | 3000

app.get('/', (req, res, next) => {
  res.send(hello())
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
