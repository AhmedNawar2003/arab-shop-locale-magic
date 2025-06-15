
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Globe, User, Heart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { CartSheet } from './CartSheet';
import { useTranslation } from 'react-i18next';

export const Header = () => {
  const { t, i18n } = useTranslation();
  const { getTotalItems } = useCart();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
    document.documentElement.dir = newLang === "ar" ? 'rtl' : 'ltr';
  };

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <h1 className="text-2xl font-bold text-primary">
                {i18n.language === "ar" ? "منزلي" : "HomeShop"}
              </h1>
            </Link>
          </div>
          {/* Navigation */}
          <nav className="hidden md:flex space-x-8 rtl:space-x-reverse">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              {t('home')}
            </Link>
            <Link 
              to="/shop" 
              className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              {t('shop')}
            </Link>
            <Link 
              to="/wishlist" 
              className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1"
            >
              <Heart className="h-4 w-4" />
              {t('wishlist')}
            </Link>
            <Link 
              to="/payment-methods" 
              className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              {t('paymentMethods')}
            </Link>
          </nav>
          {/* Right side actions */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            {/* Language switcher */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-2"
            >
              <Globe className="h-4 w-4" />
              {i18n.language === 'ar' ? 'EN' : 'عر'}
            </Button>

            {/* Login */}
            <Link to="/auth/login">
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {t('login')}
              </Button>
            </Link>

            {/* Cart */}
            <CartSheet>
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {getTotalItems() > 0 && (
                  <Badge 
                    variant="destructive" 
                    className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                  >
                    {getTotalItems()}
                  </Badge>
                )}
              </Button>
            </CartSheet>
          </div>
        </div>
      </div>
    </header>
  );
};
