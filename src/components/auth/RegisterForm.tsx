
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema, type RegisterFormData } from '@/lib/validation';
import { sanitizeFormData } from '@/lib/sanitize';
import { toast } from '@/hooks/use-toast';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { PasswordField } from './PasswordField';
import { TermsCheckbox } from './TermsCheckbox';
import { useLanguage } from '@/contexts/LanguageContext';

export function RegisterForm() {
  const { t } = useLanguage();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const password = form.watch('password');

  const handleSubmit = async (data: RegisterFormData) => {
    setIsLoading(true);
    
    try {
      // Sanitize input data
      const sanitizedData = sanitizeFormData(data);
      
      // TODO: Implement actual registration logic when backend is connected
      // Remove this log before production - for development only
      console.log('Registration attempt for:', {
        email: sanitizedData.email,
        firstName: sanitizedData.firstName,
        lastName: sanitizedData.lastName,
      });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: t('registrationSuccess') || 'Registration successful',
        description: t('accountCreated') || 'Your account has been created successfully',
      });
      
    } catch (error) {
      toast({
        title: t('registrationError') || 'Registration failed',
        description: t('registrationFailed') || 'Failed to create account. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('firstName')}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t('firstNamePlaceholder')}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('lastName')}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t('lastNamePlaceholder')}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('email')}</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder={t('emailPlaceholder')}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <PasswordField
          control={form.control}
          name="password"
          label={t('password')}
          placeholder={t('passwordPlaceholder')}
          showPassword={showPassword}
          onTogglePassword={() => setShowPassword(!showPassword)}
          showStrengthIndicator={true}
          password={password}
        />

        <PasswordField
          control={form.control}
          name="confirmPassword"
          label={t('confirmPassword')}
          placeholder={t('confirmPasswordPlaceholder')}
          showPassword={showConfirmPassword}
          onTogglePassword={() => setShowConfirmPassword(!showConfirmPassword)}
        />

        <TermsCheckbox />

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? t('creatingAccount') : t('createAccount')}
        </Button>
      </form>
    </Form>
  );
}
