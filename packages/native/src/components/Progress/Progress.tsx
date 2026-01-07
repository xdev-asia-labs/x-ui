import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

export interface ProgressProps {
    /** Progress value 0-100 */
    value: number;
    /** Max value */
    max?: number;
    /** Size */
    size?: 'sm' | 'md' | 'lg';
    /** Color */
    colorScheme?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
    /** Variant */
    variant?: 'linear' | 'circular';
    /** Show label */
    showLabel?: boolean;
    /** Indeterminate state */
    isIndeterminate?: boolean;
}

const sizeStyles = {
    sm: { height: 4, fontSize: 10 },
    md: { height: 8, fontSize: 12 },
    lg: { height: 12, fontSize: 14 },
};

const circularSizes = {
    sm: { size: 40, strokeWidth: 3 },
    md: { size: 60, strokeWidth: 5 },
    lg: { size: 80, strokeWidth: 6 },
};

const colors = {
    primary: '#6366f1',
    secondary: '#64748b',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
};

export function Progress({
    value,
    max = 100,
    size = 'md',
    colorScheme = 'primary',
    variant = 'linear',
    showLabel = false,
    isIndeterminate = false,
}: ProgressProps) {
    const percentage = Math.min(100, Math.max(0, (value / max) * 100));
    const color = colors[colorScheme];
    const sizeStyle = sizeStyles[size];

    if (variant === 'circular') {
        const { size: circleSize, strokeWidth } = circularSizes[size];

        // For circular, we'll use a simpler approach with View-based ring
        return (
            <View style={[styles.circularContainer, { width: circleSize, height: circleSize }]}>
                {/* Background ring */}
                <View
                    style={[
                        styles.circularTrack,
                        {
                            width: circleSize,
                            height: circleSize,
                            borderRadius: circleSize / 2,
                            borderWidth: strokeWidth,
                        },
                    ]}
                />
                {/* Progress indicator using rotation trick */}
                <View
                    style={[
                        styles.circularProgress,
                        {
                            width: circleSize,
                            height: circleSize,
                            borderRadius: circleSize / 2,
                            borderWidth: strokeWidth,
                            borderColor: color,
                            borderTopColor: 'transparent',
                            borderRightColor: isIndeterminate || percentage > 25 ? color : 'transparent',
                            borderBottomColor: percentage > 50 ? color : 'transparent',
                            borderLeftColor: percentage > 75 ? color : 'transparent',
                            transform: [{ rotate: `${(percentage / 100) * 360}deg` }],
                        },
                    ]}
                />
                {showLabel && (
                    <View style={styles.circularLabel}>
                        <Text style={[styles.labelText, { fontSize: sizeStyle.fontSize }]}>
                            {Math.round(percentage)}%
                        </Text>
                    </View>
                )}
            </View>
        );
    }

    return (
        <View style={styles.linearContainer}>
            {/* Track */}
            <View
                style={[
                    styles.track,
                    {
                        height: sizeStyle.height,
                        borderRadius: sizeStyle.height / 2,
                    }
                ]}
            >
                {/* Progress bar */}
                <View
                    style={[
                        styles.bar,
                        {
                            width: isIndeterminate ? '30%' : `${percentage}%`,
                            backgroundColor: color,
                            borderRadius: sizeStyle.height / 2,
                            shadowColor: color,
                            shadowOffset: { width: 0, height: 0 },
                            shadowOpacity: 0.5,
                            shadowRadius: 8,
                        },
                    ]}
                />
            </View>
            {showLabel && (
                <Text style={[styles.linearLabel, { fontSize: sizeStyle.fontSize }]}>
                    {Math.round(percentage)}%
                </Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    linearContainer: {
        width: '100%',
    },
    track: {
        backgroundColor: 'rgba(255,255,255,0.1)',
        overflow: 'hidden',
    },
    bar: {
        height: '100%',
    },
    linearLabel: {
        marginTop: 8,
        color: 'rgba(255,255,255,0.6)',
        fontWeight: '500',
    },
    circularContainer: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
    },
    circularTrack: {
        position: 'absolute',
        borderColor: 'rgba(255,255,255,0.1)',
    },
    circularProgress: {
        position: 'absolute',
    },
    circularLabel: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },
    labelText: {
        color: '#fff',
        fontWeight: '600',
    },
});

export default Progress;
