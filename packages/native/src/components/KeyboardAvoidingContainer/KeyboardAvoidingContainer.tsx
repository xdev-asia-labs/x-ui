import React, { ReactNode } from 'react';
import {
    KeyboardAvoidingView as RNKeyboardAvoidingView,
    Platform,
    ViewStyle,
    KeyboardAvoidingViewProps as RNKeyboardAvoidingViewProps,
} from 'react-native';

export interface KeyboardAvoidingContainerProps extends Omit<RNKeyboardAvoidingViewProps, 'behavior'> {
    /** Children */
    children: ReactNode;
    /** Override behavior (defaults to platform-specific) */
    behavior?: 'height' | 'position' | 'padding';
    /** Keyboard vertical offset */
    keyboardVerticalOffset?: number;
    /** Custom style */
    style?: ViewStyle;
}

/**
 * KeyboardAvoidingContainer - Cross-platform keyboard avoiding wrapper
 * Automatically applies correct behavior based on platform
 */
export function KeyboardAvoidingContainer({
    children,
    behavior,
    keyboardVerticalOffset = 0,
    style,
    ...props
}: KeyboardAvoidingContainerProps) {
    // Default behavior: padding for iOS, height for Android
    const defaultBehavior = Platform.OS === 'ios' ? 'padding' : 'height';

    return (
        <RNKeyboardAvoidingView
            behavior={behavior || defaultBehavior}
            keyboardVerticalOffset={keyboardVerticalOffset}
            style={[{ flex: 1 }, style]}
            {...props}
        >
            {children}
        </RNKeyboardAvoidingView>
    );
}

export default KeyboardAvoidingContainer;
