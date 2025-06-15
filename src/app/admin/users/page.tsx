
import React from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { UsersTable } from '@/components/admin/UsersTable';

const AdminUsersPage = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">المستخدمون</h1>
          <p className="text-gray-600 mt-2">إدارة حسابات المستخدمين</p>
        </div>
        
        <UsersTable />
      </div>
    </AdminLayout>
  );
};

export default AdminUsersPage;
