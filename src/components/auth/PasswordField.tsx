
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { PasswordStrengthIndicator } from '@/components/PasswordStrengthIndicator';
import { Eye, EyeOff } from 'lucide-react';
import { Control, FieldPath, FieldValues } from 'react-hook-form';
import { useLanguage } from '@/contexts/LanguageContext';

interface PasswordFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  label: string;
  placeholder: string;
  showPassword: boolean;
  onTogglePassword: () => void;
  showStrengthIndicator?: boolean;
  password?: string;
}

export function PasswordField<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  showPassword,
  onTogglePassword,
  showStrengthIndicator = false,
  password = '',
}: PasswordFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <div className="relative">
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder={placeholder}
                {...field}
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute left-auto right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
                onClick={onTogglePassword}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </Button>
            </div>
          </FormControl>
          {showStrengthIndicator && <PasswordStrengthIndicator password={password} />}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
