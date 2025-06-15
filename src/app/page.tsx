
import React from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { CategoriesSection } from '@/components/CategoriesSection';
import { BestSellersSection } from '@/components/BestSellersSection';
import { ProductsSection } from '@/components/ProductsSection';
import { Footer } from '@/components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CategoriesSection />
        <BestSellersSection />
        <ProductsSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
