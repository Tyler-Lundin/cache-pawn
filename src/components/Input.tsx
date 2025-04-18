import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

interface BaseInputProps {
  label?: string;
  error?: string;
  className?: string;
}

type InputProps = BaseInputProps & InputHTMLAttributes<HTMLInputElement>;
type TextareaProps = BaseInputProps & TextareaHTMLAttributes<HTMLTextAreaElement>;

const baseStyles = "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white/75";

export const Input = ({ label, error, className = '', ...props }: InputProps) => {
  return (
    <div className="space-y-1">
      {label && (
        <label htmlFor={props.id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        className={`${baseStyles} ${className}`}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

export const Textarea = ({ label, error, className = '', ...props }: TextareaProps) => {
  return (
    <div className="space-y-1">
      {label && (
        <label htmlFor={props.id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <textarea
        className={`${baseStyles} ${className}`}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}; 