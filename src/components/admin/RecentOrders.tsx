
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const recentOrders = [
  {
    id: '#12345',
    customer: 'أحمد محمد',
    product: 'جهاز لاب توب ديل',
    amount: '$1,200',
    status: 'مكتمل',
    date: '2024-06-14',
  },
  {
    id: '#12346',
    customer: 'فاطمة علي',
    product: 'هاتف آيفون 14',
    amount: '$999',
    status: 'قيد المعالجة',
    date: '2024-06-13',
  },
  {
    id: '#12347',
    customer: 'محمد عبدالله',
    product: 'سماعات سوني',
    amount: '$299',
    status: 'مشحون',
    date: '2024-06-13',
  },
  {
    id: '#12348',
    customer: 'سارة أحمد',
    product: 'كاميرا كانون',
    amount: '$799',
    status: 'ملغي',
    date: '2024-06-12',
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

export const RecentOrders = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>الطلبات الأخيرة</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>رقم الطلب</TableHead>
              <TableHead>العميل</TableHead>
              <TableHead>المنتج</TableHead>
              <TableHead>المبلغ</TableHead>
              <TableHead>الحالة</TableHead>
              <TableHead>التاريخ</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.product}</TableCell>
                <TableCell>{order.amount}</TableCell>
                <TableCell>{getStatusBadge(order.status)}</TableCell>
                <TableCell>{order.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
