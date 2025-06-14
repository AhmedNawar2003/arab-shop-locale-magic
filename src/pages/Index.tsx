
import React from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { CategoriesSection } from '@/components/CategoriesSection';
import { ProductsSection } from '@/components/ProductsSection';
import { BestSellersSection } from '@/components/BestSellersSection';
import { Footer } from '@/components/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { CartProvider } from '@/contexts/CartContext';

const Index = () => {
  return (
    <LanguageProvider>
      <CartProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <HeroSection />
            <CategoriesSection />
            <ProductsSection />
            <BestSellersSection />
          </main>
          <Footer />
        </div>
      </CartProvider>
    </LanguageProvider>
  );
};

export default Index;
