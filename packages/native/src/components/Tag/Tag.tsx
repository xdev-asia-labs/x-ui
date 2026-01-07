import React, { forwardRef, ReactNode } from 'react';
import { View, Text, Pressable, StyleSheet, ViewProps } from 'react-native';
import { colors } from '@xdev-asia/x-ui-core';

export interface TagProps extends ViewProps {
    /** Variant */
    variant?: 'solid' | 'outline' | 'subtle';
    /** Color */
    colorScheme?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'neutral';
    /** Size */
    size?: 'sm' | 'md' | 'lg';
    /** Closable */
    closable?: boolean;
    /** Close handler */
    onClose?: () => void;
    children?: ReactNode;
}

const sizeStyles = {
    sm: { paddingHorizontal: 8, paddingVertical: 2, fontSize: 11 },
    md: { paddingHorizontal: 10, paddingVertical: 4, fontSize: 12 },
    lg: { paddingHorizontal: 12, paddingVertical: 6, fontSize: 13 },
};

const colorMap = {
    primary: colors.primary[500],
    secondary: colors.secondary[500],
    success: colors.success[500],
    warning: colors.warning[500],
    error: colors.error[500],
    neutral: '#64748b',
};

export const Tag = forwardRef<View, TagProps>(
    (
        {
            variant = 'subtle',
            colorScheme = 'neutral',
            size = 'md',
            closable = false,
            onClose,
            style,
            children,
            ...props
        },
        ref
    ) => {
        const color = colorMap[colorScheme];
        const sizeStyle = sizeStyles[size];

        const getContainerStyle = () => {
            switch (variant) {
                case 'solid':
                    return { backgroundColor: color };
                case 'outline':
                    return { borderWidth: 1, borderColor: color, backgroundColor: 'transparent' };
                case 'subtle':
                default:
                    return { backgroundColor: `${color}20` };
            }
        };

        const getTextColor = () => {
            return variant === 'solid' ? '#fff' : color;
        };

        return (
            <View
                ref={ref}
                style={[
                    styles.container,
                    getContainerStyle(),
                    { paddingHorizontal: sizeStyle.paddingHorizontal, paddingVertical: sizeStyle.paddingVertical },
                    style,
                ]}
                {...props}
            >
                <Text style={[styles.text, { color: getTextColor(), fontSize: sizeStyle.fontSize }]}>
                    {children}
                </Text>
                {closable && (
                    <Pressable onPress={onClose} style={styles.closeButton}>
                        <Text style={[styles.closeText, { color: getTextColor() }]}>×</Text>
                    </Pressable>
                )}
            </View>
        );
    }
);

Tag.displayName = 'Tag';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 9999,
        gap: 4,
    },
    text: {
        fontWeight: '500',
    },
    closeButton: {
        marginLeft: 4,
    },
    closeText: {
        fontSize: 14,
        fontWeight: 'bold',
    },
});
