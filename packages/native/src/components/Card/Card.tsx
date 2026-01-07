import React, { forwardRef, ReactNode } from 'react';
import { View, Text, ViewProps, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { borderRadius, spacing, colors } from '@xdev-asia/x-ui-core';
import { useXTheme } from '../ThemeProvider';

export interface CardProps extends ViewProps {
    /** Card variant */
    variant?: 'elevated' | 'outlined' | 'filled' | 'glass';
    /** Padding size */
    padding?: 'none' | 'sm' | 'md' | 'lg';
    children?: ReactNode;
}

const paddingValues = {
    none: 0,
    sm: spacing[3],
    md: spacing[5],
    lg: spacing[7],
};

/**
 * Card component for React Native
 */
export const Card = forwardRef<View, CardProps>(
    ({ variant = 'elevated', padding = 'md', style, children, ...props }, ref) => {
        const { theme } = useXTheme();

        const getContainerStyle = (): ViewStyle => {
            const base: ViewStyle = {
                borderRadius: borderRadius.xl,
                padding: paddingValues[padding],
            };

            switch (variant) {
                case 'elevated':
                    return {
                        ...base,
                        backgroundColor: theme.colors.card,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.1,
                        shadowRadius: 12,
                        elevation: 5,
                    };
                case 'outlined':
                    return {
                        ...base,
                        backgroundColor: theme.colors.card,
                        borderWidth: 1,
                        borderColor: theme.colors.border,
                    };
                case 'filled':
                    return {
                        ...base,
                        backgroundColor: theme.colors.muted,
                    };
                case 'glass':
                    return {
                        ...base,
                        backgroundColor: theme.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.7)',
                        borderWidth: 1,
                        borderColor: theme.mode === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)',
                    };
                default:
                    return base;
            }
        };

        return (
            <View ref={ref} style={[getContainerStyle(), style]} {...props}>
                {children}
            </View>
        );
    }
);

Card.displayName = 'Card';

export interface CardHeaderProps extends ViewProps {
    children?: ReactNode;
}

export const CardHeader = forwardRef<View, CardHeaderProps>(
    ({ style, children, ...props }, ref) => (
        <View ref={ref} style={[{ paddingBottom: spacing[4], gap: spacing[1.5] }, style]} {...props}>
            {children}
        </View>
    )
);
CardHeader.displayName = 'CardHeader';

export interface CardTitleProps {
    children?: ReactNode;
    style?: TextStyle;
}

export const CardTitle: React.FC<CardTitleProps> = ({ children, style }) => {
    const { theme } = useXTheme();
    return (
        <Text style={[{ fontSize: 20, fontWeight: '600', color: theme.colors.cardForeground }, style]}>
            {children}
        </Text>
    );
};

export interface CardDescriptionProps {
    children?: ReactNode;
    style?: TextStyle;
}

export const CardDescription: React.FC<CardDescriptionProps> = ({ children, style }) => {
    const { theme } = useXTheme();
    return (
        <Text style={[{ fontSize: 14, color: theme.colors.mutedForeground }, style]}>
            {children}
        </Text>
    );
};

export interface CardContentProps extends ViewProps {
    children?: ReactNode;
}

export const CardContent = forwardRef<View, CardContentProps>(
    ({ style, children, ...props }, ref) => (
        <View ref={ref} style={style} {...props}>
            {children}
        </View>
    )
);
CardContent.displayName = 'CardContent';

export interface CardFooterProps extends ViewProps {
    children?: ReactNode;
}

export const CardFooter = forwardRef<View, CardFooterProps>(
    ({ style, children, ...props }, ref) => (
        <View
            ref={ref}
            style={[{ flexDirection: 'row', alignItems: 'center', paddingTop: spacing[4], gap: spacing[3] }, style]}
            {...props}
        >
            {children}
        </View>
    )
);
CardFooter.displayName = 'CardFooter';
