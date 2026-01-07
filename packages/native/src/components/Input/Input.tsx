import React, { forwardRef, ReactNode } from 'react';
import { View, TextInput, Text, TextInputProps, ViewStyle, TextStyle } from 'react-native';
import { colors, borderRadius, spacing } from '@xdev-asia/x-ui-core';
import { useXTheme } from '../ThemeProvider';

export interface InputProps extends TextInputProps {
    /** Input variant */
    variant?: 'outline' | 'filled' | 'flushed';
    /** Input size */
    size?: 'sm' | 'md' | 'lg';
    /** Show error state */
    isInvalid?: boolean;
    /** Disable input */
    isDisabled?: boolean;
    /** Label text */
    label?: string;
    /** Error message */
    errorMessage?: string;
    /** Helper text */
    helperText?: string;
    /** Left icon */
    leftIcon?: ReactNode;
    /** Right icon */
    rightIcon?: ReactNode;
    /** Container style */
    containerStyle?: ViewStyle;
}

const sizeConfig = {
    sm: { height: 32, fontSize: 14, paddingHorizontal: 12 },
    md: { height: 40, fontSize: 14, paddingHorizontal: 16 },
    lg: { height: 48, fontSize: 16, paddingHorizontal: 16 },
};

/**
 * Input component for React Native
 */
export const Input = forwardRef<TextInput, InputProps>(
    (
        {
            variant = 'outline',
            size = 'md',
            isInvalid = false,
            isDisabled = false,
            label,
            errorMessage,
            helperText,
            leftIcon,
            rightIcon,
            style,
            containerStyle,
            ...props
        },
        ref
    ) => {
        const { theme } = useXTheme();
        const sizeStyle = sizeConfig[size];

        const getInputStyle = (): ViewStyle => {
            const base: ViewStyle = {
                height: sizeStyle.height,
                borderRadius: variant === 'flushed' ? 0 : borderRadius.lg,
                paddingHorizontal: sizeStyle.paddingHorizontal,
                flexDirection: 'row',
                alignItems: 'center',
            };

            const borderColor = isInvalid ? colors.error[500] : theme.colors.border;

            switch (variant) {
                case 'outline':
                    return { ...base, borderWidth: 1, borderColor, backgroundColor: 'transparent' };
                case 'filled':
                    return { ...base, backgroundColor: theme.colors.muted };
                case 'flushed':
                    return { ...base, borderBottomWidth: 1, borderColor, backgroundColor: 'transparent' };
                default:
                    return base;
            }
        };

        return (
            <View style={containerStyle}>
                {label && (
                    <Text
                        style={{
                            fontSize: 14,
                            fontWeight: '500',
                            color: theme.colors.foreground,
                            marginBottom: spacing[1.5],
                        }}
                    >
                        {label}
                    </Text>
                )}

                <View style={[getInputStyle(), { opacity: isDisabled ? 0.5 : 1 }]}>
                    {leftIcon && <View style={{ marginRight: spacing[2] }}>{leftIcon}</View>}

                    <TextInput
                        ref={ref}
                        style={[
                            {
                                flex: 1,
                                height: '100%',
                                fontSize: sizeStyle.fontSize,
                                color: theme.colors.foreground,
                            },
                            style as TextStyle,
                        ]}
                        placeholderTextColor={theme.colors.mutedForeground}
                        editable={!isDisabled}
                        {...props}
                    />

                    {rightIcon && <View style={{ marginLeft: spacing[2] }}>{rightIcon}</View>}
                </View>

                {errorMessage && isInvalid && (
                    <Text style={{ fontSize: 12, color: colors.error[500], marginTop: spacing[1.5] }}>
                        {errorMessage}
                    </Text>
                )}

                {helperText && !isInvalid && (
                    <Text style={{ fontSize: 12, color: theme.colors.mutedForeground, marginTop: spacing[1.5] }}>
                        {helperText}
                    </Text>
                )}
            </View>
        );
    }
);

Input.displayName = 'Input';
