import React, { forwardRef, useState } from 'react';
import { View, Image, Text, ViewStyle, TextStyle, ImageProps } from 'react-native';
import { colors, borderRadius } from '@xdev-asia/x-ui-core';
import { useXTheme } from '../ThemeProvider';

export interface AvatarProps extends Omit<ImageProps, 'source'> {
    /** Avatar size */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    /** Image source URI */
    src?: string;
    /** Fallback initials */
    fallback?: string;
    /** Alt text */
    alt?: string;
    /** Status indicator */
    status?: 'online' | 'offline' | 'away' | 'busy';
    /** Round avatar */
    rounded?: boolean;
    /** Show border */
    bordered?: boolean;
}

const sizeValues = {
    xs: 24,
    sm: 32,
    md: 40,
    lg: 48,
    xl: 64,
    '2xl': 80,
};

const statusColors = {
    online: colors.success[500],
    offline: colors.neutral[400],
    away: colors.warning[500],
    busy: colors.error[500],
};

/**
 * Avatar component for React Native
 */
export const Avatar = forwardRef<View, AvatarProps>(
    (
        {
            size = 'md',
            src,
            fallback,
            alt,
            status,
            rounded = true,
            bordered = false,
            style,
            ...props
        },
        ref
    ) => {
        const [hasError, setHasError] = useState(false);
        const { theme } = useXTheme();
        const sizeValue = sizeValues[size];
        const statusSize = size === 'xs' || size === 'sm' ? 8 : 12;

        const containerStyle: ViewStyle = {
            width: sizeValue,
            height: sizeValue,
            borderRadius: rounded ? sizeValue / 2 : borderRadius.lg,
            backgroundColor: theme.colors.muted,
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            ...(bordered && {
                borderWidth: 2,
                borderColor: theme.colors.background,
            }),
        };

        return (
            <View ref={ref} style={[containerStyle, style as ViewStyle]}>
                {src && !hasError ? (
                    <Image
                        source={{ uri: src }}
                        style={{ width: '100%', height: '100%' }}
                        onError={() => setHasError(true)}
                        {...props}
                    />
                ) : (
                    <Text
                        style={{
                            fontSize: sizeValue * 0.4,
                            fontWeight: '600',
                            color: theme.colors.mutedForeground,
                        }}
                    >
                        {fallback || alt?.charAt(0)?.toUpperCase() || '?'}
                    </Text>
                )}

                {status && (
                    <View
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                            width: statusSize,
                            height: statusSize,
                            borderRadius: statusSize / 2,
                            backgroundColor: statusColors[status],
                            borderWidth: 2,
                            borderColor: theme.colors.background,
                        }}
                    />
                )}
            </View>
        );
    }
);

Avatar.displayName = 'Avatar';
