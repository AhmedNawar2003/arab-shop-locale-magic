
import React from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { UsersTable } from '@/components/admin/UsersTable';
import { Button } from '@/components/ui/button';
import { UserPlus } from 'lucide-react';

const Users = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">المستخدمين</h1>
            <p className="text-gray-600 mt-2">إدارة جميع المستخدمين في النظام</p>
          </div>
          <Button className="flex items-center gap-2">
            <UserPlus className="h-4 w-4" />
            إضافة مستخدم جديد
          </Button>
        </div>
        
        <UsersTable />
      </div>
    </AdminLayout>
  );
};

export default Users;
