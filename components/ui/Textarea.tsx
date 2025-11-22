import React from 'react';
import { cn } from '@/lib/utils';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, label, error, ...props }, ref) => {
        return (
            <div className="w-full">
                {label && (
                    <label className="block text-sm font-medium text-dark-gray mb-1.5">
                        {label}
                    </label>
                )}
                <textarea
                    ref={ref}
                    className={cn(
                        "w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-dark-gray placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-pink/50 focus:border-accent-pink transition-all duration-200 disabled:opacity-50 disabled:bg-gray-50 min-h-[120px] resize-y",
                        error && "border-red-500 focus:ring-red-200 focus:border-red-500",
                        className
                    )}
                    {...props}
                />
                {error && (
                    <p className="mt-1 text-sm text-red-500">{error}</p>
                )}
            </div>
        );
    }
);

Textarea.displayName = 'Textarea';

export { Textarea };
