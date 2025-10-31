let PRODUCTS = [
  { id: 'p1', title: 'Sensitivity Pack — FreeFire (Free)', type:'free', price:0, sellerId:'s1', commissionPercent:10, downloadUrl:'/assets/sens-free.zip' },
  { id: 'p2', title: 'Montage Sounds Pack', type:'paid', price:99, sellerId:'s2', commissionPercent:15, downloadUrl:'/assets/montage-sounds.zip' },
  { id: 'p3', title: 'Clips Pack — BGMI', type:'paid', price:199, sellerId:'s3', commissionPercent:12 }
];

let USERS = [ { id:'u1', email:'test@example.com', phone:'', password:'pass123' } ];

module.exports = {
  getProducts: ()=> PRODUCTS,
  getProduct: (id)=> PRODUCTS.find(p=>p.id===id),
  addProduct: (product)=> { product.id = 'p'+(PRODUCTS.length+1); PRODUCTS.push(product); return product },
  users: USERS
}
