import { hc } from 'hono/client'
import type { Okurut } from './main'

const client = hc<Okurut>('http://localhost:3000')

console.log(await okuru())

async function okuru() {
  try {
    const res = await client.okuru.$post({
      json: {
        namae: 'kyohei'
      }
    })
    if (res.ok) {
      const oku = await res.json()
      return {
        ok: true,
        oku: oku
      }
    } else {
      return {
        ok: false,
        error: String(res.status)
      }
    }
  } catch (error) {
    return {
      ok: false,
      error: String(error)
    }
  }
}
