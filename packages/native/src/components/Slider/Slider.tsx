import React, { useState, useCallback } from 'react';
import {
    View,
    Text,
    StyleSheet,
    PanResponder,
    GestureResponderEvent,
    LayoutChangeEvent,
    ViewStyle,
} from 'react-native';
import { useXTheme } from '../ThemeProvider/ThemeProvider';

export interface SliderProps {
    value?: number;
    defaultValue?: number;
    min?: number;
    max?: number;
    step?: number;
    onChange?: (value: number) => void;
    onChangeEnd?: (value: number) => void;
    disabled?: boolean;
    colorScheme?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
    size?: 'sm' | 'md' | 'lg';
    showValue?: boolean;
    style?: ViewStyle;
}

const colorSchemes = {
    primary: '#6366f1',
    secondary: '#a855f7',
    success: '#22c55e',
    warning: '#f59e0b',
    error: '#ef4444',
};

const sizes = {
    sm: { track: 4, thumb: 16 },
    md: { track: 6, thumb: 20 },
    lg: { track: 8, thumb: 24 },
};

export function Slider({
    value: controlledValue,
    defaultValue = 0,
    min = 0,
    max = 100,
    step = 1,
    onChange,
    onChangeEnd,
    disabled = false,
    colorScheme = 'primary',
    size = 'md',
    showValue = false,
    style,
}: SliderProps) {
    const { theme } = useXTheme();
    const [internalValue, setInternalValue] = useState(defaultValue);
    const [trackWidth, setTrackWidth] = useState(0);
    const value = controlledValue ?? internalValue;

    const percentage = ((value - min) / (max - min)) * 100;
    const color = colorSchemes[colorScheme];
    const sizeStyles = sizes[size];

    const updateValue = useCallback((locationX: number) => {
        if (disabled || trackWidth === 0) return;

        const percent = Math.max(0, Math.min(1, locationX / trackWidth));
        const rawValue = min + percent * (max - min);
        const steppedValue = Math.round(rawValue / step) * step;
        const clampedValue = Math.max(min, Math.min(max, steppedValue));

        if (controlledValue === undefined) {
            setInternalValue(clampedValue);
        }
        onChange?.(clampedValue);
    }, [disabled, trackWidth, min, max, step, controlledValue, onChange]);

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => !disabled,
        onMoveShouldSetPanResponder: () => !disabled,
        onPanResponderGrant: (evt: GestureResponderEvent) => {
            updateValue(evt.nativeEvent.locationX);
        },
        onPanResponderMove: (evt: GestureResponderEvent) => {
            updateValue(evt.nativeEvent.locationX);
        },
        onPanResponderRelease: () => {
            onChangeEnd?.(value);
        },
    });

    const handleLayout = (event: LayoutChangeEvent) => {
        setTrackWidth(event.nativeEvent.layout.width);
    };

    return (
        <View style={[styles.container, style]}>
            <View
                style={[
                    styles.track,
                    {
                        height: sizeStyles.track,
                        backgroundColor: theme.colors.muted,
                        opacity: disabled ? 0.5 : 1,
                    },
                ]}
                onLayout={handleLayout}
                {...panResponder.panHandlers}
            >
                <View
                    style={[
                        styles.fill,
                        {
                            width: `${percentage}%`,
                            backgroundColor: color,
                        },
                    ]}
                />
                <View
                    style={[
                        styles.thumb,
                        {
                            width: sizeStyles.thumb,
                            height: sizeStyles.thumb,
                            borderRadius: sizeStyles.thumb / 2,
                            left: `${percentage}%`,
                            marginLeft: -sizeStyles.thumb / 2,
                            borderColor: color,
                        },
                    ]}
                />
            </View>
            {showValue && (
                <Text style={[styles.value, { color: theme.colors.foreground }]}>
                    {value}
                </Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    track: {
        flex: 1,
        borderRadius: 999,
        position: 'relative',
        justifyContent: 'center',
    },
    fill: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        borderRadius: 999,
    },
    thumb: {
        position: 'absolute',
        backgroundColor: '#ffffff',
        borderWidth: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
    },
    value: {
        marginLeft: 12,
        fontSize: 14,
        fontWeight: '500',
        minWidth: 30,
        textAlign: 'right',
    },
});
