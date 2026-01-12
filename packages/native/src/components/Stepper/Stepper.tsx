import React, { ReactNode } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { useXTheme } from '../ThemeProvider/ThemeProvider';

export interface StepperProps {
    steps: StepItem[];
    activeStep: number;
    orientation?: 'horizontal' | 'vertical';
    colorScheme?: 'primary' | 'secondary' | 'success';
    size?: 'sm' | 'md' | 'lg';
    onStepPress?: (index: number) => void;
    style?: ViewStyle;
}

export interface StepItem {
    title: string;
    description?: string;
    icon?: ReactNode;
}

const colorSchemes = {
    primary: '#6366f1',
    secondary: '#a855f7',
    success: '#22c55e',
};

const sizes = {
    sm: { circle: 24, font: 12, descFont: 10 },
    md: { circle: 32, font: 14, descFont: 12 },
    lg: { circle: 40, font: 16, descFont: 14 },
};

export function Stepper({
    steps,
    activeStep,
    orientation = 'horizontal',
    colorScheme = 'primary',
    size = 'md',
    onStepPress,
    style,
}: StepperProps) {
    const { theme } = useXTheme();
    const color = colorSchemes[colorScheme];
    const sizeStyles = sizes[size];
    const isVertical = orientation === 'vertical';

    return (
        <View
            style={[
                styles.container,
                isVertical ? styles.vertical : styles.horizontal,
                style,
            ]}
        >
            {steps.map((step, index) => {
                const isActive = index === activeStep;
                const isCompleted = index < activeStep;
                const isLast = index === steps.length - 1;

                return (
                    <View
                        key={index}
                        style={[
                            styles.stepContainer,
                            isVertical ? styles.stepVertical : styles.stepHorizontal,
                        ]}
                    >
                        <View style={isVertical ? styles.circleContainerVertical : styles.circleContainerHorizontal}>
                            <TouchableOpacity
                                onPress={() => onStepPress?.(index)}
                                disabled={!onStepPress}
                                style={[
                                    styles.circle,
                                    {
                                        width: sizeStyles.circle,
                                        height: sizeStyles.circle,
                                        borderRadius: sizeStyles.circle / 2,
                                        backgroundColor: isActive || isCompleted ? color : theme.colors.muted,
                                        borderColor: isActive || isCompleted ? color : theme.colors.border,
                                    },
                                ]}
                            >
                                {isCompleted ? (
                                    <Text style={styles.checkmark}>✓</Text>
                                ) : (
                                    <Text
                                        style={[
                                            styles.stepNumber,
                                            {
                                                fontSize: sizeStyles.font - 2,
                                                color: isActive ? '#ffffff' : theme.colors.mutedForeground,
                                            },
                                        ]}
                                    >
                                        {index + 1}
                                    </Text>
                                )}
                            </TouchableOpacity>

                            {!isLast && (
                                <View
                                    style={[
                                        isVertical ? styles.lineVertical : styles.lineHorizontal,
                                        {
                                            backgroundColor: isCompleted ? color : theme.colors.border,
                                        },
                                    ]}
                                />
                            )}
                        </View>

                        <View style={[
                            styles.content,
                            isVertical ? styles.contentVertical : styles.contentHorizontal,
                        ]}>
                            <Text
                                style={[
                                    styles.title,
                                    {
                                        fontSize: sizeStyles.font,
                                        color: isActive ? theme.colors.foreground : theme.colors.mutedForeground,
                                    },
                                ]}
                            >
                                {step.title}
                            </Text>
                            {step.description && (
                                <Text
                                    style={[
                                        styles.description,
                                        {
                                            fontSize: sizeStyles.descFont,
                                            color: theme.colors.mutedForeground,
                                        },
                                    ]}
                                >
                                    {step.description}
                                </Text>
                            )}
                        </View>
                    </View>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {},
    horizontal: {
        flexDirection: 'row',
    },
    vertical: {
        flexDirection: 'column',
    },
    stepContainer: {},
    stepHorizontal: {
        flex: 1,
        alignItems: 'center',
    },
    stepVertical: {
        flexDirection: 'row',
    },
    circleContainerHorizontal: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
    },
    circleContainerVertical: {
        alignItems: 'center',
    },
    circle: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
    },
    stepNumber: {
        fontWeight: '600',
    },
    checkmark: {
        color: '#ffffff',
        fontWeight: 'bold',
    },
    lineHorizontal: {
        flex: 1,
        height: 2,
        marginHorizontal: 8,
    },
    lineVertical: {
        width: 2,
        height: 32,
        marginVertical: 4,
    },
    content: {},
    contentHorizontal: {
        marginTop: 8,
        alignItems: 'center',
    },
    contentVertical: {
        marginLeft: 12,
        paddingBottom: 32,
    },
    title: {
        fontWeight: '500',
    },
    description: {
        marginTop: 2,
    },
});
