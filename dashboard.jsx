import { useState } from 'react';
import axios from 'axios';
export default function SellerDashboard(){
  const [title,setTitle] = useState('');
  const [price,setPrice] = useState(0);
  const submit = async ()=>{
    await axios.post('/api/products',{ title, price, type: price>0 ? 'paid' : 'free', sellerId:'me' })
    alert('Product added (mock). Refresh home.')
  }
  return (
    <div>
      <h2 className="text-xl font-bold">Seller Dashboard</h2>
      <input value={title} onChange={e=>setTitle(e.target.value)} className="border p-2 w-full mb-2" placeholder="Product title" />
      <input type="number" value={price} onChange={e=>setPrice(Number(e.target.value))} className="border p-2 w-full mb-2" placeholder="Price" />
      <button onClick={submit} className="bg-orange-600 text-white px-3 py-1 rounded">Add Product</button>
    </div>
  )
}
