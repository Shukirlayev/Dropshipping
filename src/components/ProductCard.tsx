import React from 'react';
import { Clock, ShoppingBag } from 'lucide-react';
import { motion } from 'motion/react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onBuy: (product: Product) => void;
  index?: number;
}

export function ProductCard({ product, onBuy, index = 0 }: ProductCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 border border-gray-100 flex flex-col h-full group"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-50 p-6 flex items-center justify-center">
        {/* Subtle radial background to make product pop */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-100/50 to-transparent"></div>
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700 ease-out z-10 shadow-sm" 
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-gray-900 flex items-center gap-1.5 shadow-sm z-20">
          <Clock size={13} className="text-gray-500" /> {product.deliveryTime}
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow text-left">
        <h3 className="font-display font-bold text-gray-900 text-xl md:text-2xl line-clamp-2 leading-tight mb-3">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-6 line-clamp-3 leading-relaxed flex-grow">{product.description}</p>
        
        <div className="mt-auto border-t border-gray-100 pt-6">
          <p className="text-2xl font-display font-bold text-black mb-5">{product.price}</p>
          <button 
            onClick={() => onBuy(product)}
            className="w-full py-4 bg-black hover:bg-gray-800 text-white rounded-2xl font-medium transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg group/btn"
          >
            <ShoppingBag size={18} />
            Hozir xarid qilish
          </button>
        </div>
      </div>
    </motion.div>
  );
}
