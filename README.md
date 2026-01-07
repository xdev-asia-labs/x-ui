# X-UI

Modern cross-platform UI component library for **React.js** and **React Native**.

![Version](https://img.shields.io/badge/version-0.0.1-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

- 🎨 **Modern Design** - Glassmorphism, dark mode, micro-interactions
- 🌗 **Theme Support** - Built-in light/dark themes with customization
- ♿ **Accessible** - WCAG 2.1 AA compliant components
- 📱 **Cross-Platform** - Same API for React.js and React Native
- 🔧 **TypeScript** - Full type safety and IntelliSense
- 🎯 **Tree-shakeable** - Import only what you need

## 📦 Packages

| Package | Description |
|---------|-------------|
| `@xdev-asia/x-ui-core` | Design tokens, hooks, and utilities |
| `@xdev-asia/x-ui-react` | React.js components |
| `@xdev-asia/x-ui-native` | React Native components |

## 🚀 Quick Start

### Installation

```bash
# For React.js
pnpm add @xdev-asia/x-ui-react

# For React Native
pnpm add @xdev-asia/x-ui-native
```

### Usage

#### React.js

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

#### React Native

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

## 🧩 Components

### Available Now (P0)

| Component | React | Native |
|-----------|-------|--------|
| ThemeProvider | ✅ | ✅ |
| Button | ✅ | ✅ |
| Box | ✅ | ✅ |
| Card | ✅ | ✅ |
| Avatar | ✅ | ✅ |
| Badge | ✅ | ✅ |
| Input | ✅ | ✅ |
| Spinner | ✅ | ✅ |

### Coming Soon

See [implementation_plan.md](./implementation_plan.md) for the full roadmap.

## 🎨 Theming

```tsx
import { ThemeProvider } from '@x-ui/react';

<ThemeProvider defaultTheme="dark">
  {/* Your app */}
</ThemeProvider>
```

### Using Theme Hook

```tsx
import { useXTheme } from '@x-ui/react';

function MyComponent() {
  const { theme, mode, toggleMode } = useXTheme();
  
  return (
    <button onClick={toggleMode}>
      Current: {mode}
    </button>
  );
}
```

## 🛠 Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Run development mode
pnpm dev

# Run tests
pnpm test
```

---

## 📐 Responsive Design

X-UI provides powerful responsive utilities for both React and React Native.

### Responsive Values

```tsx
import { useResponsive, responsive } from '@x-ui/react';

function MyComponent() {
  // Responsive value resolves based on screen size
  const padding = useResponsive({
    base: 4,
    sm: 4,
    md: 6,
    lg: 8,
    xl: 12,
  });

  return <Box p={padding}>Content</Box>;
}
```

### Breakpoint Hook

```tsx
import { useBreakpoint } from '@x-ui/react';

function ResponsiveLayout() {
  const { isMobile, isDesktop, breakpoint, isAbove } = useBreakpoint();

  return (
    <div>
      {isMobile && <MobileNav />}
      {isDesktop && <DesktopNav />}
      {isAbove('lg') && <Sidebar />}
    </div>
  );
}
```

### Breakpoints

| Name | Min Width |
|------|-----------|
| `sm` | 0px |
| `md` | 768px |
| `lg` | 1024px |
| `xl` | 1280px |
| `2xl` | 1536px |

---

## 🤖 MCP Server

X-UI includes an MCP (Model Context Protocol) server for AI-assisted component generation.

### Installation

```bash
cd packages/mcp-server
pnpm install
pnpm build
```

### Configuration

Add to your MCP client config (e.g., Claude Desktop, Cursor):

**For Claude Desktop** (`~/Library/Application Support/Claude/claude_desktop_config.json`):

```json
{
  "mcpServers": {
    "x-ui": {
      "command": "node",
      "args": ["/path/to/x-ui/packages/mcp-server/dist/index.js"]
    }
  }
}
```

**For Cursor** (`.cursor/mcp.json`):

```json
{
  "mcpServers": {
    "x-ui": {
      "command": "node",
      "args": ["./packages/mcp-server/dist/index.js"],
      "cwd": "/path/to/x-ui"
    }
  }
}
```

### Available Tools

| Tool | Description |
|------|-------------|
| `generate_component` | Generate new component code |
| `get_design_tokens` | Retrieve color, spacing, typography tokens |
| `list_components` | List all X-UI components |
| `get_component_usage` | Get usage examples for components |

### Example Prompts

```
"Generate a new Select component for React with variants solid and outline"

"Show me all the color tokens in X-UI"

"How do I use the Card component?"

"List all available X-UI components for React Native"
```

### Resources

The MCP server also exposes resources:

| URI | Description |
|-----|-------------|
| `x-ui://tokens/colors` | Color palette |
| `x-ui://tokens/spacing` | Spacing scale |
| `x-ui://components/list` | Component inventory |

---

## 📄 License

MIT
