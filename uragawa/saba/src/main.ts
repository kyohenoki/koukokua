import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { requestId } from 'hono/request-id'

const app = new Hono()

app.use('*', cors(), requestId())

app.get('/', (c) => {
	return c.text(c.get('requestId'))
})

export default app
