import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200)
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ message: req.query.message ?? 'Base message' }))
}
