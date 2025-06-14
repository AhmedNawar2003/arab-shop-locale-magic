
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';

export const SettingsForm = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>إعدادات عامة</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="siteName">اسم الموقع</Label>
            <Input id="siteName" defaultValue="HomeShop" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="siteDescription">وصف الموقع</Label>
            <Textarea id="siteDescription" defaultValue="متجر إلكتروني شامل لجميع احتياجاتك" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="contactEmail">بريد التواصل</Label>
            <Input id="contactEmail" type="email" defaultValue="info@homeshop.com" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">رقم الهاتف</Label>
            <Input id="phone" defaultValue="+966 50 123 4567" />
          </div>
          
          <Button className="w-full">حفظ الإعدادات العامة</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>إعدادات المتجر</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="currency">العملة</Label>
            <Input id="currency" defaultValue="SAR" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="taxRate">معدل الضريبة (%)</Label>
            <Input id="taxRate" type="number" defaultValue="15" />
          </div>
          
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <Switch id="notifications" />
            <Label htmlFor="notifications">تفعيل الإشعارات</Label>
          </div>
          
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <Switch id="maintenance" />
            <Label htmlFor="maintenance">وضع الصيانة</Label>
          </div>
          
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <Switch id="guestCheckout" defaultChecked />
            <Label htmlFor="guestCheckout">السماح بالشراء بدون تسجيل</Label>
          </div>
          
          <Button className="w-full">حفظ إعدادات المتجر</Button>
        </CardContent>
      </Card>
    </div>
  );
};
