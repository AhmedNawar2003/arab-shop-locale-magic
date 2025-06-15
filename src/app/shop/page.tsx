
import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProductsSection } from '@/components/ProductsSection';

const ShopPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">المتجر</h1>
          <p className="text-gray-600">تصفح جميع منتجاتنا المميزة</p>
        </div>
        <ProductsSection />
      </main>
      <Footer />
    </div>
  );
};

export default ShopPage;
