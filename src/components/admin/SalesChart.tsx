
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const salesData = [
  { month: 'يناير', sales: 4000 },
  { month: 'فبراير', sales: 3000 },
  { month: 'مارس', sales: 5000 },
  { month: 'أبريل', sales: 4500 },
  { month: 'مايو', sales: 6000 },
  { month: 'يونيو', sales: 5500 },
];

export const SalesChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>مبيعات الأشهر الستة الماضية</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="sales" 
              stroke="#3B82F6" 
              strokeWidth={2}
              dot={{ fill: '#3B82F6' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
