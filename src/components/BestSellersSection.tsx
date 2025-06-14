
import React from 'react';
import { ProductCard } from './ProductCard';
import { products } from '@/data/products';
import { useLanguage } from '@/contexts/LanguageContext';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export const BestSellersSection = () => {
  const { t } = useLanguage();

  // Get the first 6 products as best sellers for demo
  const bestSellers = products.slice(0, 6);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('bestSellers')}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent className="flex">
            {bestSellers.map((product) => (
              <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/4">
                <ProductCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};
