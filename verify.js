import { google } from 'googleapis';
export default async function handler(req,res){
  if(req.method !== 'POST') return res.status(405).end();
  const { purchaseToken, packageName, productId, uid } = req.body;
  if(!process.env.PLAY_SERVICE_ACCOUNT_JSON){
    return res.status(500).json({ success:false, message:'PLAY_SERVICE_ACCOUNT_JSON not set. Running in mock mode.'});
  }
  try {
    const credentials = JSON.parse(process.env.PLAY_SERVICE_ACCOUNT_JSON);
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/androidpublisher']
    });
    const androidpublisher = google.androidpublisher({version:'v3', auth});
    const resp = await androidpublisher.purchases.products.get({
      packageName,
      productId,
      token: purchaseToken
    });
    if(resp.data && resp.data.purchaseState === 0){
      await androidpublisher.purchases.products.acknowledge({
        packageName, productId, token: purchaseToken,
        requestBody: {}
      });
      return res.json({ success:true, orderId: resp.data.orderId || null, message:'Verified and acknowledged (mock DB update required).' });
    }
    return res.status(400).json({ success:false, message:'Invalid purchase state' });
  } catch(e){
    console.error(e);
    return res.status(500).json({ success:false, message: 'Verification failed', error: String(e) });
  }
}
