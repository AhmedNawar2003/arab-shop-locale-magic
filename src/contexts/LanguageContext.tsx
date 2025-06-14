
import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isRTL: boolean;
  t: (key: string) => string;
}

const translations = {
  ar: {
    // Navigation
    home: 'الرئيسية',
    products: 'المنتجات',
    cart: 'السلة',
    about: 'من نحن',
    contact: 'اتصل بنا',
    
    // Hero section
    heroTitle: 'منتجات منزلية عالية الجودة',
    heroSubtitle: 'اكتشف مجموعتنا المميزة من المنتجات المنزلية التي تجعل حياتك أسهل وأجمل',
    shopNow: 'تسوق الآن',
    
    // Products
    featuredProducts: 'المنتجات المميزة',
    addToCart: 'أضف للسلة',
    price: 'السعر',
    description: 'الوصف',
    inStock: 'متوفر',
    outOfStock: 'غير متوفر',
    
    // Product names
    'luxury-sofa': 'أريكة فاخرة',
    'modern-lamp': 'مصباح عصري',
    'wooden-table': 'طاولة خشبية',
    'comfortable-bed': 'سرير مريح',
    'stylish-chair': 'كرسي أنيق',
    'elegant-cabinet': 'خزانة أنيقة',
    
    // Product descriptions
    'luxury-sofa-desc': 'أريكة فاخرة مريحة مصنوعة من أجود الخامات',
    'modern-lamp-desc': 'مصباح عصري بتصميم أنيق يضفي لمسة جمالية',
    'wooden-table-desc': 'طاولة خشبية صلبة مثالية لغرفة المعيشة',
    'comfortable-bed-desc': 'سرير مريح يضمن لك نوم هادئ ومريح',
    'stylish-chair-desc': 'كرسي أنيق وعملي مناسب لأي مساحة',
    'elegant-cabinet-desc': 'خزانة أنيقة توفر مساحة تخزين واسعة',
    
    // Cart
    cartEmpty: 'السلة فارغة',
    continueshopping: 'متابعة التسوق',
    checkout: 'إتمام الشراء',
    total: 'المجموع',
    
    // Footer
    footerDescription: 'متجركم المميز للمنتجات المنزلية عالية الجودة',
    followUs: 'تابعونا',
    allRightsReserved: 'جميع الحقوق محفوظة',
  },
  en: {
    // Navigation
    home: 'Home',
    products: 'Products',
    cart: 'Cart',
    about: 'About',
    contact: 'Contact',
    
    // Hero section
    heroTitle: 'High Quality Home Products',
    heroSubtitle: 'Discover our premium collection of home products that make your life easier and more beautiful',
    shopNow: 'Shop Now',
    
    // Products
    featuredProducts: 'Featured Products',
    addToCart: 'Add to Cart',
    price: 'Price',
    description: 'Description',
    inStock: 'In Stock',
    outOfStock: 'Out of Stock',
    
    // Product names
    'luxury-sofa': 'Luxury Sofa',
    'modern-lamp': 'Modern Lamp',
    'wooden-table': 'Wooden Table',
    'comfortable-bed': 'Comfortable Bed',
    'stylish-chair': 'Stylish Chair',
    'elegant-cabinet': 'Elegant Cabinet',
    
    // Product descriptions
    'luxury-sofa-desc': 'Luxurious and comfortable sofa made from the finest materials',
    'modern-lamp-desc': 'Modern lamp with elegant design that adds aesthetic touch',
    'wooden-table-desc': 'Solid wooden table perfect for your living room',
    'comfortable-bed-desc': 'Comfortable bed that ensures peaceful and restful sleep',
    'stylish-chair-desc': 'Elegant and functional chair suitable for any space',
    'elegant-cabinet-desc': 'Elegant cabinet that provides ample storage space',
    
    // Cart
    cartEmpty: 'Cart is empty',
    continueShoping: 'Continue Shopping',
    checkout: 'Checkout',
    total: 'Total',
    
    // Footer
    footerDescription: 'Your premium store for high-quality home products',
    followUs: 'Follow Us',
    allRightsReserved: 'All rights reserved',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');
  const isRTL = language === 'ar';

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ar']] || key;
  };

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, isRTL]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isRTL, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
