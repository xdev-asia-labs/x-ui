import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, DimensionValue, ViewStyle } from 'react-native';

export interface SkeletonProps {
    /** Width */
    width?: DimensionValue;
    /** Height */
    height?: DimensionValue;
    /** Border radius */
    borderRadius?: number;
    /** Variant */
    variant?: 'rectangular' | 'circular' | 'text';
    /** Animation */
    animation?: 'pulse' | 'wave' | 'none';
}

export function Skeleton({
    width = '100%',
    height = 20,
    borderRadius,
    variant = 'rectangular',
    animation = 'pulse',
}: SkeletonProps) {
    const animatedValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (animation === 'none') return;

        const createAnimation = () => {
            if (animation === 'pulse') {
                return Animated.loop(
                    Animated.sequence([
                        Animated.timing(animatedValue, {
                            toValue: 1,
                            duration: 1000,
                            useNativeDriver: true,
                        }),
                        Animated.timing(animatedValue, {
                            toValue: 0,
                            duration: 1000,
                            useNativeDriver: true,
                        }),
                    ])
                );
            }
            // Wave animation
            return Animated.loop(
                Animated.timing(animatedValue, {
                    toValue: 1,
                    duration: 1500,
                    useNativeDriver: true,
                })
            );
        };

        const anim = createAnimation();
        anim.start();
        return () => anim.stop();
    }, [animation, animatedValue]);

    const getVariantStyles = (): ViewStyle => {
        const numericHeight = typeof height === 'number' ? height : 40;

        switch (variant) {
            case 'circular':
                return {
                    width: numericHeight,
                    height: numericHeight,
                    borderRadius: numericHeight / 2,
                };
            case 'text':
                return {
                    width,
                    height: typeof height === 'number' ? height : 16,
                    borderRadius: 4,
                };
            default:
                return {
                    width,
                    height,
                    borderRadius: borderRadius ?? 8,
                };
        }
    };

    const opacity = animation === 'pulse'
        ? animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0.3, 0.7],
        })
        : 0.5;

    const variantStyles = getVariantStyles();

    return (
        <View style={[styles.container, variantStyles]}>
            <Animated.View
                style={[
                    styles.skeleton,
                    {
                        opacity,
                        borderRadius: variantStyles.borderRadius,
                    },
                ]}
            />
        </View>
    );
}

// Skeleton Group for common patterns
export function SkeletonText({ lines = 3 }: { lines?: number }) {
    return (
        <View style={styles.textGroup}>
            {Array.from({ length: lines }).map((_, i) => (
                <Skeleton
                    key={i}
                    variant="text"
                    width={i === lines - 1 ? '60%' : '100%'}
                    height={14}
                />
            ))}
        </View>
    );
}

export function SkeletonCard() {
    return (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <Skeleton variant="circular" height={48} />
                <View style={styles.cardHeaderText}>
                    <Skeleton variant="text" width={120} height={16} />
                    <Skeleton variant="text" width={80} height={12} />
                </View>
            </View>
            <SkeletonText lines={3} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
    },
    skeleton: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.15)',
    },
    textGroup: {
        gap: 8,
    },
    card: {
        backgroundColor: 'rgba(255,255,255,0.06)',
        borderRadius: 16,
        padding: 20,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.1)',
        gap: 16,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    cardHeaderText: {
        gap: 6,
    },
});

export default Skeleton;
