
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, ArrowRight } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-300">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">الصفحة غير موجودة</h2>
          <p className="text-gray-600 text-lg mb-8">
            عذراً، لا يمكننا العثور على الصفحة التي تبحث عنها.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link to="/">
              <Home className="w-4 h-4 mr-2" />
              العودة للرئيسية
            </Link>
          </Button>
          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowRight className="w-4 h-4 mr-2" />
            العودة للصفحة السابقة
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
