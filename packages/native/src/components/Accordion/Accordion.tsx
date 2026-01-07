import React, { useState, useRef, ReactNode } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Animated,
    LayoutAnimation,
    Platform,
    UIManager,
} from 'react-native';

// Enable LayoutAnimation for Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

export interface AccordionItemProps {
    /** Item title */
    title: string;
    /** Item content */
    children: ReactNode;
    /** Is expanded by default */
    defaultExpanded?: boolean;
    /** Custom header icon */
    icon?: ReactNode;
    /** Disabled state */
    isDisabled?: boolean;
}

export function AccordionItem({
    title,
    children,
    defaultExpanded = false,
    icon,
    isDisabled = false,
}: AccordionItemProps) {
    const [expanded, setExpanded] = useState(defaultExpanded);
    const rotateAnim = useRef(new Animated.Value(defaultExpanded ? 1 : 0)).current;

    const toggleExpand = () => {
        if (isDisabled) return;

        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

        Animated.timing(rotateAnim, {
            toValue: expanded ? 0 : 1,
            duration: 200,
            useNativeDriver: true,
        }).start();

        setExpanded(!expanded);
    };

    const rotation = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg'],
    });

    return (
        <View style={[styles.item, isDisabled && styles.itemDisabled]}>
            <TouchableOpacity
                style={styles.header}
                onPress={toggleExpand}
                activeOpacity={0.7}
                disabled={isDisabled}
            >
                <View style={styles.headerContent}>
                    {icon && <View style={styles.icon}>{icon}</View>}
                    <Text style={[styles.title, isDisabled && styles.titleDisabled]}>
                        {title}
                    </Text>
                </View>
                <Animated.View style={{ transform: [{ rotate: rotation }] }}>
                    <Text style={styles.chevron}>▼</Text>
                </Animated.View>
            </TouchableOpacity>
            {expanded && (
                <View style={styles.content}>
                    {children}
                </View>
            )}
        </View>
    );
}

export interface AccordionProps {
    /** Accordion items */
    children: ReactNode;
    /** Allow multiple items open */
    allowMultiple?: boolean;
    /** Variant style */
    variant?: 'default' | 'separated' | 'bordered';
}

export function Accordion({
    children,
    variant = 'default',
}: AccordionProps) {
    return (
        <View style={[
            styles.container,
            variant === 'separated' && styles.separated,
            variant === 'bordered' && styles.bordered,
        ]}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 16,
        overflow: 'hidden',
    },
    separated: {
        gap: 12,
    },
    bordered: {
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.1)',
    },
    item: {
        backgroundColor: 'rgba(255,255,255,0.06)',
        borderRadius: 12,
        overflow: 'hidden',
    },
    itemDisabled: {
        opacity: 0.5,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        gap: 12,
    },
    icon: {
        width: 24,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
    },
    titleDisabled: {
        color: 'rgba(255,255,255,0.5)',
    },
    chevron: {
        fontSize: 10,
        color: 'rgba(255,255,255,0.5)',
    },
    content: {
        padding: 16,
        paddingTop: 0,
    },
});

export default Accordion;
