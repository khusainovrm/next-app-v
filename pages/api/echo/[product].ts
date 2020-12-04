import { NextApiRequest, NextApiResponse } from 'next'

interface ProductNextApiRequest extends NextApiRequest {
  query: {
    product?: string
  }
}

export default (req: ProductNextApiRequest, res: NextApiResponse) => {
  // res.status(200)
  // res.setHeader('Content-Type', 'application/json')
  // res.end(req.query.product)

  res.json(req.query.product)
}
