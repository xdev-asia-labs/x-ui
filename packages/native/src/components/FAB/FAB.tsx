import React, { ReactNode, useState } from 'react';
import {
    View,
    Pressable,
    Text,
    StyleSheet,
    ViewStyle,
    Animated,
} from 'react-native';
import { useXTheme } from '../ThemeProvider';

export interface FABAction {
    /** Action key */
    key: string;
    /** Action label */
    label?: string;
    /** Action icon */
    icon: ReactNode;
    /** Action handler */
    onPress: () => void;
}

export interface FABProps {
    /** Main icon */
    icon: ReactNode;
    /** Main action handler */
    onPress?: () => void;
    /** Speed dial actions (for extended FAB) */
    actions?: FABAction[];
    /** Position */
    position?: 'bottom-right' | 'bottom-left' | 'bottom-center';
    /** Size */
    size?: 'small' | 'medium' | 'large';
    /** Extended mode (show label) */
    extended?: boolean;
    /** Extended label */
    label?: string;
    /** Color variant */
    variant?: 'primary' | 'secondary' | 'accent';
    /** Is disabled */
    disabled?: boolean;
    /** Custom style */
    style?: ViewStyle;
}

const sizeMap = {
    small: 40,
    medium: 56,
    large: 72,
};

export function FAB({
    icon,
    onPress,
    actions = [],
    position = 'bottom-right',
    size = 'medium',
    extended = false,
    label,
    variant = 'primary',
    disabled = false,
    style,
}: FABProps) {
    const { theme } = useXTheme();
    const [isOpen, setIsOpen] = useState(false);
    const animation = React.useRef(new Animated.Value(0)).current;

    const fabSize = sizeMap[size];
    const hasActions = actions.length > 0;

    const variantColors = {
        primary: { bg: theme.colors.primary, text: '#FFFFFF' },
        secondary: { bg: theme.colors.secondary, text: theme.colors.foreground },
        accent: { bg: theme.colors.accent, text: '#FFFFFF' },
    };

    const toggleMenu = () => {
        const toValue = isOpen ? 0 : 1;
        Animated.spring(animation, {
            toValue,
            useNativeDriver: true,
            friction: 6,
        }).start();
        setIsOpen(!isOpen);
    };

    const handlePress = () => {
        if (hasActions) {
            toggleMenu();
        } else if (onPress) {
            onPress();
        }
    };

    const handleActionPress = (action: FABAction) => {
        action.onPress();
        toggleMenu();
    };

    const getPositionStyle = (): ViewStyle => {
        switch (position) {
            case 'bottom-left':
                return { left: 16, bottom: 32 };
            case 'bottom-center':
                return { alignSelf: 'center', bottom: 32 };
            case 'bottom-right':
            default:
                return { right: 16, bottom: 32 };
        }
    };

    const rotation = animation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '45deg'],
    });

    return (
        <View style={[styles.container, getPositionStyle(), style]}>
            {/* Speed Dial Actions */}
            {hasActions && actions.map((action, index) => {
                const translateY = animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -(index + 1) * 60],
                });

                const opacity = animation.interpolate({
                    inputRange: [0, 0.5, 1],
                    outputRange: [0, 0, 1],
                });

                const scale = animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.5, 1],
                });

                return (
                    <Animated.View
                        key={action.key}
                        style={[
                            styles.actionContainer,
                            {
                                opacity,
                                transform: [{ translateY }, { scale }],
                            },
                        ]}
                    >
                        {action.label && (
                            <View style={[styles.actionLabel, { backgroundColor: theme.colors.card }]}>
                                <Text style={[styles.actionLabelText, { color: theme.colors.foreground }]}>
                                    {action.label}
                                </Text>
                            </View>
                        )}
                        <Pressable
                            onPress={() => handleActionPress(action)}
                            style={[
                                styles.actionButton,
                                {
                                    backgroundColor: theme.colors.card,
                                    width: 48,
                                    height: 48,
                                },
                            ]}
                        >
                            {action.icon}
                        </Pressable>
                    </Animated.View>
                );
            })}

            {/* Main FAB Button */}
            <Pressable
                onPress={handlePress}
                disabled={disabled}
                style={({ pressed }) => [
                    styles.fab,
                    {
                        width: extended ? undefined : fabSize,
                        height: fabSize,
                        backgroundColor: variantColors[variant].bg,
                        opacity: disabled ? 0.5 : pressed ? 0.8 : 1,
                        paddingHorizontal: extended ? 20 : 0,
                    },
                ]}
            >
                <Animated.View
                    style={[
                        styles.iconContainer,
                        hasActions && { transform: [{ rotate: rotation }] },
                    ]}
                >
                    {icon}
                </Animated.View>
                {extended && label && (
                    <Text
                        style={[
                            styles.label,
                            { color: variantColors[variant].text, marginLeft: 12 },
                        ]}
                    >
                        {label}
                    </Text>
                )}
            </Pressable>

            {/* Backdrop */}
            {hasActions && isOpen && (
                <Pressable
                    style={styles.backdrop}
                    onPress={toggleMenu}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        alignItems: 'center',
        zIndex: 999,
    },
    fab: {
        borderRadius: 28,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
    },
    actionContainer: {
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        right: 4,
    },
    actionButton: {
        borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
    },
    actionLabel: {
        marginRight: 12,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 6,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
    },
    actionLabelText: {
        fontSize: 14,
        fontWeight: '500',
    },
    backdrop: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'transparent',
        zIndex: -1,
    },
});

export default FAB;
