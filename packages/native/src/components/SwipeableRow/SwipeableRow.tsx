import React, { useRef, ReactNode } from 'react';
import {
    View,
    Animated,
    PanResponder,
    StyleSheet,
    ViewStyle,
    Pressable,
    Text,
} from 'react-native';
import { useXTheme } from '../ThemeProvider';

export interface SwipeAction {
    /** Action key */
    key: string;
    /** Action label */
    label: string;
    /** Action icon */
    icon?: ReactNode;
    /** Background color */
    color: string;
    /** Text color */
    textColor?: string;
    /** Action handler */
    onPress: () => void;
}

export interface SwipeableRowProps {
    /** Row content */
    children: ReactNode;
    /** Left swipe actions */
    leftActions?: SwipeAction[];
    /** Right swipe actions */
    rightActions?: SwipeAction[];
    /** Swipe threshold (0-1) */
    threshold?: number;
    /** Action width */
    actionWidth?: number;
    /** Friction coefficient */
    friction?: number;
    /** Enable swipe */
    enabled?: boolean;
    /** Row press handler */
    onPress?: () => void;
    /** Custom style */
    style?: ViewStyle;
}

export function SwipeableRow({
    children,
    leftActions = [],
    rightActions = [],
    threshold = 0.4,
    actionWidth = 80,
    friction = 2,
    enabled = true,
    onPress,
    style,
}: SwipeableRowProps) {
    const { theme } = useXTheme();
    const translateX = useRef(new Animated.Value(0)).current;
    const rowHeight = useRef(0);

    const leftActionsWidth = leftActions.length * actionWidth;
    const rightActionsWidth = rightActions.length * actionWidth;

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: (_, gestureState) => {
                return enabled && Math.abs(gestureState.dx) > 10;
            },
            onPanResponderMove: (_, gestureState) => {
                let dx = gestureState.dx / friction;

                // Limit swipe distance
                if (dx > 0 && leftActions.length === 0) dx = 0;
                if (dx < 0 && rightActions.length === 0) dx = 0;
                if (dx > leftActionsWidth) dx = leftActionsWidth;
                if (dx < -rightActionsWidth) dx = -rightActionsWidth;

                translateX.setValue(dx);
            },
            onPanResponderRelease: (_, gestureState) => {
                const dx = gestureState.dx / friction;

                // Determine if we should snap open or closed
                let toValue = 0;

                if (dx > 0 && dx > leftActionsWidth * threshold) {
                    toValue = leftActionsWidth;
                } else if (dx < 0 && Math.abs(dx) > rightActionsWidth * threshold) {
                    toValue = -rightActionsWidth;
                }

                Animated.spring(translateX, {
                    toValue,
                    useNativeDriver: true,
                    bounciness: 8,
                }).start();
            },
        })
    ).current;

    const close = () => {
        Animated.spring(translateX, {
            toValue: 0,
            useNativeDriver: true,
        }).start();
    };

    const renderAction = (action: SwipeAction, index: number, side: 'left' | 'right') => {
        return (
            <Pressable
                key={action.key}
                onPress={() => {
                    action.onPress();
                    close();
                }}
                style={[
                    styles.action,
                    {
                        width: actionWidth,
                        backgroundColor: action.color,
                    },
                ]}
            >
                {action.icon}
                <Text
                    style={[
                        styles.actionText,
                        { color: action.textColor || '#FFFFFF' },
                    ]}
                >
                    {action.label}
                </Text>
            </Pressable>
        );
    };

    return (
        <View
            style={[styles.container, style]}
            onLayout={(e) => {
                rowHeight.current = e.nativeEvent.layout.height;
            }}
        >
            {/* Left Actions */}
            <View style={[styles.actionsContainer, styles.leftActions]}>
                {leftActions.map((action, index) => renderAction(action, index, 'left'))}
            </View>

            {/* Right Actions */}
            <View style={[styles.actionsContainer, styles.rightActions]}>
                {rightActions.map((action, index) => renderAction(action, index, 'right'))}
            </View>

            {/* Main Row */}
            <Animated.View
                style={[
                    styles.row,
                    {
                        transform: [{ translateX }],
                        backgroundColor: theme.colors.card,
                    },
                ]}
                {...panResponder.panHandlers}
            >
                <Pressable onPress={onPress} style={styles.content}>
                    {children}
                </Pressable>
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    content: {
        flex: 1,
    },
    actionsContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'stretch',
    },
    leftActions: {
        left: 0,
    },
    rightActions: {
        right: 0,
    },
    action: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
    },
    actionText: {
        fontSize: 12,
        fontWeight: '600',
        marginTop: 4,
    },
});

export default SwipeableRow;
