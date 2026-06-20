import { forwardRef, type InputHTMLAttributes } from "react";

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, error, id, ...rest }, ref) => {
    return (
      <div>
        <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-ink-700">
          {label}
        </label>
        <input
          id={id}
          ref={ref}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`w-full rounded-xl border-2 bg-white px-4 py-3 text-ink-800 placeholder:text-ink-300 transition-colors duration-200 focus:outline-none ${
            error
              ? "border-coral-400 focus:border-coral-500"
              : "border-ink-100 focus:border-violet-400"
          }`}
          {...rest}
        />
        {error && (
          <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm font-medium text-coral-600">
            {error}
          </p>
        )}
      </div>
    );
  }
);

FormField.displayName = "FormField";

export default FormField;
