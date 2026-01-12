import React, { ReactNode, useState, useCallback } from 'react';
import {
    RefreshControl as RNRefreshControl,
    ScrollView,
    ScrollViewProps,
    ViewStyle,
} from 'react-native';
import { useXTheme } from '../ThemeProvider';

export interface RefreshableScrollViewProps extends ScrollViewProps {
    /** Refresh handler - should return a promise */
    onRefresh: () => Promise<void>;
    /** Custom colors for refresh indicator */
    colors?: string[];
    /** Progress background color */
    progressBackgroundColor?: string;
    /** Custom style */
    style?: ViewStyle;
}

/**
 * RefreshableScrollView - ScrollView wrapper with pull-to-refresh
 * Automatically handles refreshing state
 */
export function RefreshableScrollView({
    children,
    onRefresh,
    colors,
    progressBackgroundColor,
    style,
    ...props
}: RefreshableScrollViewProps) {
    const { theme } = useXTheme();
    const [refreshing, setRefreshing] = useState(false);

    const handleRefresh = useCallback(async () => {
        setRefreshing(true);
        try {
            await onRefresh();
        } finally {
            setRefreshing(false);
        }
    }, [onRefresh]);

    return (
        <ScrollView
            style={style}
            refreshControl={
                <RNRefreshControl
                    refreshing={refreshing}
                    onRefresh={handleRefresh}
                    colors={colors || [theme.colors.primary]}
                    progressBackgroundColor={progressBackgroundColor || theme.colors.card}
                    tintColor={theme.colors.primary}
                />
            }
            {...props}
        >
            {children}
        </ScrollView>
    );
}

export default RefreshableScrollView;
