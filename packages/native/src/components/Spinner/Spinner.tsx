import React, { forwardRef, useEffect, useRef } from 'react';
import { View, Animated, Easing, ViewStyle } from 'react-native';
import { colors } from '@xdev-asia/x-ui-core';
import { useXTheme } from '../ThemeProvider';

export interface SpinnerProps {
    /** Spinner size */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /** Color */
    color?: 'primary' | 'secondary' | 'white' | 'current';
    /** Speed */
    speed?: 'slow' | 'normal' | 'fast';
    /** Custom style */
    style?: ViewStyle;
}

const sizeValues = {
    xs: 12,
    sm: 16,
    md: 24,
    lg: 32,
    xl: 48,
};

const borderWidths = {
    xs: 1.5,
    sm: 2,
    md: 2,
    lg: 3,
    xl: 4,
};

const speedValues = {
    slow: 1200,
    normal: 750,
    fast: 500,
};

/**
 * Spinner component for React Native
 */
export const Spinner = forwardRef<View, SpinnerProps>(
    ({ size = 'md', color = 'primary', speed = 'normal', style }, ref) => {
        const { theme } = useXTheme();
        const spinValue = useRef(new Animated.Value(0)).current;

        const getColor = () => {
            switch (color) {
                case 'primary':
                    return theme.colors.primary;
                case 'secondary':
                    return theme.colors.secondary;
                case 'white':
                    return '#FFFFFF';
                case 'current':
                    return theme.colors.foreground;
                default:
                    return theme.colors.primary;
            }
        };

        useEffect(() => {
            const animation = Animated.loop(
                Animated.timing(spinValue, {
                    toValue: 1,
                    duration: speedValues[speed],
                    easing: Easing.linear,
                    useNativeDriver: true,
                })
            );
            animation.start();

            return () => animation.stop();
        }, [speed, spinValue]);

        const spin = spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg'],
        });

        const sizeValue = sizeValues[size];
        const borderWidth = borderWidths[size];

        return (
            <View ref={ref} style={style}>
                <Animated.View
                    style={{
                        width: sizeValue,
                        height: sizeValue,
                        borderRadius: sizeValue / 2,
                        borderWidth,
                        borderColor: getColor(),
                        borderTopColor: 'transparent',
                        transform: [{ rotate: spin }],
                    }}
                />
            </View>
        );
    }
);

Spinner.displayName = 'Spinner';
