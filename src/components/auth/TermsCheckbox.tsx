
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

export function TermsCheckbox() {
  const { t } = useLanguage();
  
  return (
    <div className="flex items-center">
      <input type="checkbox" className="mr-2" required />
      <span className="text-sm text-gray-600">
        {t('agreeToTerms')}{' '}
        <Link to="#" className="text-primary hover:underline">
          {t('termsAndConditions')}
        </Link>
      </span>
    </div>
  );
}
