
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Edit, Trash2, Eye } from 'lucide-react';

const users = [
  {
    id: 1,
    name: 'أحمد محمد',
    email: 'ahmed@example.com',
    role: 'مستخدم',
    status: 'نشط',
    joinDate: '2024-01-15',
    orders: 12,
  },
  {
    id: 2,
    name: 'فاطمة علي',
    email: 'fatima@example.com',
    role: 'مدير',
    status: 'نشط',
    joinDate: '2024-02-20',
    orders: 8,
  },
  {
    id: 3,
    name: 'محمد عبدالله',
    email: 'mohammed@example.com',
    role: 'مستخدم',
    status: 'معطل',
    joinDate: '2024-03-10',
    orders: 5,
  },
  {
    id: 4,
    name: 'سارة أحمد',
    email: 'sara@example.com',
    role: 'مستخدم',
    status: 'نشط',
    joinDate: '2024-04-05',
    orders: 15,
  },
];

const getRoleBadge = (role: string) => {
  switch (role) {
    case 'مدير':
      return <Badge className="bg-purple-100 text-purple-800">مدير</Badge>;
    case 'مستخدم':
      return <Badge className="bg-gray-100 text-gray-800">مستخدم</Badge>;
    default:
      return <Badge>{role}</Badge>;
  }
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'نشط':
      return <Badge className="bg-green-100 text-green-800">نشط</Badge>;
    case 'معطل':
      return <Badge className="bg-red-100 text-red-800">معطل</Badge>;
    default:
      return <Badge>{status}</Badge>;
  }
};

export const UsersTable = () => {
  return (
    <Card>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>الاسم</TableHead>
              <TableHead>البريد الإلكتروني</TableHead>
              <TableHead>الدور</TableHead>
              <TableHead>الحالة</TableHead>
              <TableHead>تاريخ الانضمام</TableHead>
              <TableHead>عدد الطلبات</TableHead>
              <TableHead>الإجراءات</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{getRoleBadge(user.role)}</TableCell>
                <TableCell>{getStatusBadge(user.status)}</TableCell>
                <TableCell>{user.joinDate}</TableCell>
                <TableCell>{user.orders}</TableCell>
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
