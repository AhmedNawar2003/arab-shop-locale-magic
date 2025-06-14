
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { categories } from '@/data/categories';
import { useLanguage } from '@/contexts/LanguageContext';

export const CategoriesSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('categories')}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent className="flex">
            {categories.map((category) => (
              <CarouselItem key={category.id} className="md:basis-1/2 lg:basis-1/4">
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src={category.image} 
                        alt={t(category.nameKey)}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="text-4xl mb-2">{category.icon}</div>
                          <h3 className="text-xl font-semibold">{t(category.nameKey)}</h3>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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
