export default function handler(req,res){
  if(req.method !== 'POST') return res.status(405).end();
  const { uid, game, amount } = req.body;
  // STUB: Real topup needs partner API. Here we return mock success.
  return res.status(200).json({ success:true, message:f`Topup successful for ${game} UID ${uid}. Amount ₹${amount}` });
}
