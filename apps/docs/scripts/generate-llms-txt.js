/**
 * Script to auto-generate llms.txt for AI/LLM consumption
 * This runs during build to create a dynamic llms.txt file
 */

const fs = require('fs');
const path = require('path');

// Component categories and their components
const componentCategories = {
    'Forms': [
        { name: 'Button', description: 'Trigger actions with customizable buttons' },
        { name: 'IconButton', description: 'Icon-only buttons for common actions' },
        { name: 'Input', description: 'Text input field with validation support' },
        { name: 'TextArea', description: 'Multi-line text input' },
        { name: 'Select', description: 'Dropdown selection component' },
        { name: 'Checkbox', description: 'Binary choice input' },
        { name: 'Radio', description: 'Single selection from multiple options' },
        { name: 'Switch', description: 'Toggle between two states' },
        { name: 'DatePicker', description: 'Date selection with calendar UI' },
    ],
    'Data Display': [
        { name: 'Avatar', description: 'User profile pictures and initials' },
        { name: 'Badge', description: 'Status indicators and counts' },
        { name: 'Card', description: 'Container for related content' },
        { name: 'Tag', description: 'Labels for categorization' },
        { name: 'Table', description: 'Tabular data display' },
    ],
    'Layout': [
        { name: 'Box', description: 'Flexible container component' },
        { name: 'Stack', description: 'Vertical/horizontal layout' },
        { name: 'Grid', description: 'CSS Grid layout system' },
        { name: 'Divider', description: 'Visual separator' },
    ],
    'Feedback': [
        { name: 'Progress', description: 'Progress indicators' },
        { name: 'Spinner', description: 'Loading spinner' },
        { name: 'Skeleton', description: 'Content placeholder' },
        { name: 'Toast', description: 'Temporary notifications' },
        { name: 'Tooltip', description: 'Contextual information popup' },
    ],
    'Navigation': [
        { name: 'Tabs', description: 'Tabbed navigation' },
        { name: 'Pagination', description: 'Page navigation' },
    ],
    'Overlay': [
        { name: 'Modal', description: 'Dialog windows' },
        { name: 'Drawer', description: 'Slide-in panels' },
        { name: 'Dropdown', description: 'Dropdown menus' },
        { name: 'Popover', description: 'Contextual overlays' },
        { name: 'Accordion', description: 'Collapsible content sections' },
        { name: 'AlertDialog', description: 'Confirmation dialogs' },
        { name: 'BottomSheet', description: 'Mobile bottom sheets' },
    ],
};

function generateLlmsTxt() {
    const now = new Date().toISOString();
    const baseUrl = 'https://x-ui.xdev.asia';

    let content = `# X-UI Component Library
# Auto-generated on ${now}
# https://x-ui.xdev.asia

## Overview
X-UI is a modern, cross-platform UI component library by XDEV Asia.
Supports React.js and React Native with a unified API.

## Installation
\`\`\`bash
npm install @xdev-asia/x-ui-react
# or
pnpm add @xdev-asia/x-ui-react
\`\`\`

## Quick Start
\`\`\`tsx
import { Button, Input, Card } from '@xdev-asia/x-ui-react';
import '@xdev-asia/x-ui-react/styles.css';

function App() {
  return (
    <Card>
      <Input placeholder="Enter text" />
      <Button>Submit</Button>
    </Card>
  );
}
\`\`\`

## Documentation URLs
- Getting Started: ${baseUrl}/docs/
- Theming: ${baseUrl}/docs/theming/
- Colors & Tokens: ${baseUrl}/docs/colors/
- MCP Setup: ${baseUrl}/docs/getting-started/mcp/

## Components

`;

    for (const [category, components] of Object.entries(componentCategories)) {
        content += `### ${category}\n`;
        for (const comp of components) {
            const slug = comp.name.toLowerCase();
            content += `- ${comp.name}: ${comp.description}\n`;
            content += `  URL: ${baseUrl}/docs/components/${slug}/\n`;
        }
        content += '\n';
    }

    content += `## Package Information
- Package: @xdev-asia/x-ui-react
- Core: @xdev-asia/x-ui-core
- React Native: @xdev-asia/x-ui-native
- GitHub: https://github.com/xdev-asia/x-ui

## MCP Server
Install in your AI client:
\`\`\`
npx -y @xdev-asia/x-ui-mcp@latest
\`\`\`
`;

    return content;
}

// Generate and write the file
const publicDir = path.join(__dirname, '..', 'public');
const outDir = path.join(__dirname, '..', 'out');

// Ensure directories exist
if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
}

const llmsTxt = generateLlmsTxt();

// Write to public (for dev server)
fs.writeFileSync(path.join(publicDir, 'llms.txt'), llmsTxt);
console.log('✅ Generated public/llms.txt');

// Also write to out if it exists (after build)
if (fs.existsSync(outDir)) {
    fs.writeFileSync(path.join(outDir, 'llms.txt'), llmsTxt);
    console.log('✅ Generated out/llms.txt');
}
