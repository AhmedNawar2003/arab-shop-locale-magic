
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const topProducts = [
  { name: 'جهاز لاب توب ديل', sales: 234, revenue: '$23,400' },
  { name: 'هاتف آيفون 14', sales: 189, revenue: '$18,900' },
  { name: 'سماعات سوني', sales: 156, revenue: '$15,600' },
  { name: 'كاميرا كانون', sales: 134, revenue: '$13,400' },
  { name: 'جهاز تابلت سامسونج', sales: 112, revenue: '$11,200' },
];

export const TopProducts = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>أكثر المنتجات مبيعاً</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topProducts.map((product, index) => (
            <div key={product.name} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm font-medium">
                  {index + 1}
                </div>
                <div>
                  <p className="font-medium text-gray-900">{product.name}</p>
                  <p className="text-sm text-gray-500">{product.sales} مبيعة</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-900">{product.revenue}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
