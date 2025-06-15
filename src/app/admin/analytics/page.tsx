
import React from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { AnalyticsCharts } from '@/components/admin/AnalyticsCharts';
import { StatsCards } from '@/components/admin/StatsCards';

const AdminAnalyticsPage = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">التحليلات</h1>
          <p className="text-gray-600 mt-2">تحليل شامل لأداء المتجر والمبيعات</p>
        </div>
        
        <StatsCards />
        <AnalyticsCharts />
      </div>
    </AdminLayout>
  );
};

export default AdminAnalyticsPage;
