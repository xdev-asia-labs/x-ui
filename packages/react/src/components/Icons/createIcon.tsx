import React, { forwardRef } from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    color?: string;
    strokeWidth?: number;
}

export const createIcon = (payload: {
    path: React.ReactNode;
    viewBox?: string;
}) => {
    const Icon = forwardRef<SVGSVGElement, IconProps>(
        ({ size = 24, color = 'currentColor', strokeWidth = 2, style, ...props }, ref) => {
            return (
                <svg
                    ref={ref}
                    width={size}
                    height={size}
                    viewBox={payload.viewBox || "0 0 24 24"}
                    fill="none"
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ ...style }}
                    {...props}
                >
                    {payload.path}
                </svg>
            );
        }
    );

    Icon.displayName = 'Icon';
    return Icon;
};
