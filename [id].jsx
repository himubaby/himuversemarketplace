import { useRouter } from 'next/router';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function ProductPage(){
  const r = useRouter();
  const { id } = r.query;
  const [product,setProduct] = useState(null);
  useEffect(()=>{ if(!id) return; axios.get('/api/products').then(res=>{ const p = res.data.find(x=>x.id===id); setProduct(p) }) },[id]);
  if(!product) return <div>Loading...</div>
  return (
    <div>
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <p className="my-2">{product.type === 'free' ? 'Free' : `Price: ₹${product.price}`}</p>
      {product.type === 'free' ? (
        <a href={product.downloadUrl} className="underline">Download</a>
      ) : (
        <form action="/api/checkout/paypal" method="POST">
          <input type="hidden" name="productId" value={product.id} />
          <button className="bg-green-600 text-white px-4 py-2 rounded">Buy via PayPal</button>
        </form>
      )}
    </div>
  )
}
