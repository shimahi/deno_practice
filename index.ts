import { serve } from 'https://deno.land/std/http/server.ts'

const server = serve({ port: 8000 })

const app = async () => {
  for await (const req of server) {
    req.respond({ body: 'inu' })
  }
}

app()
