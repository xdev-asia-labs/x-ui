# X-UI MCP Server

Model Context Protocol (MCP) server for X-UI component library. Provides AI assistants with tools to generate components, access design tokens, and get usage examples.

## Installation

### VSCode (Recommended)

1. Open the X-UI project in VSCode
2. The MCP server will be automatically available from `.vscode/mcp.json`
3. Open Command Palette (`Ctrl+Shift+P`) → "MCP: List Servers"
4. Start the **x-ui** server

### Manual Configuration

Add to your VSCode `settings.json` or `.vscode/mcp.json`:

```json
{
  "servers": {
    "x-ui": {
      "type": "stdio", 
      "command": "npx",
      "args": ["-y", "@xdev-asia/x-ui-mcp-server"]
    }
  }
}
```

### Claude Desktop

Add to `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "x-ui": {
      "command": "npx",
      "args": ["-y", "@xdev-asia/x-ui-mcp-server"]
    }
  }
}
```

## Available Tools

| Tool | Description |
|------|-------------|
| `generate_component` | Generate a new X-UI component for React |
| `get_design_tokens` | Get X-UI design tokens (colors, spacing, typography, etc.) |
| `list_components` | List all available X-UI components |
| `get_component_usage` | Get usage examples for a specific component |

## Available Resources

| Resource | Description |
|----------|-------------|
| `x-ui://tokens/colors` | X-UI color palette and theme colors |
| `x-ui://tokens/spacing` | X-UI spacing scale |
| `x-ui://components/list` | List of all X-UI components |

## Usage Examples

### Generate a new component

```
Use the generate_component tool to create a new Alert component for React with variants: success, warning, error
```

### Get design tokens

```
Use get_design_tokens to retrieve the color palette
```

### Get component usage

```
Show me how to use the Button component in React
```

## Development

```bash
# Build
pnpm build

# Watch mode
pnpm dev

# Start server
pnpm start
```

## License

MIT
