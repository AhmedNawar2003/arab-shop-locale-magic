
import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { CartProvider } from '@/contexts/CartContext';
import { RegisterForm } from '@/components/auth/RegisterForm';

const RegisterContent = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center bg-gray-50 py-12">
        <div className="max-w-md w-full mx-auto px-4">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">{t('register')}</CardTitle>
              <p className="text-gray-600 mt-2">{t('registerDescription')}</p>
            </CardHeader>
            <CardContent>
              <RegisterForm />

              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  {t('alreadyHaveAccount')}{' '}
                  <Link to="/login" className="text-primary hover:underline font-medium">
                    {t('login')}
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const Register = () => {
  return (
    <LanguageProvider>
      <CartProvider>
        <RegisterContent />
      </CartProvider>
    </LanguageProvider>
  );
};

export default Register;
