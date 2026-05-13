import { Product } from '../types';

// O'zingizning mahsulotlaringizni shu yerga qo'shishingiz, o'zgartirishingiz yoki o'chirishingiz mumkin.
export const products: Product[] = [
  {
    id: "prod-1",
    name: "Premium Aqlli Soat (Smartwatch)",
    description: "Sog'ligingizni nazorat qiling, qo'ng'iroqlarga javob bering va zamonaviy ko'rinishga ega bo'ling. Batareyasi 7 kungacha yetadi.",
    price: "450,000 so'm",
    deliveryTime: "1-3 kun ichida",
    imageUrl: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "prod-2",
    name: "Simsiz Quloqchinlar (Pro Version)",
    description: "Yuqori sifatli ovoz balandligi, shovqinni pasaytirish funksiyasi va qulay dizayn.",
    price: "250,000 so'm",
    deliveryTime: "1-2 kun ichida",
    imageUrl: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "prod-3",
    name: "Mini Proyektor 4K",
    description: "Uyingizda haqiqiy kinoteatr muhitini yarating. Telefon yoki noutbukka oson ulanadi.",
    price: "850,000 so'm",
    deliveryTime: "2-4 kun ichida",
    imageUrl: "https://images.unsplash.com/photo-1626305607374-2798e21c8282?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "prod-4",
    name: "Ergonomik Noutbuk Tagligi",
    description: "Kompyuteringiz qizib ketmasligi va bo'yin og'riqlarining oldini olish uchun sovutuvchi taglik.",
    price: "180,000 so'm",
    deliveryTime: "1-3 kun ichida",
    imageUrl: "https://images.unsplash.com/photo-1616422285623-14ff01620e7e?auto=format&fit=crop&q=80&w=800",
  }
];
