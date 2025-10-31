import Link from 'next/link';
export default function NavBar(){
  return (
    <nav className="bg-gradient-to-r from-gray-900 to-orange-700 text-white p-4 rounded-lg mb-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">HimuVerse</div>
        <div className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/seller/dashboard">Sell</Link>
          <Link href="/topup/game">Topup</Link>
          <Link href="/cart">Cart</Link>
          <Link href="/auth/email">Login</Link>
        </div>
      </div>
    </nav>
  )
}
