import React, { useRef, useEffect, ReactNode } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Modal,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Animated,
    Dimensions,
    PanResponder,
} from 'react-native';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

export interface BottomSheetProps {
    /** Is visible */
    isOpen: boolean;
    /** On close callback */
    onClose: () => void;
    /** Sheet title */
    title?: string;
    /** Sheet content */
    children: ReactNode;
    /** Height percentage (0-1) */
    height?: number;
    /** Show handle */
    showHandle?: boolean;
    /** Close on backdrop press */
    closeOnBackdrop?: boolean;
}

export function BottomSheet({
    isOpen,
    onClose,
    title,
    children,
    height = 0.5,
    showHandle = true,
    closeOnBackdrop = true,
}: BottomSheetProps) {
    const translateY = useRef(new Animated.Value(SCREEN_HEIGHT)).current;
    const backdropOpacity = useRef(new Animated.Value(0)).current;
    const sheetHeight = SCREEN_HEIGHT * height;

    useEffect(() => {
        if (isOpen) {
            Animated.parallel([
                Animated.spring(translateY, {
                    toValue: 0,
                    useNativeDriver: true,
                    damping: 20,
                    stiffness: 150,
                }),
                Animated.timing(backdropOpacity, {
                    toValue: 1,
                    duration: 200,
                    useNativeDriver: true,
                }),
            ]).start();
        } else {
            Animated.parallel([
                Animated.timing(translateY, {
                    toValue: SCREEN_HEIGHT,
                    duration: 250,
                    useNativeDriver: true,
                }),
                Animated.timing(backdropOpacity, {
                    toValue: 0,
                    duration: 200,
                    useNativeDriver: true,
                }),
            ]).start();
        }
    }, [isOpen, translateY, backdropOpacity]);

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: (_, gestureState) => {
                return gestureState.dy > 10;
            },
            onPanResponderMove: (_, gestureState) => {
                if (gestureState.dy > 0) {
                    translateY.setValue(gestureState.dy);
                }
            },
            onPanResponderRelease: (_, gestureState) => {
                if (gestureState.dy > sheetHeight * 0.3 || gestureState.vy > 0.5) {
                    onClose();
                } else {
                    Animated.spring(translateY, {
                        toValue: 0,
                        useNativeDriver: true,
                        damping: 20,
                    }).start();
                }
            },
        })
    ).current;

    if (!isOpen) return null;

    return (
        <Modal transparent visible={isOpen} animationType="none" onRequestClose={onClose}>
            {/* Backdrop */}
            <TouchableWithoutFeedback onPress={closeOnBackdrop ? onClose : undefined}>
                <Animated.View style={[styles.backdrop, { opacity: backdropOpacity }]} />
            </TouchableWithoutFeedback>

            {/* Sheet */}
            <Animated.View
                style={[
                    styles.sheet,
                    {
                        height: sheetHeight,
                        transform: [{ translateY }],
                    },
                ]}
                {...panResponder.panHandlers}
            >
                {/* Handle */}
                {showHandle && (
                    <View style={styles.handleContainer}>
                        <View style={styles.handle} />
                    </View>
                )}

                {/* Title */}
                {title && (
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>{title}</Text>
                        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                            <Text style={styles.closeIcon}>✕</Text>
                        </TouchableOpacity>
                    </View>
                )}

                {/* Content */}
                <View style={styles.content}>{children}</View>
            </Animated.View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    backdrop: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    sheet: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(20, 20, 25, 0.95)',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderBottomWidth: 0,
        // Glass effect shadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.3,
        shadowRadius: 20,
        elevation: 20,
    },
    handleContainer: {
        alignItems: 'center',
        paddingTop: 12,
        paddingBottom: 8,
    },
    handle: {
        width: 40,
        height: 4,
        borderRadius: 2,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255, 255, 255, 0.08)',
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',
    },
    closeButton: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    closeIcon: {
        fontSize: 14,
        color: 'rgba(255, 255, 255, 0.6)',
    },
    content: {
        flex: 1,
        padding: 20,
    },
});

export default BottomSheet;
