
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { products } from '@/data/products';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { toast } from '@/hooks/use-toast';
import { Minus, Plus, Star } from 'lucide-react';

const ProductDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{t('productNotFound')}</h1>
            <p className="text-gray-600">{t('productNotFoundDescription')}</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  };

  const handleAddToCart = () => {
    if (!product.inStock) return;
    
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    
    toast({
      title: t('addToCart'),
      description: `${quantity} × ${t(product.nameKey)} ${t('addedToCart')}`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                <img 
                  src={product.image} 
                  alt={t(product.nameKey)}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {t(product.nameKey)}
                </h1>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-gray-600">(4.5)</span>
                </div>
                <Badge variant={product.inStock ? "default" : "secondary"} className="mb-4">
                  {product.inStock ? t('inStock') : t('outOfStock')}
                </Badge>
              </div>

              <div className="text-4xl font-bold text-primary">
                ${product.price}
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">{t('description')}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(product.descriptionKey)}
                </p>
              </div>

              {/* Quantity Selector */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="font-medium">{t('quantity')}:</span>
                  <div className="flex items-center border rounded-lg">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="px-4 py-2 min-w-[3rem] text-center">{quantity}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setQuantity(quantity + 1)}
                      disabled={!product.inStock}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <Button 
                  size="lg" 
                  className="w-full" 
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                >
                  {t('addToCart')} - ${(product.price * quantity).toFixed(2)}
                </Button>
              </div>

              {/* Product Features */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">{t('features')}</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• {t('highQuality')}</li>
                    <li>• {t('freeShipping')}</li>
                    <li>• {t('warranty')}</li>
                    <li>• {t('easyReturns')}</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
