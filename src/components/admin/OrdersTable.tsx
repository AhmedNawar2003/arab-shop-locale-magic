
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Eye, Edit } from 'lucide-react';

const orders = [
  {
    id: '#12345',
    customer: 'أحمد محمد',
    items: 3,
    total: '$1,200',
    status: 'مكتمل',
    date: '2024-06-14',
    paymentMethod: 'بطاقة ائتمان',
  },
  {
    id: '#12346',
    customer: 'فاطمة علي',
    items: 1,
    total: '$999',
    status: 'قيد المعالجة',
    date: '2024-06-13',
    paymentMethod: 'نقداً عند التسليم',
  },
  {
    id: '#12347',
    customer: 'محمد عبدالله',
    items: 2,
    total: '$299',
    status: 'مشحون',
    date: '2024-06-13',
    paymentMethod: 'بطاقة ائتمان',
  },
  {
    id: '#12348',
    customer: 'سارة أحمد',
    items: 1,
    total: '$799',
    status: 'ملغي',
    date: '2024-06-12',
    paymentMethod: 'بطاقة ائتمان',
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'مكتمل':
      return <Badge className="bg-green-100 text-green-800">مكتمل</Badge>;
    case 'قيد المعالجة':
      return <Badge className="bg-yellow-100 text-yellow-800">قيد المعالجة</Badge>;
    case 'مشحون':
      return <Badge className="bg-blue-100 text-blue-800">مشحون</Badge>;
    case 'ملغي':
      return <Badge className="bg-red-100 text-red-800">ملغي</Badge>;
    default:
      return <Badge>{status}</Badge>;
  }
};

export const OrdersTable = () => {
  return (
    <Card>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>رقم الطلب</TableHead>
              <TableHead>العميل</TableHead>
              <TableHead>عدد المنتجات</TableHead>
              <TableHead>المجموع</TableHead>
              <TableHead>الحالة</TableHead>
              <TableHead>التاريخ</TableHead>
              <TableHead>طريقة الدفع</TableHead>
              <TableHead>الإجراءات</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.items}</TableCell>
                <TableCell>{order.total}</TableCell>
                <TableCell>{getStatusBadge(order.status)}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.paymentMethod}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
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
