import React, { useState } from 'react';
import { Store, ShoppingBag, ShieldCheck, Truck, Headphones, Star, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { products } from './data/products';
import { ProductCard } from './components/ProductCard';
import { OrderModal } from './components/OrderModal';
import { Product } from './types';

const features = [
  {
    icon: <Truck className="w-8 h-8 text-black" />,
    title: "Tezkor yetkazib berish",
    description: "Buyurtmangizni O'zbekiston bo'ylab viloyatlarga eng qisqa vaqtlarda yetkazib beramiz."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-black" />,
    title: "Yuqori sifat kafolati",
    description: "Barcha mahsulotlarimiz sinovdan o'tgan va eng yuqori sifat standartlariga javob beradi."
  },
  {
    icon: <Headphones className="w-8 h-8 text-black" />,
    title: "24/7 Qo'llab-quvvatlash",
    description: "Savollaringiz bormi? Operatorlarimiz sizga har qadamda yordam berishga tayyor."
  }
];

const testimonials = [
  {
    name: "Sardor Ahmedov",
    review: "Aqlli soat xarid qildim, sifati a'lo darajada. Yetkazib berish juda tez ekan, katta rahmat!",
    rating: 5
  },
  {
    name: "Malika Karimova",
    review: "Simsiz quloqchinlar kutilganidan ham yaxshi chiqdi. Ovoz sifati daxshat, basslari ham zo'r chiqadi. Hammaga tavsiya qilaman.",
    rating: 5
  },
  {
    name: "Javohir Rustamov",
    review: "Xizmat ko'rsatish juda yoqdi. Buyurtma berish ham oson, operatorlar ham darhol aloqaga chiqishdi va tushuntirishdi.",
    rating: 5
  }
];

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans selection:bg-black selection:text-white flex flex-col">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200/50 transition-all">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 text-black cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="bg-black p-2 rounded-xl">
              <Store className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-2xl tracking-tight">BrandStore</span>
          </div>
          <button 
            onClick={scrollToProducts}
            className="flex hover:scale-105 bg-gray-100 hover:bg-gray-200 text-black px-5 py-2.5 rounded-full font-medium transition-all text-sm items-center gap-2"
          >
            Katalog <ArrowRight size={16}/>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-black text-white pt-40 pb-28 md:pt-52 md:pb-36 px-6 overflow-hidden mt-16 md:mt-0 lg:rounded-b-[4rem] mx-2 md:mx-4 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-50 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1.5 px-5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-sm font-medium mb-8 text-gray-200 shadow-sm">
              ✨ Premium brend mahsulotlari
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold tracking-tight leading-[1.1] mb-8"
          >
            Sifatingizni <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              biz bilan kashf eting
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-light"
          >
            Eng zamonaviy elektronika va premium kundalik gadjetlarni to'g'ridan-to'g'ri, ortiqcha ovoragarchiliklarsiz xarid qiling. Sifat va kafolat bilan.
          </motion.p>
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onClick={scrollToProducts}
            className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)] flex items-center gap-2 mx-auto"
          >
            Xaridni boshlash <ArrowRight size={20}/>
          </motion.button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-4 tracking-tight">Nega aynan biz?</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">Mijozlarimiz bizni tanlashining asosiy sabablari va xizmatimizning yorqin ustunliklari</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="font-display font-bold text-xl text-black mb-3">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products array */}
      <main id="products" className="flex-grow max-w-7xl mx-auto px-6 py-24 w-full text-left scroll-mt-20">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-black mb-3 tracking-tight">Eksklyuziv mahsulotlar</h2>
            <p className="text-gray-500 text-lg">Eng ko'p xarid qilingan, mashhur texnika va jihozlar</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onBuy={(p) => setSelectedProduct(p)} 
              index={idx}
            />
          ))}
        </div>
      </main>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-white border-y border-gray-100 mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-4 tracking-tight">Mijozlarimiz sharhlari</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">Biz sizning kutganingizdan ham yuqoriroq xizmat ko'rsatishga intilamiz</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testi, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-10 rounded-3xl bg-[#FAFAFA] border border-gray-100 flex flex-col justify-between h-full hover:bg-gray-50 transition-colors"
              >
                <div>
                  <div className="flex text-black mb-6 gap-0.5">
                    {[...Array(testi.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-10 md:text-lg">"{testi.review}"</p>
                </div>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold">
                    {testi.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-black font-display">{testi.name}</div>
                    <div className="text-gray-400 text-sm">Xaridor</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-footer Call to Action */}
      <section className="bg-black py-24 px-6 mt-16 lg:rounded-t-[4rem] mx-2 md:mx-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">Xarid qilishga tayyormisiz?</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">Hoziroq katalogga o'ting va o'zingizga yoqqan mahsulotlarni tanlab, buyurtma bering. O'zbekiston bo'ylab tezkor yetkazib beramiz!</p>
          <button 
            onClick={scrollToProducts}
            className="bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(255,255,255,0.1)] inline-flex items-center gap-3"
          >
            Katalogga o'tish <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white pt-10 pb-8 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-xl">
                <Store className="w-5 h-5 text-black" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight">BrandStore</span>
            </div>
            <div className="flex gap-6 max-w-md text-gray-400 text-sm md:text-right text-center">
              "BrandStore" siz uchun mos va premium texnikalarni tez hamda ishonchli taqdim etadi. O'zingizga qulayini tanlang va muammosiz xarid qiling.
            </div>
          </div>
          <div className="pt-8 flex text-gray-500 text-sm text-center justify-center font-medium">
            <p>&copy; {new Date().getFullYear()} BrandStore. Barcha huquqlar qat'iy himoyalangan.</p>
          </div>
        </div>
      </footer>

      {/* Order Modal */}
      {selectedProduct && (
        <OrderModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </div>
  );
}
