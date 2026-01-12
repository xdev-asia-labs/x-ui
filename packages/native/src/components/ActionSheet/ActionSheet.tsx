import React, { ReactNode } from 'react';
import {
    View,
    Modal,
    Text,
    Pressable,
    StyleSheet,
    ViewStyle,
    Dimensions,
} from 'react-native';
import { useXTheme } from '../ThemeProvider';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

export interface ActionSheetAction {
    /** Action key */
    key: string;
    /** Action label */
    label: string;
    /** Action icon */
    icon?: ReactNode;
    /** Is destructive action */
    destructive?: boolean;
    /** Is disabled */
    disabled?: boolean;
    /** Action handler */
    onPress: () => void;
}

export interface ActionSheetProps {
    /** Is visible */
    visible: boolean;
    /** Close handler */
    onClose: () => void;
    /** Title */
    title?: string;
    /** Message/description */
    message?: string;
    /** Action buttons */
    actions: ActionSheetAction[];
    /** Cancel button label */
    cancelLabel?: string;
    /** Show cancel button */
    showCancel?: boolean;
    /** Custom style */
    style?: ViewStyle;
}

export function ActionSheet({
    visible,
    onClose,
    title,
    message,
    actions,
    cancelLabel = 'Cancel',
    showCancel = true,
    style,
}: ActionSheetProps) {
    const { theme } = useXTheme();
    const isDark = theme.mode === 'dark';

    const handleAction = (action: ActionSheetAction) => {
        if (action.disabled) return;
        action.onPress();
        onClose();
    };

    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={onClose}
        >
            <Pressable style={styles.overlay} onPress={onClose}>
                <View
                    style={[
                        styles.sheet,
                        {
                            backgroundColor: isDark ? '#1C1C1E' : '#FFFFFF',
                        },
                        style,
                    ]}
                >
                    {/* Header */}
                    {(title || message) && (
                        <View style={styles.header}>
                            {title && (
                                <Text
                                    style={[
                                        styles.title,
                                        { color: theme.colors.mutedForeground },
                                    ]}
                                >
                                    {title}
                                </Text>
                            )}
                            {message && (
                                <Text
                                    style={[
                                        styles.message,
                                        { color: theme.colors.mutedForeground },
                                    ]}
                                >
                                    {message}
                                </Text>
                            )}
                        </View>
                    )}

                    {/* Actions */}
                    <View style={styles.actions}>
                        {actions.map((action, index) => (
                            <Pressable
                                key={action.key}
                                onPress={() => handleAction(action)}
                                disabled={action.disabled}
                                style={({ pressed }) => [
                                    styles.actionButton,
                                    {
                                        backgroundColor: pressed
                                            ? isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'
                                            : 'transparent',
                                        borderTopWidth: index > 0 ? StyleSheet.hairlineWidth : 0,
                                        borderTopColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                                    },
                                    action.disabled && styles.disabled,
                                ]}
                            >
                                {action.icon && (
                                    <View style={styles.actionIcon}>{action.icon}</View>
                                )}
                                <Text
                                    style={[
                                        styles.actionLabel,
                                        {
                                            color: action.destructive
                                                ? '#FF3B30'
                                                : theme.colors.primary,
                                        },
                                        action.disabled && styles.disabledText,
                                    ]}
                                >
                                    {action.label}
                                </Text>
                            </Pressable>
                        ))}
                    </View>

                    {/* Cancel Button */}
                    {showCancel && (
                        <View style={styles.cancelContainer}>
                            <Pressable
                                onPress={onClose}
                                style={({ pressed }) => [
                                    styles.cancelButton,
                                    {
                                        backgroundColor: isDark
                                            ? pressed ? 'rgba(255,255,255,0.1)' : '#2C2C2E'
                                            : pressed ? 'rgba(0,0,0,0.05)' : '#F2F2F7',
                                    },
                                ]}
                            >
                                <Text
                                    style={[
                                        styles.cancelLabel,
                                        { color: theme.colors.primary },
                                    ]}
                                >
                                    {cancelLabel}
                                </Text>
                            </Pressable>
                        </View>
                    )}
                </View>
            </Pressable>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        justifyContent: 'flex-end',
    },
    sheet: {
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        paddingBottom: 34, // Safe area
        maxHeight: SCREEN_HEIGHT * 0.7,
    },
    header: {
        padding: 16,
        alignItems: 'center',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'rgba(0,0,0,0.1)',
    },
    title: {
        fontSize: 13,
        fontWeight: '600',
        textAlign: 'center',
    },
    message: {
        fontSize: 12,
        textAlign: 'center',
        marginTop: 4,
    },
    actions: {
        flexDirection: 'column',
    },
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
        paddingHorizontal: 20,
    },
    actionIcon: {
        marginRight: 12,
    },
    actionLabel: {
        fontSize: 20,
        fontWeight: '400',
    },
    disabled: {
        opacity: 0.4,
    },
    disabledText: {
        opacity: 0.4,
    },
    cancelContainer: {
        marginTop: 8,
        marginHorizontal: 8,
        marginBottom: 8,
    },
    cancelButton: {
        borderRadius: 14,
        paddingVertical: 16,
        alignItems: 'center',
    },
    cancelLabel: {
        fontSize: 20,
        fontWeight: '600',
    },
});

export default ActionSheet;
