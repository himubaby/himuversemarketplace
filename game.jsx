import { useState } from 'react';
import axios from 'axios';

export default function Topup(){
  const [uid,setUid] = useState('');
  const [game,setGame] = useState('FreeFire');
  const [amount,setAmount] = useState(49);
  const [msg,setMsg] = useState('');
  const doTopup = async()=>{
    const res = await axios.post('/api/topup',{ uid, game, amount });
    setMsg(res.data.message);
  }
  return (
    <div className="max-w-md">
      <h2 className="text-xl font-bold mb-2">Game Top-up</h2>
      <label>Game</label>
      <select value={game} onChange={e=>setGame(e.target.value)} className="w-full p-2 border mb-2">
        <option>FreeFire</option>
        <option>Valorant</option>
        <option>BGMI</option>
      </select>
      <label>UID</label>
      <input value={uid} onChange={e=>setUid(e.target.value)} className="w-full p-2 border mb-2" />
      <label>Amount (₹)</label>
      <input type="number" value={amount} onChange={e=>setAmount(Number(e.target.value))} className="w-full p-2 border mb-2" />
      <button onClick={doTopup} className="bg-blue-600 text-white px-4 py-2 rounded">Topup</button>
      {msg && <p className="mt-3">{msg}</p>}
      <hr className="my-4" />
      <h3 className="font-semibold">Play Store Topup (recommended legal flow)</h3>
      <p className="text-sm">For real in-app currency inside Play-distributed apps, use Play Billing in the Android app. After purchase, app should POST purchase token to <code>/api/play/verify</code> to credit UID.</p>
    </div>
  )
}
