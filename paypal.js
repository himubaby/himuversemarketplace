export default async function handler(req,res){
  if(req.method !== 'POST') return res.status(405).end();
  const { productId } = req.body || req.query;
  // STUB: Create PayPal order server-side here (use PAYPAL_CLIENT_ID & SECRET)
  // For now return mock approval url
  return res.status(200).json({ approvalUrl: '/mock-paypal-success?order=ord_123', orderId:'ord_123' });
}
