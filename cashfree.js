export default async function handler(req,res){
  if(req.method === 'POST'){
    return res.json({ success:true, message:'Cashfree initiate stub - replace with real API call' });
  }
  if(req.method === 'GET'){
    return res.json({ success:true, message:'Cashfree webhook verification stub - implement signature check' });
  }
  res.status(405).end();
}
