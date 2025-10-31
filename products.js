import { getProducts, addProduct } from '../../lib/mock-db';
export default function handler(req,res){
  if(req.method === 'GET') return res.status(200).json(getProducts());
  if(req.method === 'POST'){
    const p = addProduct(req.body);
    return res.status(201).json(p);
  }
  res.status(405).end();
}
