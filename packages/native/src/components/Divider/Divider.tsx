import React, { forwardRef } from 'react';
import { View, Text, StyleSheet, ViewProps } from 'react-native';
import { useXTheme } from '../ThemeProvider';

export interface DividerProps extends ViewProps {
    /** Orientation */
    orientation?: 'horizontal' | 'vertical';
    /** Label */
    label?: string;
    /** Color */
    color?: 'default' | 'muted' | 'primary';
}

const colorStyles = {
    default: '#e2e8f0',
    muted: '#94a3b8',
    primary: '#0066ff30',
};

export const Divider = forwardRef<View, DividerProps>(
    (
        {
            orientation = 'horizontal',
            label,
            color = 'default',
            style,
            ...props
        },
        ref
    ) => {
        const { mode } = useXTheme();
        const lineColor = mode === 'dark' ? '#334155' : colorStyles[color];

        if (label && orientation === 'horizontal') {
            return (
                <View ref={ref} style={[styles.labelContainer, style]} {...props}>
                    <View style={[styles.line, { backgroundColor: lineColor }]} />
                    <Text style={styles.label}>{label}</Text>
                    <View style={[styles.line, { backgroundColor: lineColor }]} />
                </View>
            );
        }

        return (
            <View
                ref={ref}
                style={[
                    orientation === 'horizontal' ? styles.horizontal : styles.vertical,
                    { backgroundColor: lineColor },
                    style,
                ]}
                {...props}
            />
        );
    }
);

Divider.displayName = 'Divider';

const styles = StyleSheet.create({
    horizontal: {
        height: 1,
        width: '100%',
    },
    vertical: {
        width: 1,
        height: '100%',
    },
    labelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    line: {
        flex: 1,
        height: 1,
    },
    label: {
        fontSize: 14,
        color: '#64748b',
    },
});
