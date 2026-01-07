import React, { ReactNode, useRef, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Modal,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Animated,
} from 'react-native';

export interface AlertDialogProps {
    /** Is visible */
    isOpen: boolean;
    /** On close callback */
    onClose: () => void;
    /** Dialog title */
    title: string;
    /** Dialog description */
    description?: string;
    /** Custom content */
    children?: ReactNode;
    /** Cancel button text */
    cancelText?: string;
    /** Confirm button text */
    confirmText?: string;
    /** On confirm callback */
    onConfirm?: () => void;
    /** Is destructive action */
    isDestructive?: boolean;
    /** Close on backdrop press */
    closeOnOverlay?: boolean;
}

export function AlertDialog({
    isOpen,
    onClose,
    title,
    description,
    children,
    cancelText = 'Cancel',
    confirmText = 'Confirm',
    onConfirm,
    isDestructive = false,
    closeOnOverlay = true,
}: AlertDialogProps) {
    const scaleAnim = useRef(new Animated.Value(0.9)).current;
    const opacityAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (isOpen) {
            Animated.parallel([
                Animated.spring(scaleAnim, {
                    toValue: 1,
                    useNativeDriver: true,
                    damping: 20,
                    stiffness: 300,
                }),
                Animated.timing(opacityAnim, {
                    toValue: 1,
                    duration: 150,
                    useNativeDriver: true,
                }),
            ]).start();
        } else {
            Animated.parallel([
                Animated.timing(scaleAnim, {
                    toValue: 0.9,
                    duration: 100,
                    useNativeDriver: true,
                }),
                Animated.timing(opacityAnim, {
                    toValue: 0,
                    duration: 100,
                    useNativeDriver: true,
                }),
            ]).start();
        }
    }, [isOpen, scaleAnim, opacityAnim]);

    const handleConfirm = () => {
        onConfirm?.();
        onClose();
    };

    if (!isOpen) return null;

    return (
        <Modal transparent visible={isOpen} animationType="none" onRequestClose={onClose}>
            {/* Backdrop */}
            <TouchableWithoutFeedback onPress={closeOnOverlay ? onClose : undefined}>
                <Animated.View style={[styles.backdrop, { opacity: opacityAnim }]} />
            </TouchableWithoutFeedback>

            {/* Dialog */}
            <View style={styles.container}>
                <Animated.View
                    style={[
                        styles.dialog,
                        {
                            opacity: opacityAnim,
                            transform: [{ scale: scaleAnim }],
                        },
                    ]}
                >
                    {/* Header */}
                    <View style={styles.header}>
                        <Text style={styles.title}>{title}</Text>
                        {description && (
                            <Text style={styles.description}>{description}</Text>
                        )}
                    </View>

                    {/* Custom Content */}
                    {children && <View style={styles.content}>{children}</View>}

                    {/* Actions */}
                    <View style={styles.actions}>
                        <TouchableOpacity
                            style={[styles.button, styles.cancelButton]}
                            onPress={onClose}
                        >
                            <Text style={styles.cancelText}>{cancelText}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[
                                styles.button,
                                styles.confirmButton,
                                isDestructive && styles.destructiveButton,
                            ]}
                            onPress={handleConfirm}
                        >
                            <Text
                                style={[
                                    styles.confirmText,
                                    isDestructive && styles.destructiveText,
                                ]}
                            >
                                {confirmText}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </Animated.View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    backdrop: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    dialog: {
        width: '100%',
        maxWidth: 340,
        backgroundColor: 'rgba(25, 25, 30, 0.98)',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.1)',
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.4,
        shadowRadius: 24,
        elevation: 20,
    },
    header: {
        padding: 24,
        paddingBottom: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 8,
    },
    description: {
        fontSize: 14,
        color: 'rgba(255, 255, 255, 0.6)',
        textAlign: 'center',
        lineHeight: 20,
    },
    content: {
        paddingHorizontal: 24,
        paddingBottom: 16,
    },
    actions: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: 'rgba(255, 255, 255, 0.08)',
    },
    button: {
        flex: 1,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cancelButton: {
        borderRightWidth: 1,
        borderRightColor: 'rgba(255, 255, 255, 0.08)',
    },
    confirmButton: {},
    destructiveButton: {},
    cancelText: {
        fontSize: 16,
        fontWeight: '500',
        color: 'rgba(255, 255, 255, 0.6)',
    },
    confirmText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#6366f1',
    },
    destructiveText: {
        color: '#ef4444',
    },
});

export default AlertDialog;
