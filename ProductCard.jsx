import Link from 'next/link';
export default function ProductCard({product}){
  return (
    <div className="border p-4 rounded-lg shadow-sm bg-slate-800">
      <h3 className="font-semibold">{product.title}</h3>
      <p className="text-sm">{product.type === 'free' ? 'Free' : `₹${product.price}`}</p>
      <div className="mt-3 flex justify-between">
        <Link href={`/products/${product.id}`}><a className="underline">View</a></Link>
        <button className="bg-orange-500 text-white px-3 py-1 rounded">Add to cart</button>
      </div>
    </div>
  )
}
