import { useState, useEffect } from 'react';
import { breakpoints, Breakpoints } from '../tokens/colors';

type BreakpointKey = keyof Breakpoints;

interface UseMediaQueryReturn {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
    isLargeDesktop: boolean;
    currentBreakpoint: BreakpointKey;
}

/**
 * Hook for responsive design
 * Returns current breakpoint and device type flags
 */
export function useMediaQuery(): UseMediaQueryReturn {
    const [state, setState] = useState<UseMediaQueryReturn>({
        isMobile: true,
        isTablet: false,
        isDesktop: false,
        isLargeDesktop: false,
        currentBreakpoint: 'sm',
    });

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const updateBreakpoint = () => {
            const width = window.innerWidth;
            let currentBreakpoint: BreakpointKey = 'sm';

            if (width >= breakpoints['2xl']) {
                currentBreakpoint = '2xl';
            } else if (width >= breakpoints.xl) {
                currentBreakpoint = 'xl';
            } else if (width >= breakpoints.lg) {
                currentBreakpoint = 'lg';
            } else if (width >= breakpoints.md) {
                currentBreakpoint = 'md';
            }

            setState({
                isMobile: width < breakpoints.md,
                isTablet: width >= breakpoints.md && width < breakpoints.lg,
                isDesktop: width >= breakpoints.lg,
                isLargeDesktop: width >= breakpoints['2xl'],
                currentBreakpoint,
            });
        };

        updateBreakpoint();
        window.addEventListener('resize', updateBreakpoint);
        return () => window.removeEventListener('resize', updateBreakpoint);
    }, []);

    return state;
}
