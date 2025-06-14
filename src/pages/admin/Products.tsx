
import React from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { ProductsTable } from '@/components/admin/ProductsTable';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

const Products = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">المنتجات</h1>
            <p className="text-gray-600 mt-2">إدارة جميع المنتجات في المتجر</p>
          </div>
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            إضافة منتج جديد
          </Button>
        </div>
        
        <ProductsTable />
      </div>
    </AdminLayout>
  );
};

export default Products;
