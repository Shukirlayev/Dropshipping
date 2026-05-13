import React, { useState } from 'react';
import { X, CheckCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../types';

interface OrderModalProps {
  product: Product;
  onClose: () => void;
}

export function OrderModal({ product, onClose }: OrderModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [telegram, setTelegram] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, telegram, product })
      });
      
      const data = await response.json();
      
      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Xatolik yuz berdi. Iltimos keyinroq qayta urinib ko\'ring.');
      }
      
      setStatus('success');
    } catch (err: any) {
      setErrorMessage(err.message);
      setStatus('error');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }} 
        className="absolute inset-0 bg-black/40 backdrop-blur-md"
        onClick={onClose}
      />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="bg-white rounded-[2rem] w-full max-w-lg overflow-hidden shadow-2xl shadow-black/20 relative z-10"
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <h3 className="font-display font-bold text-xl text-black">Buyurtma rasmiylashtirish</h3>
          <button onClick={onClose} className="p-2 bg-gray-50 rounded-full text-gray-400 hover:text-black hover:bg-gray-100 transition-colors">
            <X size={20} />
          </button>
        </div>
        
        {status === 'success' ? (
          <div className="p-10 flex flex-col items-center justify-center text-center space-y-4">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', bounce: 0.5 }}>
              <CheckCircle className="text-black w-20 h-20" />
            </motion.div>
            <h4 className="text-2xl font-display font-bold text-black mt-4">Muvaffaqiyatli!</h4>
            <p className="text-gray-500">Buyurtmangiz qabul qilindi. Tez orada siz bilan aloqaga chiqamiz.</p>
            <button onClick={onClose} className="mt-6 px-8 py-3.5 bg-black text-white rounded-full font-medium hover:scale-105 transition-transform w-full shadow-lg shadow-gray-200">Davom etish</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 md:p-8 flex flex-col text-left">
            <div className="flex items-center gap-4 p-4 bg-[#FAFAFA] rounded-2xl border border-gray-100 mb-6">
              <img src={product.imageUrl} alt={product.name} className="w-20 h-20 object-cover rounded-xl shadow-sm bg-white" />
              <div>
                <p className="font-display font-bold text-black line-clamp-1 text-lg">{product.name}</p>
                <p className="text-gray-500 mt-1">{product.price}</p>
              </div>
            </div>

            {status === 'error' && (
              <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl text-sm border border-red-100 font-medium">
                {errorMessage}
              </div>
            )}

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Ism familiyangiz</label>
                <input required type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Sardor Muminov" className="w-full px-4 py-3 bg-[#FAFAFA] border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-black focus:border-black outline-none transition-all placeholder:text-gray-400" />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Telefon raqamingiz</label>
                <input required type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="+998 90 123 45 67" className="w-full px-4 py-3 bg-[#FAFAFA] border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-black focus:border-black outline-none transition-all placeholder:text-gray-400" />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Telegram manzilingiz</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500 font-medium">@</span>
                  <input required type="text" value={telegram} onChange={e => setTelegram(e.target.value.replace(/^@/, ''))} placeholder="username" className="w-full pl-9 pr-4 py-3 bg-[#FAFAFA] border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-black focus:border-black outline-none transition-all placeholder:text-gray-400" />
                </div>
                <p className="text-xs text-gray-400 mt-2">Siz bilan bog'lanishimiz uchun to'g'ri kiriting</p>
              </div>
            </div>
            
            <button disabled={status === 'loading'} type="submit" className="w-full py-4 bg-black hover:bg-gray-800 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-gray-200 hover:shadow-xl hover:-translate-y-0.5 mt-8">
              {status === 'loading' ? <Loader2 size={20} className="animate-spin" /> : "Buyurtmani tasdiqlash"}
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
}
