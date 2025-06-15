
import React from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { OrdersTable } from '@/components/admin/OrdersTable';

const AdminOrdersPage = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">الطلبات</h1>
          <p className="text-gray-600 mt-2">إدارة جميع الطلبات في النظام</p>
        </div>
        
        <OrdersTable />
      </div>
    </AdminLayout>
  );
};

export default AdminOrdersPage;
