export default async function handler(req,res){
  if(req.method === 'POST'){
    return res.json({ success:true, message:'Paytm initiate stub - replace with real API call' });
  }
  res.status(405).end();
}
