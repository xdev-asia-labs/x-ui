import React, { forwardRef, ReactNode } from 'react';
import { View, ViewProps, ViewStyle } from 'react-native';
import { spacing, borderRadius } from '@xdev-asia/x-ui-core';
import { useXTheme } from '../ThemeProvider';

export interface BoxProps extends ViewProps {
    /** Padding */
    p?: number;
    /** Padding X (horizontal) */
    px?: number;
    /** Padding Y (vertical) */
    py?: number;
    /** Margin */
    m?: number;
    /** Margin X (horizontal) */
    mx?: number;
    /** Margin Y (vertical) */
    my?: number;
    /** Background color */
    bg?: string;
    /** Border radius */
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
    /** Glass effect */
    glass?: boolean;
    /** Children */
    children?: ReactNode;
}

const roundedValues = {
    none: 0,
    sm: borderRadius.sm,
    md: borderRadius.md,
    lg: borderRadius.lg,
    xl: borderRadius.xl,
    '2xl': borderRadius['2xl'],
    full: borderRadius.full,
};

/**
 * Box component for React Native
 * A flexible container for layout and styling
 */
export const Box = forwardRef<View, BoxProps>(
    (
        {
            p,
            px,
            py,
            m,
            mx,
            my,
            bg,
            rounded,
            glass = false,
            style,
            children,
            ...props
        },
        ref
    ) => {
        const { theme } = useXTheme();

        const computedStyle: ViewStyle = {
            ...(p !== undefined && { padding: p * 4 }),
            ...(px !== undefined && { paddingHorizontal: px * 4 }),
            ...(py !== undefined && { paddingVertical: py * 4 }),
            ...(m !== undefined && { margin: m * 4 }),
            ...(mx !== undefined && { marginHorizontal: mx * 4 }),
            ...(my !== undefined && { marginVertical: my * 4 }),
            ...(bg && { backgroundColor: bg }),
            ...(rounded && { borderRadius: roundedValues[rounded] }),
            ...(glass && {
                backgroundColor: theme.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.7)',
                borderWidth: 1,
                borderColor: theme.mode === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)',
            }),
        };

        return (
            <View ref={ref} style={[computedStyle, style]} {...props}>
                {children}
            </View>
        );
    }
);

Box.displayName = 'Box';
