# @xdev-asia/x-ui-react

Modern React components with glassmorphism design.

![npm](https://img.shields.io/npm/v/@xdev-asia/x-ui-react)
![License](https://img.shields.io/badge/license-MIT-green)

## Installation

```bash
pnpm add @xdev-asia/x-ui-react
# or
npm install @xdev-asia/x-ui-react
```

## Features

- 🎨 **Modern Design** - Glassmorphism, dark mode, micro-interactions
- 🌗 **Theme Support** - Built-in light/dark themes with customization
- ♿ **Accessible** - WCAG 2.1 AA compliant components
- 🔧 **TypeScript** - Full type safety and IntelliSense
- 🎯 **Tree-shakeable** - Import only what you need

## Quick Start

```tsx
import { ThemeProvider, Button, Card, Input } from '@xdev-asia/x-ui-react';

function App() {
  return (
    <ThemeProvider>
      <Card variant="glass">
        <Input label="Email" placeholder="Enter your email" />
        <Button variant="solid" colorScheme="primary">
          Submit
        </Button>
      </Card>
    </ThemeProvider>
  );
}
```

## Components

| Component | Description |
|-----------|-------------|
| ThemeProvider | Theme context provider |
| Button | Primary action component |
| Card | Container with glass variants |
| Input | Text input field |
| Avatar | User profile image |
| Badge | Status indicator |
| Box | Flexible container |
| Stack | Flexbox layout |
| Divider | Visual separator |
| Spinner | Loading indicator |
| Switch | Toggle control |
| Checkbox | Selection control |
| Radio | Single selection |
| Tabs | Tab navigation |
| Select | Dropdown select |
| Progress | Progress indicator |
| Skeleton | Loading placeholder |
| IconButton | Icon-only button |
| Tooltip | Hover information |
| AlertDialog | Confirmation modal |
| Accordion | Collapsible content |
| DatePicker | Date selection |
| Dropdown | Menu dropdown |
| Pagination | Page navigation |
| Popover | Floating content |
| Table | Data table |
| Grid | Responsive grid layout |
| Tag | Label/tag component |

## Theming

```tsx
import { ThemeProvider, useXTheme } from '@xdev-asia/x-ui-react';

// Set default theme
<ThemeProvider defaultTheme="dark">
  {/* Your app */}
</ThemeProvider>

// Toggle theme
function ThemeToggle() {
  const { mode, toggleMode } = useXTheme();
  return <Button onClick={toggleMode}>Current: {mode}</Button>;
}
```

## Documentation

Visit [x-ui.xdev.asia](https://x-ui.xdev.asia) for full documentation.

## Related Packages

- [@xdev-asia/x-ui-core](https://npmjs.com/package/@xdev-asia/x-ui-core) - Core utilities

## License

MIT
