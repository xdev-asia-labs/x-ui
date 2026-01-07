import React, { forwardRef, ReactNode } from 'react';
import { View, StyleSheet, ViewProps, ViewStyle } from 'react-native';

export interface StackProps extends ViewProps {
    /** Direction */
    direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    /** Spacing */
    spacing?: number;
    /** Align items */
    align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
    /** Justify content */
    justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
    /** Wrap */
    wrap?: boolean;
    children?: ReactNode;
}

const alignMap: Record<string, ViewStyle['alignItems']> = {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
    stretch: 'stretch',
    baseline: 'baseline',
};

const justifyMap: Record<string, ViewStyle['justifyContent']> = {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
    between: 'space-between',
    around: 'space-around',
    evenly: 'space-evenly',
};

export const Stack = forwardRef<View, StackProps>(
    (
        {
            direction = 'column',
            spacing = 2,
            align = 'stretch',
            justify = 'start',
            wrap = false,
            style,
            children,
            ...props
        },
        ref
    ) => {
        return (
            <View
                ref={ref}
                style={[
                    {
                        flexDirection: direction,
                        gap: spacing * 4,
                        alignItems: alignMap[align],
                        justifyContent: justifyMap[justify],
                        flexWrap: wrap ? 'wrap' : 'nowrap',
                    },
                    style,
                ]}
                {...props}
            >
                {children}
            </View>
        );
    }
);

Stack.displayName = 'Stack';

export const HStack = forwardRef<View, Omit<StackProps, 'direction'>>(
    (props, ref) => <Stack ref={ref} direction="row" {...props} />
);
HStack.displayName = 'HStack';

export const VStack = forwardRef<View, Omit<StackProps, 'direction'>>(
    (props, ref) => <Stack ref={ref} direction="column" {...props} />
);
VStack.displayName = 'VStack';
