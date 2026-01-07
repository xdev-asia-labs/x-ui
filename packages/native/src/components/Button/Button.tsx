import React, { forwardRef, ReactNode } from 'react';
import {
    TouchableOpacity,
    Text,
    ActivityIndicator,
    StyleSheet,
    ViewStyle,
    TextStyle,
    TouchableOpacityProps,
    View,
} from 'react-native';
import { colors, spacing } from '@xdev-asia/x-ui-core';
import { useXTheme } from '../ThemeProvider';

export interface ButtonProps extends TouchableOpacityProps {
    /** Button variant style */
    variant?: 'solid' | 'outline' | 'ghost' | 'glass';
    /** Button size */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /** Color scheme */
    colorScheme?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'neutral';
    /** Show loading spinner */
    isLoading?: boolean;
    /** Disable the button */
    isDisabled?: boolean;
    /** Full width button */
    fullWidth?: boolean;
    /** Left icon */
    leftIcon?: ReactNode;
    /** Right icon */
    rightIcon?: ReactNode;
    /** Button label */
    children?: ReactNode;
}

const colorSchemes = {
    primary: { bg: colors.primary[500], fg: '#FFFFFF' },
    secondary: { bg: colors.secondary[500], fg: '#FFFFFF' },
    success: { bg: colors.success[500], fg: '#FFFFFF' },
    warning: { bg: colors.warning[500], fg: '#FFFFFF' },
    error: { bg: colors.error[500], fg: '#FFFFFF' },
    neutral: { bg: colors.neutral[200], fg: colors.neutral[700] },
};

const sizeConfig = {
    xs: { height: 28, paddingHorizontal: 10, fontSize: 12, gap: 4 },
    sm: { height: 32, paddingHorizontal: 12, fontSize: 14, gap: 6 },
    md: { height: 40, paddingHorizontal: 16, fontSize: 14, gap: 8 },
    lg: { height: 48, paddingHorizontal: 24, fontSize: 16, gap: 10 },
    xl: { height: 56, paddingHorizontal: 32, fontSize: 18, gap: 12 },
};

/**
 * Button component for React Native
 */
export const Button = forwardRef<View, ButtonProps>(
    (
        {
            variant = 'solid',
            size = 'md',
            colorScheme = 'primary',
            isLoading = false,
            isDisabled = false,
            fullWidth = false,
            leftIcon,
            rightIcon,
            children,
            style,
            ...props
        },
        ref
    ) => {
        const { theme } = useXTheme();
        const scheme = colorSchemes[colorScheme];
        const sizeStyle = sizeConfig[size];

        const getContainerStyle = (): ViewStyle => {
            const base: ViewStyle = {
                height: sizeStyle.height,
                paddingHorizontal: sizeStyle.paddingHorizontal,
                borderRadius: spacing[2],
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: sizeStyle.gap,
                opacity: isDisabled || isLoading ? 0.5 : 1,
            };

            if (fullWidth) {
                base.width = '100%';
            }

            switch (variant) {
                case 'solid':
                    return { ...base, backgroundColor: scheme.bg };
                case 'outline':
                    return { ...base, borderWidth: 2, borderColor: scheme.bg, backgroundColor: 'transparent' };
                case 'ghost':
                    return { ...base, backgroundColor: 'transparent' };
                case 'glass':
                    return {
                        ...base,
                        backgroundColor: theme.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                        borderWidth: 1,
                        borderColor: theme.mode === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)',
                    };
                default:
                    return base;
            }
        };

        const getTextStyle = (): TextStyle => {
            const base: TextStyle = {
                fontSize: sizeStyle.fontSize,
                fontWeight: '600',
            };

            switch (variant) {
                case 'solid':
                    return { ...base, color: scheme.fg };
                case 'outline':
                case 'ghost':
                    return { ...base, color: scheme.bg };
                case 'glass':
                    return { ...base, color: theme.colors.foreground };
                default:
                    return base;
            }
        };

        return (
            <TouchableOpacity
                ref={ref as any}
                style={[getContainerStyle(), style as ViewStyle]}
                disabled={isDisabled || isLoading}
                activeOpacity={0.7}
                {...props}
            >
                {isLoading ? (
                    <ActivityIndicator
                        size="small"
                        color={variant === 'solid' ? scheme.fg : scheme.bg}
                    />
                ) : leftIcon}
                {typeof children === 'string' ? (
                    <Text style={getTextStyle()}>{children}</Text>
                ) : (
                    children
                )}
                {!isLoading && rightIcon}
            </TouchableOpacity>
        );
    }
);

Button.displayName = 'Button';
