# @xdev-asia/x-ui-core

Core utilities, design tokens, and hooks for X-UI component library.

![npm](https://img.shields.io/npm/v/@xdev-asia/x-ui-core)
![License](https://img.shields.io/badge/license-MIT-green)

## Installation

```bash
pnpm add @xdev-asia/x-ui-core
# or
npm install @xdev-asia/x-ui-core
```

## Features

- 🎨 **Design Tokens** - Colors, spacing, typography, shadows
- 🔧 **Utilities** - Common helper functions
- 🪝 **Hooks** - Reusable React hooks (useResponsive, useBreakpoint)
- 📐 **Responsive** - Breakpoint utilities for responsive design

## Usage

### Design Tokens

```ts
import { colors, spacing, typography, breakpoints } from '@xdev-asia/x-ui-core/tokens';

// Colors
console.log(colors.primary[500]); // Primary color shade 500

// Spacing
console.log(spacing[4]); // "1rem"

// Typography
console.log(typography.sizes.md); // Medium font size
```

### Responsive Utilities

```ts
import { createResponsiveValue, getBreakpointValue } from '@xdev-asia/x-ui-core';

const value = getBreakpointValue({
  base: 4,
  md: 6,
  lg: 8,
}, 'md');
// Returns: 6
```

### Breakpoints

| Name | Min Width |
|------|-----------|
| `sm` | 0px |
| `md` | 768px |
| `lg` | 1024px |
| `xl` | 1280px |
| `2xl` | 1536px |

## Related Packages

- [@xdev-asia/x-ui-react](https://npmjs.com/package/@xdev-asia/x-ui-react) - React components
- [@xdev-asia/x-ui-native](https://npmjs.com/package/@xdev-asia/x-ui-native) - React Native components

## License

MIT
