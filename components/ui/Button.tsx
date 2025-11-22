import React from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
    icon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', isLoading, icon, children, ...props }, ref) => {
        const variants = {
            primary: 'bg-accent-pink text-dark-gray hover:bg-white hover:shadow-lg hover:scale-105 active:scale-95',
            secondary: 'bg-dark-gray text-white hover:bg-gold hover:shadow-lg hover:scale-105 active:scale-95',
            outline: 'border-2 border-dark-gray text-dark-gray hover:bg-dark-gray hover:text-white hover:shadow-lg hover:scale-105 active:scale-95',
            ghost: 'text-dark-gray hover:bg-primary-pink/50 hover:text-black',
        };

        const sizes = {
            sm: 'px-4 py-2 text-sm',
            md: 'px-6 py-3 text-base',
            lg: 'px-8 py-4 text-lg',
        };

        return (
            <button
                ref={ref}
                className={cn(
                    'inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden group',
                    variants[variant],
                    sizes[size],
                    className
                )}
                disabled={isLoading || props.disabled}
                {...props}
            >
                {/* Shine Effect */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine" />

                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin relative z-10" />}
                {!isLoading && icon && <span className="mr-2 relative z-10">{icon}</span>}
                <span className="relative z-10">{children}</span>
            </button>
        );
    }
);

Button.displayName = 'Button';

export { Button };
