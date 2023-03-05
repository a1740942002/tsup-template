import express, { Express } from 'express'

const app: Express = express()

app.get('/', (req, res) => {
  res.json({
    msg: 'tsup good'
  })
})

app.listen(8080)
