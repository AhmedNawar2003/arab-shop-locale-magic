
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Edit, Trash2, Eye } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'جهاز لاب توب ديل',
    category: 'أجهزة كمبيوتر',
    price: '$1,200',
    stock: 25,
    status: 'متوفر',
    sales: 234,
  },
  {
    id: 2,
    name: 'هاتف آيفون 14',
    category: 'هواتف ذكية',
    price: '$999',
    stock: 0,
    status: 'نفدت الكمية',
    sales: 189,
  },
  {
    id: 3,
    name: 'سماعات سوني',
    category: 'إلكترونيات',
    price: '$299',
    stock: 15,
    status: 'متوفر',
    sales: 156,
  },
  {
    id: 4,
    name: 'كاميرا كانون',
    category: 'كاميرات',
    price: '$799',
    stock: 8,
    status: 'قليل',
    sales: 134,
  },
];

const getStatusBadge = (status: string, stock: number) => {
  if (stock === 0) {
    return <Badge className="bg-red-100 text-red-800">نفدت الكمية</Badge>;
  } else if (stock < 10) {
    return <Badge className="bg-yellow-100 text-yellow-800">قليل</Badge>;
  } else {
    return <Badge className="bg-green-100 text-green-800">متوفر</Badge>;
  }
};

export const ProductsTable = () => {
  return (
    <Card>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>اسم المنتج</TableHead>
              <TableHead>الفئة</TableHead>
              <TableHead>السعر</TableHead>
              <TableHead>المخزون</TableHead>
              <TableHead>الحالة</TableHead>
              <TableHead>المبيعات</TableHead>
              <TableHead>الإجراءات</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>{getStatusBadge(product.status, product.stock)}</TableCell>
                <TableCell>{product.sales}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
