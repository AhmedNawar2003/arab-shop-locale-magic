
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      home: 'Home',
      shop: 'Shop',
      wishlist: 'Wishlist',
      paymentMethods: 'Payment Methods',
      addToWishlist: 'Add to Wishlist',
      addedToWishlist: 'Added to Wishlist!',
      payNow: 'Pay Now',
      // ... (أضف الرسائل المطلوبة تدريجيًا)
    }
  },
  ar: {
    translation: {
      home: 'الرئيسية',
      shop: 'المتجر',
      wishlist: 'قائمة الرغبات',
      paymentMethods: 'طرق الدفع',
      addToWishlist: 'أضف إلى قائمة الرغبات',
      addedToWishlist: 'تمت الإضافة!',
      payNow: 'ادفع الآن',
      // ... (أضف الرسائل المطلوبة تدريجيًا)
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('language') || 'ar',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  }
});

export default i18n;
