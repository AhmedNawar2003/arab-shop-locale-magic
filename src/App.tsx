
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/sonner';
import { CartProvider } from '@/contexts/CartContext';
import { WishlistProvider } from '@/contexts/WishlistContext';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

// Import page components using the new app structure
import HomePage from '@/app/page';
import ShopPage from '@/app/shop/page';
import ProductDetailsPage from '@/app/product/[id]/page';
import LoginPage from '@/app/auth/login/page';
import RegisterPage from '@/app/auth/register/page';
import AdminDashboardPage from '@/app/admin/page';
import AdminProductsPage from '@/app/admin/products/page';
import AdminOrdersPage from '@/app/admin/orders/page';
import AdminUsersPage from '@/app/admin/users/page';
import AdminAnalyticsPage from '@/app/admin/analytics/page';
import AdminSettingsPage from '@/app/admin/settings/page';
import NotFoundPage from '@/app/not-found/page';
import WishlistPage from '@/app/wishlist/page';
import PaymentMethodsPage from '@/app/payment-methods/page';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n}>
        <WishlistProvider>
          <CartProvider>
            <Router>
              <div className="min-h-screen bg-background">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/shop" element={<ShopPage />} />
                  <Route path="/product/:id" element={<ProductDetailsPage />} />
                  <Route path="/auth/login" element={<LoginPage />} />
                  <Route path="/auth/register" element={<RegisterPage />} />
                  <Route path="/admin" element={<AdminDashboardPage />} />
                  <Route path="/admin/products" element={<AdminProductsPage />} />
                  <Route path="/admin/orders" element={<AdminOrdersPage />} />
                  <Route path="/admin/users" element={<AdminUsersPage />} />
                  <Route path="/admin/analytics" element={<AdminAnalyticsPage />} />
                  <Route path="/admin/settings" element={<AdminSettingsPage />} />
                  <Route path="/wishlist" element={<WishlistPage />} />
                  <Route path="/payment-methods" element={<PaymentMethodsPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
                <Toaster />
              </div>
            </Router>
          </CartProvider>
        </WishlistProvider>
      </I18nextProvider>
    </QueryClientProvider>
  );
}
export default App;
