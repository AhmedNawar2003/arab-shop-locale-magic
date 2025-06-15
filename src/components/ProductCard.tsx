
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/types/product';
import WishlistButton from './WishlistButton';
import { useTranslation } from 'react-i18next';
import { useCart } from '@/contexts/CartContext';
import { toast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { t } = useTranslation();
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!product.inStock) return;
    addToCart(product);
    toast({
      title: t('addToCart'),
      description: `${t(product.nameKey)} ${t('addedToCart')}`,
    });
  };

  return (
    <Link to={`/product/${product.id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
        <CardHeader className="p-0">
          <div className="relative">
            <img 
              src={product.image} 
              alt={t(product.nameKey)}
              className="w-full h-48 object-cover"
            />
            {!product.inStock && (
              <Badge 
                variant="secondary" 
                className="absolute top-2 left-2 bg-red-500 text-white"
              >
                {t('outOfStock')}
              </Badge>
            )}
          </div>
        </CardHeader>
        <CardContent className="p-4 flex-1">
          <h3 className="font-semibold text-lg mb-2 line-clamp-1">
            {t(product.nameKey)}
          </h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {t(product.descriptionKey)}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-primary">
              ${product.price}
            </span>
            <Badge variant={product.inStock ? "default" : "secondary"}>
              {product.inStock ? t('inStock') : t('outOfStock')}
            </Badge>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex gap-2">
          <Button 
            className="flex-1" 
            onClick={handleAddToCart}
            disabled={!product.inStock}
          >
            {t('addToCart')}
          </Button>
          <WishlistButton product={product} />
        </CardFooter>
      </Card>
    </Link>
  );
};
