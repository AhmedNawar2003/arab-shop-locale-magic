
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-r from-primary/10 to-primary/5 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {t('heroTitle')}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('heroSubtitle')}
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8 py-3"
            onClick={scrollToProducts}
          >
            {t('shopNow')}
          </Button>
        </div>
      </div>
      
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-primary/3 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};
