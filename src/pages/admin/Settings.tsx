
import React from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { SettingsForm } from '@/components/admin/SettingsForm';

const Settings = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">الإعدادات</h1>
          <p className="text-gray-600 mt-2">إعدادات النظام والتكوين العام</p>
        </div>
        
        <SettingsForm />
      </div>
    </AdminLayout>
  );
};

export default Settings;
