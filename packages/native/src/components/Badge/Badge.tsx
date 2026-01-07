import React, { forwardRef, ReactNode } from 'react';
import { View, Text, ViewStyle, TextStyle } from 'react-native';
import { colors, borderRadius, spacing } from '@xdev-asia/x-ui-core';
import { useXTheme } from '../ThemeProvider';

export interface BadgeProps {
    /** Badge variant */
    variant?: 'solid' | 'outline' | 'subtle';
    /** Color scheme */
    colorScheme?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'neutral';
    /** Badge size */
    size?: 'sm' | 'md' | 'lg';
    /** Pill shape */
    rounded?: boolean;
    /** Left icon */
    leftIcon?: ReactNode;
    /** Content */
    children?: ReactNode;
    /** Custom style */
    style?: ViewStyle;
}

const sizeConfig = {
    sm: { paddingHorizontal: 6, paddingVertical: 2, fontSize: 10 },
    md: { paddingHorizontal: 8, paddingVertical: 2, fontSize: 12 },
    lg: { paddingHorizontal: 10, paddingVertical: 4, fontSize: 14 },
};

const colorSchemes = {
    primary: { bg: colors.primary[500], fg: '#FFFFFF', subtle: colors.primary[100], subtleFg: colors.primary[700] },
    secondary: { bg: colors.secondary[500], fg: '#FFFFFF', subtle: colors.secondary[100], subtleFg: colors.secondary[700] },
    success: { bg: colors.success[500], fg: '#FFFFFF', subtle: colors.success[100], subtleFg: colors.success[700] },
    warning: { bg: colors.warning[500], fg: '#FFFFFF', subtle: colors.warning[100], subtleFg: colors.warning[700] },
    error: { bg: colors.error[500], fg: '#FFFFFF', subtle: colors.error[100], subtleFg: colors.error[700] },
    neutral: { bg: colors.neutral[500], fg: '#FFFFFF', subtle: colors.neutral[100], subtleFg: colors.neutral[700] },
};

/**
 * Badge component for React Native
 */
export const Badge = forwardRef<View, BadgeProps>(
    (
        {
            variant = 'solid',
            colorScheme = 'primary',
            size = 'md',
            rounded = true,
            leftIcon,
            children,
            style,
        },
        ref
    ) => {
        const scheme = colorSchemes[colorScheme];
        const sizeStyle = sizeConfig[size];

        const getContainerStyle = (): ViewStyle => {
            const base: ViewStyle = {
                flexDirection: 'row',
                alignItems: 'center',
                gap: 4,
                paddingHorizontal: sizeStyle.paddingHorizontal,
                paddingVertical: sizeStyle.paddingVertical,
                borderRadius: rounded ? borderRadius.full : borderRadius.sm,
            };

            switch (variant) {
                case 'solid':
                    return { ...base, backgroundColor: scheme.bg };
                case 'outline':
                    return { ...base, borderWidth: 1, borderColor: scheme.bg, backgroundColor: 'transparent' };
                case 'subtle':
                    return { ...base, backgroundColor: scheme.subtle };
                default:
                    return base;
            }
        };

        const getTextStyle = (): TextStyle => ({
            fontSize: sizeStyle.fontSize,
            fontWeight: '600',
            color: variant === 'solid' ? scheme.fg : variant === 'outline' ? scheme.bg : scheme.subtleFg,
        });

        return (
            <View ref={ref} style={[getContainerStyle(), style]}>
                {leftIcon}
                {typeof children === 'string' ? (
                    <Text style={getTextStyle()}>{children}</Text>
                ) : (
                    children
                )}
            </View>
        );
    }
);

Badge.displayName = 'Badge';
