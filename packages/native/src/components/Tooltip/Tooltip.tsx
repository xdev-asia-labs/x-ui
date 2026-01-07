import React, { useState, useRef, ReactNode } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Modal,
    Dimensions,
    LayoutChangeEvent,
} from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export interface TooltipProps {
    /** Tooltip content */
    label: string;
    /** Trigger element */
    children: ReactNode;
    /** Placement */
    placement?: 'top' | 'bottom' | 'left' | 'right';
    /** Delay before showing */
    delay?: number;
    /** Has arrow */
    hasArrow?: boolean;
}

export function Tooltip({
    label,
    children,
    placement = 'top',
    hasArrow = true,
}: TooltipProps) {
    const [visible, setVisible] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0, width: 0, height: 0 });
    const triggerRef = useRef<View>(null);

    const measureTrigger = () => {
        triggerRef.current?.measureInWindow((x, y, width, height) => {
            setPosition({ x, y, width, height });
            setVisible(true);
        });
    };

    const getTooltipPosition = () => {
        const tooltipWidth = 150;
        const tooltipHeight = 40;
        const offset = 8;

        switch (placement) {
            case 'top':
                return {
                    left: position.x + position.width / 2 - tooltipWidth / 2,
                    top: position.y - tooltipHeight - offset,
                };
            case 'bottom':
                return {
                    left: position.x + position.width / 2 - tooltipWidth / 2,
                    top: position.y + position.height + offset,
                };
            case 'left':
                return {
                    left: position.x - tooltipWidth - offset,
                    top: position.y + position.height / 2 - tooltipHeight / 2,
                };
            case 'right':
                return {
                    left: position.x + position.width + offset,
                    top: position.y + position.height / 2 - tooltipHeight / 2,
                };
        }
    };

    const getArrowStyle = () => {
        const arrowSize = 8;
        switch (placement) {
            case 'top':
                return {
                    bottom: -arrowSize,
                    alignSelf: 'center' as const,
                    borderTopColor: 'rgba(30, 30, 35, 0.95)',
                    borderTopWidth: arrowSize,
                    borderLeftWidth: arrowSize,
                    borderRightWidth: arrowSize,
                    borderLeftColor: 'transparent',
                    borderRightColor: 'transparent',
                };
            case 'bottom':
                return {
                    top: -arrowSize,
                    alignSelf: 'center' as const,
                    borderBottomColor: 'rgba(30, 30, 35, 0.95)',
                    borderBottomWidth: arrowSize,
                    borderLeftWidth: arrowSize,
                    borderRightWidth: arrowSize,
                    borderLeftColor: 'transparent',
                    borderRightColor: 'transparent',
                };
            default:
                return {};
        }
    };

    return (
        <>
            <TouchableOpacity
                ref={triggerRef}
                onPressIn={measureTrigger}
                onPressOut={() => setVisible(false)}
                activeOpacity={1}
            >
                {children}
            </TouchableOpacity>

            <Modal transparent visible={visible} animationType="fade">
                <TouchableOpacity
                    style={styles.overlay}
                    activeOpacity={1}
                    onPress={() => setVisible(false)}
                >
                    <View style={[styles.tooltip, getTooltipPosition()]}>
                        <Text style={styles.label}>{label}</Text>
                        {hasArrow && <View style={[styles.arrow, getArrowStyle()]} />}
                    </View>
                </TouchableOpacity>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
    },
    tooltip: {
        position: 'absolute',
        backgroundColor: 'rgba(30, 30, 35, 0.95)',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.1)',
        maxWidth: 200,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 10,
    },
    label: {
        fontSize: 13,
        color: '#fff',
        textAlign: 'center',
    },
    arrow: {
        position: 'absolute',
        width: 0,
        height: 0,
        borderStyle: 'solid',
    },
});

export default Tooltip;
