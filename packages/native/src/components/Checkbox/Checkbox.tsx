import React, { forwardRef } from 'react';
import { View, Text, Pressable, StyleSheet, ViewProps } from 'react-native';
import { colors } from '@xdev-asia/x-ui-core';
import { useXTheme } from '../ThemeProvider';

export interface CheckboxProps extends Omit<ViewProps, 'children'> {
    /** Checked state */
    checked?: boolean;
    /** Change handler */
    onCheckedChange?: (checked: boolean) => void;
    /** Label */
    label?: string;
    /** Description */
    description?: string;
    /** Disabled */
    isDisabled?: boolean;
    /** Size */
    size?: 'sm' | 'md' | 'lg';
    /** Color */
    colorScheme?: 'primary' | 'secondary' | 'success';
}

const sizes = {
    sm: 18,
    md: 22,
    lg: 26,
};

export const Checkbox = forwardRef<View, CheckboxProps>(
    (
        {
            checked = false,
            onCheckedChange,
            label,
            description,
            isDisabled = false,
            size = 'md',
            colorScheme = 'primary',
            style,
            ...props
        },
        ref
    ) => {
        const { mode } = useXTheme();
        const boxSize = sizes[size];
        const checkColor = colorScheme === 'primary'
            ? colors.primary[500]
            : colorScheme === 'secondary'
                ? colors.secondary[500]
                : colors.success[500];

        return (
            <Pressable
                ref={ref}
                onPress={() => !isDisabled && onCheckedChange?.(!checked)}
                style={[styles.container, isDisabled && styles.disabled, style]}
                {...props}
            >
                <View
                    style={[
                        styles.box,
                        {
                            width: boxSize,
                            height: boxSize,
                            borderColor: checked ? checkColor : '#64748b',
                            backgroundColor: checked ? checkColor : 'transparent',
                        },
                    ]}
                >
                    {checked && (
                        <Text style={styles.check}>✓</Text>
                    )}
                </View>
                {(label || description) && (
                    <View style={styles.textContainer}>
                        {label && (
                            <Text style={[styles.label, { color: mode === 'dark' ? '#fff' : '#0f172a' }]}>
                                {label}
                            </Text>
                        )}
                        {description && (
                            <Text style={styles.description}>{description}</Text>
                        )}
                    </View>
                )}
            </Pressable>
        );
    }
);

Checkbox.displayName = 'Checkbox';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 12,
    },
    disabled: {
        opacity: 0.5,
    },
    box: {
        borderWidth: 2,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    check: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
    textContainer: {
        flex: 1,
    },
    label: {
        fontSize: 14,
        fontWeight: '500',
    },
    description: {
        fontSize: 12,
        color: '#64748b',
        marginTop: 2,
    },
});
