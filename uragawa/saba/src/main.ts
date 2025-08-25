import { zValidator } from '@hono/zod-validator'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { requestId } from 'hono/request-id'
import { z } from 'zod'

const app = new Hono()

app.use('*', cors(), requestId())

app.get('/', (c) => {
  return c.text(c.get('requestId'))
})

const okuru = z.object({
  namae: z.string()
})

const okurut = app.post('/okuru', zValidator('json', okuru), (c) => {
  const oku = c.req.valid('json')
  return c.json({
    message: `arigato ${oku.namae}`
  })
})

export type Okurut = typeof okurut
export default app
