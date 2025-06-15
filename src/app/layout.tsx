
import React from 'react';
import { Toaster } from '@/components/ui/sonner';

interface RootLayoutProps {
  children: React.ReactNode;
}

export const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>متجر إلكتروني</title>
        <meta name="description" content="أفضل متجر إلكتروني لجميع احتياجاتك" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
};

export default RootLayout;
