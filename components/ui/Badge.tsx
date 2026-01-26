import * as React from 'react';

import { cn } from '@/lib/utils';

type BadgeVariant = 'default' | 'secondary' | 'outline';

const Badge = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement> & { variant?: BadgeVariant }>(
    ({ className, variant = 'default', ...props }, ref) => {
        const variants: Record<BadgeVariant, string> = {
            default: 'bg-dark-gray text-white',
            secondary: 'bg-accent-pink text-dark-gray',
            outline: 'border border-dark-gray/20 text-dark-gray',
        };

        return (
            <span
                ref={ref}
                className={cn(
                    'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide',
                    variants[variant],
                    className
                )}
                {...props}
            />
        );
    }
);
Badge.displayName = 'Badge';

export { Badge };
