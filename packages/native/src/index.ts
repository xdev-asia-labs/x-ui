/**
 * X-UI Native Components
 * Modern UI component library for React Native
 */

// Theme
export { ThemeProvider, useXTheme, ThemeContext } from './components/ThemeProvider';
export type { ThemeProviderProps } from './components/ThemeProvider';

// Layout
export { Box } from './components/Box';
export type { BoxProps } from './components/Box';

export { Stack, HStack, VStack } from './components/Stack';
export type { StackProps } from './components/Stack';

export { Divider } from './components/Divider';
export type { DividerProps } from './components/Divider';

// Data Display
export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './components/Card';
export type { CardProps, CardHeaderProps, CardTitleProps, CardDescriptionProps, CardContentProps, CardFooterProps } from './components/Card';

export { Avatar } from './components/Avatar';
export type { AvatarProps } from './components/Avatar';

export { Badge } from './components/Badge';
export type { BadgeProps } from './components/Badge';

export { Tag } from './components/Tag';
export type { TagProps } from './components/Tag';

// Forms
export { Button } from './components/Button';
export type { ButtonProps } from './components/Button';

export { Input } from './components/Input';
export type { InputProps } from './components/Input';

export { Switch } from './components/Switch';
export type { SwitchProps } from './components/Switch';

export { Checkbox } from './components/Checkbox';
export type { CheckboxProps } from './components/Checkbox';

// Feedback
export { Spinner } from './components/Spinner';
export type { SpinnerProps } from './components/Spinner';

export { Progress } from './components/Progress';
export type { ProgressProps } from './components/Progress';

export { Skeleton, SkeletonText, SkeletonCard } from './components/Skeleton';
export type { SkeletonProps } from './components/Skeleton';

// Disclosure
export { Accordion, AccordionItem } from './components/Accordion';
export type { AccordionProps, AccordionItemProps } from './components/Accordion';

// Overlay
export { BottomSheet } from './components/BottomSheet';
export type { BottomSheetProps } from './components/BottomSheet';

export { AlertDialog } from './components/AlertDialog';
export type { AlertDialogProps } from './components/AlertDialog';

export { Tooltip } from './components/Tooltip';
export type { TooltipProps } from './components/Tooltip';

// Actions
export { IconButton } from './components/IconButton';
export type { IconButtonProps } from './components/IconButton';

// V0.1.x Components
export { Slider } from './components/Slider';
export type { SliderProps } from './components/Slider';

export { Stepper } from './components/Stepper';
export type { StepperProps, StepItem } from './components/Stepper';

// Hooks (native-specific, overrides core's useResponsive with RN version)
export * from './hooks';

// Re-export core utilities (excluding conflicting hooks)
export { cn, generateId, useTheme, useMediaQuery } from '@xdev-asia/x-ui-core';
