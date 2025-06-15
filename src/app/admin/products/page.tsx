
import React from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { ProductsTable } from '@/components/admin/ProductsTable';

const AdminProductsPage = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">المنتجات</h1>
          <p className="text-gray-600 mt-2">إدارة جميع المنتجات في المتجر</p>
        </div>
        
        <ProductsTable />
      </div>
    </AdminLayout>
  );
};

export default AdminProductsPage;
