
import React from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { StatsCards } from '@/components/admin/StatsCards';
import { RecentOrders } from '@/components/admin/RecentOrders';
import { SalesChart } from '@/components/admin/SalesChart';
import { TopProducts } from '@/components/admin/TopProducts';

const Dashboard = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">لوحة التحكم</h1>
          <p className="text-gray-600 mt-2">مرحباً بك في لوحة التحكم الخاصة بك</p>
        </div>
        
        <StatsCards />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SalesChart />
          <TopProducts />
        </div>
        
        <RecentOrders />
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
