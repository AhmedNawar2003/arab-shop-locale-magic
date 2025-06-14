
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export const Footer = () => {
  const { t, isRTL } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              {isRTL ? 'منزلي' : 'HomeShop'}
            </h3>
            <p className="text-gray-300 mb-4 max-w-md">
              {t('footerDescription')}
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('home')}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('home')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('products')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('about')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('contact')}</a></li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('contact')}</h4>
            <div className="space-y-2 text-gray-300">
              <p>123 Main Street</p>
              <p>City, Country</p>
              <p>+1 234 567 8900</p>
              <p>info@homeshop.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 {isRTL ? 'منزلي' : 'HomeShop'}. {t('allRightsReserved')}.
          </p>
        </div>
      </div>
    </footer>
  );
};
