
import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { Minus, Plus, Trash2 } from 'lucide-react';

interface CartSheetProps {
  children: React.ReactNode;
}

export const CartSheet: React.FC<CartSheetProps> = ({ children }) => {
  const { t, isRTL } = useLanguage();
  const { items, updateQuantity, removeFromCart, getTotalPrice } = useCart();

  return (
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent side={isRTL ? "left" : "right"} className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className={isRTL ? 'text-right' : 'text-left'}>
            {t('cart')}
          </SheetTitle>
          <SheetDescription className={isRTL ? 'text-right' : 'text-left'}>
            {items.length === 0 ? t('cartEmpty') : `${items.length} منتج في السلة`}
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6 flex-1">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-center">
              <p className="text-gray-500 mb-4">{t('cartEmpty')}</p>
              <Button>{t('continueShoping')}</Button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 rtl:space-x-reverse bg-gray-50 p-4 rounded-lg">
                  <img 
                    src={item.image} 
                    alt={t(item.nameKey)}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-gray-900 truncate">
                      {t(item.nameKey)}
                    </h3>
                    <p className="text-sm text-gray-500">
                      ${item.price}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="text-sm font-medium w-8 text-center">
                      {item.quantity}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-red-500 hover:text-red-700"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
              
              <div className="border-t pt-4 mt-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold">{t('total')}:</span>
                  <span className="text-lg font-bold text-primary">
                    ${getTotalPrice().toFixed(2)}
                  </span>
                </div>
                <Button className="w-full" size="lg">
                  {t('checkout')}
                </Button>
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
