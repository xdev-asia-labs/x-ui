import React, { ReactNode } from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';

export interface IconButtonProps {
    /** Button icon */
    icon: ReactNode;
    /** On press callback */
    onPress?: () => void;
    /** Size */
    size?: 'sm' | 'md' | 'lg';
    /** Variant */
    variant?: 'solid' | 'outline' | 'ghost' | 'glass';
    /** Color scheme */
    colorScheme?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'neutral';
    /** Rounded */
    isRound?: boolean;
    /** Disabled */
    isDisabled?: boolean;
    /** Custom style */
    style?: ViewStyle;
}

const sizes = {
    sm: { size: 32, iconSize: 16 },
    md: { size: 40, iconSize: 20 },
    lg: { size: 48, iconSize: 24 },
};

const colors = {
    primary: '#6366f1',
    secondary: '#64748b',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    neutral: 'rgba(255,255,255,0.1)',
};

export function IconButton({
    icon,
    onPress,
    size = 'md',
    variant = 'ghost',
    colorScheme = 'primary',
    isRound = true,
    isDisabled = false,
    style,
}: IconButtonProps) {
    const sizeStyle = sizes[size];
    const color = colors[colorScheme];

    const getVariantStyle = (): ViewStyle => {
        switch (variant) {
            case 'solid':
                return {
                    backgroundColor: color,
                };
            case 'outline':
                return {
                    backgroundColor: 'transparent',
                    borderWidth: 1.5,
                    borderColor: color,
                };
            case 'glass':
                return {
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    borderWidth: 1,
                    borderColor: 'rgba(255, 255, 255, 0.12)',
                };
            default: // ghost
                return {
                    backgroundColor: 'transparent',
                };
        }
    };

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={isDisabled}
            activeOpacity={0.7}
            style={[
                styles.button,
                {
                    width: sizeStyle.size,
                    height: sizeStyle.size,
                    borderRadius: isRound ? sizeStyle.size / 2 : 8,
                },
                getVariantStyle(),
                isDisabled && styles.disabled,
                style,
            ]}
        >
            {icon}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    disabled: {
        opacity: 0.5,
    },
});

export default IconButton;
