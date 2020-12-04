import { NextApiRequest, NextApiResponse } from 'next'

interface MessageNextApiRequest extends NextApiRequest {
  query: {
    message?: string
  }
}

export default (req: MessageNextApiRequest, res: NextApiResponse) => {
  res.status(200)
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ message: req.query.message ?? 'Base message' }))
}
