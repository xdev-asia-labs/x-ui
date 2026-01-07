import React, { forwardRef } from 'react';
import { View, Switch as RNSwitch, Text, StyleSheet, Pressable, ViewProps } from 'react-native';
import { colors } from '@xdev-asia/x-ui-core';
import { useXTheme } from '../ThemeProvider';

export interface SwitchProps extends Omit<ViewProps, 'children'> {
    /** Switch value */
    value?: boolean;
    /** Change handler */
    onValueChange?: (value: boolean) => void;
    /** Label */
    label?: string;
    /** Label position */
    labelPosition?: 'left' | 'right';
    /** Disabled */
    isDisabled?: boolean;
    /** Color */
    colorScheme?: 'primary' | 'secondary' | 'success';
}

export const Switch = forwardRef<View, SwitchProps>(
    (
        {
            value = false,
            onValueChange,
            label,
            labelPosition = 'right',
            isDisabled = false,
            colorScheme = 'primary',
            style,
            ...props
        },
        ref
    ) => {
        const { mode } = useXTheme();
        const trackColor = colorScheme === 'primary'
            ? colors.primary[500]
            : colorScheme === 'secondary'
                ? colors.secondary[500]
                : colors.success[500];

        return (
            <View ref={ref} style={[styles.container, style]} {...props}>
                {label && labelPosition === 'left' && (
                    <Text style={[styles.label, { color: mode === 'dark' ? '#fff' : '#0f172a' }]}>{label}</Text>
                )}
                <RNSwitch
                    value={value}
                    onValueChange={onValueChange}
                    disabled={isDisabled}
                    trackColor={{ false: '#64748b', true: trackColor }}
                    thumbColor={value ? '#fff' : '#fff'}
                />
                {label && labelPosition === 'right' && (
                    <Text style={[styles.label, { color: mode === 'dark' ? '#fff' : '#0f172a' }]}>{label}</Text>
                )}
            </View>
        );
    }
);

Switch.displayName = 'Switch';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    label: {
        fontSize: 14,
        fontWeight: '500',
    },
});
