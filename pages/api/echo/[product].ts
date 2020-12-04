import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  // res.status(200)
  // res.setHeader('Content-Type', 'application/json')
  // res.end(req.query.product)

  res.json(req.query.product)
}
