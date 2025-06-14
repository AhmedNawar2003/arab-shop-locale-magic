
import React from 'react';
import { Users, Package, ShoppingCart, DollarSign } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const stats = [
  {
    title: 'إجمالي المستخدمين',
    value: '2,543',
    change: '+12%',
    changeType: 'increase',
    icon: Users,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    title: 'إجمالي المنتجات',
    value: '1,247',
    change: '+8%',
    changeType: 'increase',
    icon: Package,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  {
    title: 'الطلبات الجديدة',
    value: '89',
    change: '+23%',
    changeType: 'increase',
    icon: ShoppingCart,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
  },
  {
    title: 'إجمالي المبيعات',
    value: '$45,678',
    change: '+15%',
    changeType: 'increase',
    icon: DollarSign,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
];

export const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <p className="text-xs text-green-600 mt-1">
                {stat.change} من الشهر الماضي
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
