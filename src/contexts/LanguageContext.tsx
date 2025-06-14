import React, { createContext, useContext, useState, useEffect } from 'react';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

interface LanguageContextProps {
  language: string;
  setLanguage: (language: string) => void;
  t: (key: string, params?: { [key: string]: string | number }) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

const translations: Translations = {
  ar: {
    home: 'الرئيسية',
    products: 'المنتجات',
    about: 'من نحن',
    contact: 'اتصل بنا',
    featuredProducts: 'المنتجات المميزة',
    inStock: 'متوفر',
    outOfStock: 'غير متوفر',
    addToCart: 'أضف إلى السلة',
    'luxury-sofa': 'كنبة فاخرة',
    'luxury-sofa-desc': 'كنبة فاخرة ومريحة للاسترخاء',
    'modern-lamp': 'مصباح عصري',
    'modern-lamp-desc': 'مصباح أنيق يضيف لمسة جمالية',
    'wooden-table': 'طاولة خشبية',
    'wooden-table-desc': 'طاولة خشبية متينة للاستخدام اليومي',
    'comfortable-bed': 'سرير مريح',
    'comfortable-bed-desc': 'سرير يوفر لك نوماً هانئاً',
    'stylish-chair': 'كرسي أنيق',
    'stylish-chair-desc': 'كرسي بتصميم فريد وعصري',
    'elegant-cabinet': 'خزانة أنيقة',
    'elegant-cabinet-desc': 'خزانة واسعة لتخزين أغراضك',
    heroTitle: 'أثاث منزلي فاخر',
    heroSubtitle: 'أضف لمسة من الأناقة إلى منزلك',
    shopNow: 'تسوق الآن',
    categories: 'الفئات',
    bestSellers: 'الأكثر مبيعاً',
    shop: 'المتجر',
    shopDescription: 'اكتشف مجموعتنا الواسعة من المنتجات المنzلية عالية الجودة',
    filters: 'التصفية',
    category: 'الفئة',
    selectCategory: 'اختر الفئة',
    allCategories: 'جميع الفئات',
    priceRange: 'نطاق السعر',
    sortBy: 'ترتيب حسب',
    name: 'الاسم',
    priceLowToHigh: 'السعر من الأقل للأعلى',
    priceHighToLow: 'السعر من الأعلى للأقل',
    clearFilters: 'مسح التصفية',
    showingResults: 'عرض {count} نتيجة',
    noProductsFound: 'لم يتم العثور على منتجات',
    productNotFound: 'المنتج غير موجود',
    productNotFoundDescription: 'المنتج الذي تبحث عنه غير متوفر',
    description: 'الوصف',
    quantity: 'الكمية',
    features: 'المميزات',
    highQuality: 'جودة عالية',
    freeShipping: 'شحن مجاني',
    warranty: 'ضمان لمدة سنة',
    easyReturns: 'إرجاع سهل',
    addedToCart: 'تم إضافته للسلة',
    login: 'تسجيل الدخول',
    loginDescription: 'قم بتسجيل الدخول إلى حسابك',
    email: 'البريد الإلكتروني',
    emailPlaceholder: 'أدخل بريدك الإلكتروني',
    password: 'كلمة المرور',
    passwordPlaceholder: 'أدخل كلمة المرور',
    rememberMe: 'تذكرني',
    forgotPassword: 'نسيت كلمة المرور؟',
    loggingIn: 'جاري تسجيل الدخول...',
    noAccount: 'ليس لديك حساب؟',
    createAccount: 'إنشاء حساب',
    register: 'التسجيل',
    registerDescription: 'أنشئ حساباً جديداً',
    firstName: 'الاسم الأول',
    firstNamePlaceholder: 'أدخل اسمك الأول',
    lastName: 'اسم العائلة',
    lastNamePlaceholder: 'أدخل اسم العائلة',
    confirmPassword: 'تأكيد كلمة المرور',
    confirmPasswordPlaceholder: 'أكد كلمة المرور',
    agreeToTerms: 'أوافق على',
    termsAndConditions: 'الشروط والأحكام',
    creatingAccount: 'جاري إنشاء الحساب...',
    alreadyHaveAccount: 'لديك حساب بالفعل؟',
    passwordsMismatch: 'كلمات المرور غير متطابقة',
    furniture: 'أثاث',
    lighting: 'إضاءة',
    bedroom: 'غرفة النوم',
    storage: 'تخزين',
    kitchen: 'مطبخ',
    bathroom: 'حمام'
  },
  en: {
    home: 'Home',
    products: 'Products',
    about: 'About',
    contact: 'Contact',
    featuredProducts: 'Featured Products',
    inStock: 'In Stock',
    outOfStock: 'Out of Stock',
    addToCart: 'Add to Cart',
    'luxury-sofa': 'Luxury Sofa',
    'luxury-sofa-desc': 'A luxurious and comfortable sofa for relaxing',
    'modern-lamp': 'Modern Lamp',
    'modern-lamp-desc': 'A stylish lamp that adds an aesthetic touch',
    'wooden-table': 'Wooden Table',
    'wooden-table-desc': 'A durable wooden table for everyday use',
    'comfortable-bed': 'Comfortable Bed',
    'comfortable-bed-desc': 'A bed that offers you a peaceful sleep',
    'stylish-chair': 'Stylish Chair',
    'stylish-chair-desc': 'A chair with a unique and modern design',
    'elegant-cabinet': 'Elegant Cabinet',
    'elegant-cabinet-desc': 'A spacious cabinet for storing your belongings',
    heroTitle: 'Luxury Home Furniture',
    heroSubtitle: 'Add a touch of elegance to your home',
    shopNow: 'Shop Now',
    categories: 'Categories',
    bestSellers: 'Best Sellers',
    shop: 'Shop',
    shopDescription: 'Discover our wide range of high-quality home products',
    filters: 'Filters',
    category: 'Category',
    selectCategory: 'Select Category',
    allCategories: 'All Categories',
    priceRange: 'Price Range',
    sortBy: 'Sort By',
    name: 'Name',
    priceLowToHigh: 'Price: Low to High',
    priceHighToLow: 'Price: High to Low',
    clearFilters: 'Clear Filters',
    showingResults: 'Showing {count} results',
    noProductsFound: 'No products found',
    productNotFound: 'Product Not Found',
    productNotFoundDescription: 'The product you are looking for is not available',
    description: 'Description',
    quantity: 'Quantity',
    features: 'Features',
    highQuality: 'High Quality Materials',
    freeShipping: 'Free Shipping',
    warranty: '1 Year Warranty',
    easyReturns: 'Easy Returns',
    addedToCart: 'added to cart',
    login: 'Login',
    loginDescription: 'Sign in to your account',
    email: 'Email',
    emailPlaceholder: 'Enter your email',
    password: 'Password',
    passwordPlaceholder: 'Enter your password',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot password?',
    loggingIn: 'Logging in...',
    noAccount: "Don't have an account?",
    createAccount: 'Create Account',
    register: 'Register',
    registerDescription: 'Create a new account',
    firstName: 'First Name',
    firstNamePlaceholder: 'Enter your first name',
    lastName: 'Last Name',
    lastNamePlaceholder: 'Enter your last name',
    confirmPassword: 'Confirm Password',
    confirmPasswordPlaceholder: 'Confirm your password',
    agreeToTerms: 'I agree to the',
    termsAndConditions: 'Terms and Conditions',
    creatingAccount: 'Creating account...',
    alreadyHaveAccount: 'Already have an account?',
    passwordsMismatch: 'Passwords do not match',
    furniture: 'Furniture',
    lighting: 'Lighting',
    bedroom: 'Bedroom',
    storage: 'Storage',
    kitchen: 'Kitchen',
    bathroom: 'Bathroom'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');
  const isRTL = language === 'ar';

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    localStorage.setItem('language', language);
  }, [isRTL, language]);

  const t = (key: string, params: { [key: string]: string | number } = {}) => {
    let translation = translations[language][key] || key;

    Object.keys(params).forEach(paramKey => {
      translation = translation.replace(`{${paramKey}}`, String(params[paramKey]));
    });

    return translation;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
