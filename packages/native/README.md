# @xdev-asia/x-ui-native

React Native components with modern design for mobile apps.

![npm](https://img.shields.io/npm/v/@xdev-asia/x-ui-native)
![License](https://img.shields.io/badge/license-MIT-green)

## Installation

```bash
pnpm add @xdev-asia/x-ui-native
# or
npm install @xdev-asia/x-ui-native
```

## Features

- 🎨 **Modern Design** - Glassmorphism, dark mode, micro-interactions
- 🌗 **Theme Support** - Built-in light/dark themes with customization
- 📱 **Cross-Platform** - Same API as React web components
- 🔧 **TypeScript** - Full type safety and IntelliSense

## Quick Start

```tsx
import { ThemeProvider, Button, Card, Input } from '@xdev-asia/x-ui-native';

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
| Progress | Progress indicator |
| Skeleton | Loading placeholder |
| IconButton | Icon-only button |
| Tooltip | Hover/press information |
| Tag | Label/tag component |

## Theming

```tsx
import { ThemeProvider, useXTheme } from '@xdev-asia/x-ui-native';

// Set default theme
<ThemeProvider defaultTheme="dark">
  {/* Your app */}
</ThemeProvider>

// Toggle theme
function ThemeToggle() {
  const { mode, toggleMode } = useXTheme();
  return <Button onPress={toggleMode}>Current: {mode}</Button>;
}
```

## Related Packages

- [@xdev-asia/x-ui-core](https://npmjs.com/package/@xdev-asia/x-ui-core) - Core utilities
- [@xdev-asia/x-ui-react](https://npmjs.com/package/@xdev-asia/x-ui-react) - React web components

## Documentation

Visit [x-ui.xdev.asia](https://x-ui.xdev.asia) for full documentation.

## License

MIT
