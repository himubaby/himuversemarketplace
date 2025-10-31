import ProductCard from '../components/ProductCard';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home(){
  const [products,setProducts] = useState([]);
  useEffect(()=>{
    axios.get('/api/products').then(r=>setProducts(r.data));
  },[]);
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Marketplace</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map(p=> <ProductCard key={p.id} product={p}/>)}
      </div>
    </div>
  )
}
