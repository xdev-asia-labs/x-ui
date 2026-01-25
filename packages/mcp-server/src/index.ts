/**
 * X-UI MCP Server - Enhanced
 * Model Context Protocol server for X-UI component generation
 */

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
    CallToolRequestSchema,
    ListToolsRequestSchema,
    ListResourcesRequestSchema,
    ReadResourceRequestSchema,
    ListPromptsRequestSchema,
    GetPromptRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';

import { componentTemplates } from './templates';
import { designTokens } from './tokens';
import { componentUsageExamples, componentCategories } from './usage-examples';
import { designGuidelines, pageLayouts, integrationNotes } from './design-guidelines';

const server = new Server(
    {
        name: 'x-ui-mcp-server',
        version: '0.1.0',
    },
    {
        capabilities: {
            tools: {},
            resources: {},
            prompts: {},
        },
    }
);

// List available tools
server.setRequestHandler(ListToolsRequestSchema, async () => {
    return {
        tools: [
            {
                name: 'generate_component',
                description: 'Generate a new X-UI component with proper structure, types, and styling',
                inputSchema: {
                    type: 'object',
                    properties: {
                        name: { type: 'string', description: 'Component name (PascalCase)' },
                        platform: { type: 'string', enum: ['react'], description: 'Target platform' },
                        category: {
                            type: 'string',
                            enum: ['button', 'input', 'card', 'layout', 'feedback', 'navigation', 'data-display'],
                            description: 'Component category',
                        },
                        variants: { type: 'array', items: { type: 'string' }, description: 'Variant names' },
                        sizes: { type: 'array', items: { type: 'string' }, description: 'Size names' },
                    },
                    required: ['name'],
                },
            },
            {
                name: 'get_component_docs',
                description: 'Get comprehensive documentation for a component including props, examples, best practices, and accessibility',
                inputSchema: {
                    type: 'object',
                    properties: {
                        name: { type: 'string', description: 'Component name' },
                    },
                    required: ['name'],
                },
            },
            {
                name: 'suggest_components',
                description: 'Suggest X-UI components for a given use case or UI pattern',
                inputSchema: {
                    type: 'object',
                    properties: {
                        useCase: {
                            type: 'string',
                            description: 'Describe the UI you want to build (e.g., "login form", "data table", "settings page")',
                        },
                    },
                    required: ['useCase'],
                },
            },
            {
                name: 'create_page_layout',
                description: 'Generate a complete page layout using X-UI components',
                inputSchema: {
                    type: 'object',
                    properties: {
                        type: {
                            type: 'string',
                            enum: ['dashboard', 'marketing', 'settings', 'form', 'list', 'detail'],
                            description: 'Page type',
                        },
                        features: {
                            type: 'array',
                            items: { type: 'string' },
                            description: 'Features to include (e.g., ["sidebar", "search", "pagination"])',
                        },
                    },
                    required: ['type'],
                },
            },
            {
                name: 'get_design_tokens',
                description: 'Get X-UI design tokens (colors, spacing, typography, shadows)',
                inputSchema: {
                    type: 'object',
                    properties: {
                        category: {
                            type: 'string',
                            enum: ['colors', 'spacing', 'typography', 'shadows', 'borderRadius', 'animation', 'all'],
                        },
                    },
                    required: ['category'],
                },
            },
            {
                name: 'list_components',
                description: 'List all available X-UI components, optionally filtered by category',
                inputSchema: {
                    type: 'object',
                    properties: {
                        category: {
                            type: 'string',
                            enum: ['layout', 'forms', 'dataDisplay', 'feedback', 'navigation', 'overlay'],
                            description: 'Filter by category',
                        },
                    },
                },
            },
            {
                name: 'validate_accessibility',
                description: 'Check if a component usage follows accessibility best practices',
                inputSchema: {
                    type: 'object',
                    properties: {
                        code: { type: 'string', description: 'JSX code to validate' },
                    },
                    required: ['code'],
                },
            },
            {
                name: 'get_integration_guide',
                description: 'Get complete CSS and configuration guide for integrating x-ui with Tailwind CSS v4',
                inputSchema: {
                    type: 'object',
                    properties: {
                        framework: {
                            type: 'string',
                            enum: ['vite', 'nextjs', 'cra'],
                            description: 'Target framework (default: vite)',
                        },
                    },
                },
            },
            {
                name: 'generate_project_structure',
                description: 'Generate standard frontend project structure with x-ui integration (folders, aliases, boilerplate files)',
                inputSchema: {
                    type: 'object',
                    properties: {
                        projectName: {
                            type: 'string',
                            description: 'Name of the project',
                        },
                        includeExamples: {
                            type: 'boolean',
                            description: 'Include example files (default: true)',
                        },
                    },
                },
            },
        ],
    };
});

// Handle tool calls
server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;

    switch (name) {
        case 'generate_component':
            return generateComponent(args as any);
        case 'get_component_docs':
            return getComponentDocs(args as any);
        case 'suggest_components':
            return suggestComponents(args as any);
        case 'create_page_layout':
            return createPageLayout(args as any);
        case 'get_design_tokens':
            return getDesignTokens(args as any);
        case 'list_components':
            return listComponents(args as any);
        case 'validate_accessibility':
            return validateAccessibility(args as any);
        case 'get_integration_guide':
            return getIntegrationGuide(args as any);
        case 'generate_project_structure':
            return generateProjectStructure(args as any);
        default:
            throw new Error(`Unknown tool: ${name}`);
    }
});

// List available resources
server.setRequestHandler(ListResourcesRequestSchema, async () => {
    return {
        resources: [
            {
                uri: 'x-ui://guidelines/design',
                name: 'Design Guidelines',
                description: 'X-UI Liquid Glass design philosophy, colors, spacing, and patterns',
                mimeType: 'application/json',
            },
            {
                uri: 'x-ui://guidelines/accessibility',
                name: 'Accessibility Guidelines',
                description: 'WCAG 2.1 AA compliance guidelines for X-UI',
                mimeType: 'application/json',
            },
            {
                uri: 'x-ui://tokens/all',
                name: 'Design Tokens',
                description: 'Complete design token system',
                mimeType: 'application/json',
            },
            {
                uri: 'x-ui://components/list',
                name: 'Component List',
                description: 'All available X-UI components with categories',
                mimeType: 'application/json',
            },
            {
                uri: 'x-ui://layouts/templates',
                name: 'Page Layout Templates',
                description: 'Pre-built page layout patterns',
                mimeType: 'application/json',
            },
            {
                uri: 'x-ui://guidelines/integration',
                name: 'Integration Notes',
                description: 'Critical CSS setup, common pitfalls, and troubleshooting for x-ui + Tailwind v4 integration',
                mimeType: 'application/json',
            },
        ],
    };
});

// Handle resource reads
server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
    const { uri } = request.params;

    const resources: Record<string, any> = {
        'x-ui://guidelines/design': designGuidelines,
        'x-ui://guidelines/accessibility': designGuidelines.accessibility,
        'x-ui://tokens/all': designTokens,
        'x-ui://components/list': { components: componentTemplates.list, categories: componentCategories },
        'x-ui://layouts/templates': pageLayouts,
        'x-ui://guidelines/integration': integrationNotes,
    };

    if (resources[uri]) {
        return {
            contents: [{
                uri,
                mimeType: 'application/json',
                text: JSON.stringify(resources[uri], null, 2),
            }],
        };
    }

    throw new Error(`Unknown resource: ${uri}`);
});

// List prompts
server.setRequestHandler(ListPromptsRequestSchema, async () => {
    return {
        prompts: [
            {
                name: 'xui_coding_guidelines',
                description: 'Get X-UI coding style and conventions',
            },
            {
                name: 'xui_component_review',
                description: 'Review component code for X-UI best practices',
                arguments: [{ name: 'code', description: 'Code to review', required: true }],
            },
        ],
    };
});

// Handle prompt requests
server.setRequestHandler(GetPromptRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;

    if (name === 'xui_coding_guidelines') {
        return {
            messages: [{
                role: 'user',
                content: {
                    type: 'text',
                    text: `# X-UI Coding Guidelines

## Component Structure
- Use 'use client' directive for client components
- Export component and Props type
- Use forwardRef for DOM element access
- Use cn() utility for class merging

## Naming Conventions
- Components: PascalCase (Button, DataGrid)
- Props: ComponentNameProps
- CSS classes: x-componentname, x-componentname-variant
- Files: ComponentName.tsx

## Styling
- Use Tailwind CSS for utility classes
- Support variant and size props
- Implement glass variant for glassmorphism
- Support colorScheme prop for themed components

## Accessibility
- Support keyboard navigation
- Include ARIA attributes
- Maintain focus management
- Ensure color contrast

## TypeScript
- Explicit prop types with defaults
- Use generics for data components
- Export types for consumer use`
                }
            }],
        };
    }

    if (name === 'xui_component_review') {
        const code = args?.code || '';
        return {
            messages: [{
                role: 'user',
                content: {
                    type: 'text',
                    text: `Review this X-UI component code for best practices:

\`\`\`tsx
${code}
\`\`\`

Check for:
1. Proper 'use client' directive
2. forwardRef usage
3. Props interface with proper types
4. cn() utility for class merging
5. x-* class naming convention
6. Accessibility attributes
7. Keyboard navigation support
8. Dark mode compatibility`
                }
            }],
        };
    }

    throw new Error(`Unknown prompt: ${name}`);
});

// Tool implementations
function generateComponent(args: { name: string; platform?: string; category?: string; variants?: string[]; sizes?: string[] }) {
    const { name, platform = 'react', category = 'button', variants = ['solid', 'outline'], sizes = ['sm', 'md', 'lg'] } = args;
    const template = componentTemplates.generate(name, platform as any, category, variants, sizes);

    return {
        content: [{ type: 'text', text: `Generated ${name} component:\n\n${template}` }],
    };
}

function getComponentDocs(args: { name: string }) {
    const docs = componentUsageExamples[args.name];
    if (!docs) {
        return {
            content: [{ type: 'text', text: `No detailed documentation for ${args.name}. Use list_components to see available components.` }],
        };
    }

    let output = `# ${args.name}\n\n${docs.description}\n\n`;
    output += `## Props\n${Object.entries(docs.props).map(([k, v]) => `- **${k}**: \`${v.type}\` ${v.default ? `(default: ${v.default})` : ''} - ${v.description}`).join('\n')}\n\n`;
    output += `## Examples\n${docs.examples.map(e => `### ${e.title}\n\`\`\`tsx\n${e.code}\n\`\`\``).join('\n\n')}\n\n`;
    output += `## Best Practices\n${docs.bestPractices.map(p => `- ${p}`).join('\n')}\n\n`;
    output += `## Accessibility\n${docs.accessibility.map(a => `- ${a}`).join('\n')}\n\n`;
    output += `## Related Components\n${docs.relatedComponents.join(', ')}`;

    return { content: [{ type: 'text', text: output }] };
}

function suggestComponents(args: { useCase: string }) {
    const useCase = args.useCase.toLowerCase();
    const suggestions: { component: string; reason: string }[] = [];

    // Match patterns
    if (useCase.includes('form') || useCase.includes('input') || useCase.includes('login') || useCase.includes('signup')) {
        suggestions.push({ component: 'Input', reason: 'Text input fields' });
        suggestions.push({ component: 'Button', reason: 'Submit buttons' });
        suggestions.push({ component: 'Stack', reason: 'Form layout' });
        suggestions.push({ component: 'Card', reason: 'Form container' });
    }
    if (useCase.includes('table') || useCase.includes('data') || useCase.includes('list')) {
        suggestions.push({ component: 'DataGrid', reason: 'Advanced data display with sorting/filtering' });
        suggestions.push({ component: 'Pagination', reason: 'Navigate through pages' });
    }
    if (useCase.includes('modal') || useCase.includes('dialog') || useCase.includes('popup')) {
        suggestions.push({ component: 'Modal', reason: 'Overlay dialogs' });
        suggestions.push({ component: 'AlertDialog', reason: 'Confirmation dialogs' });
    }
    if (useCase.includes('dashboard') || useCase.includes('stats') || useCase.includes('card')) {
        suggestions.push({ component: 'Card', reason: 'Statistics and info cards' });
        suggestions.push({ component: 'Grid', reason: 'Dashboard layout' });
        suggestions.push({ component: 'Progress', reason: 'Progress indicators' });
    }
    if (useCase.includes('settings') || useCase.includes('tabs') || useCase.includes('options')) {
        suggestions.push({ component: 'Tabs', reason: 'Organize settings sections' });
        suggestions.push({ component: 'Switch', reason: 'Toggle settings' });
        suggestions.push({ component: 'Select', reason: 'Option selection' });
    }
    if (useCase.includes('navigation') || useCase.includes('menu') || useCase.includes('sidebar')) {
        suggestions.push({ component: 'Drawer', reason: 'Side navigation' });
        suggestions.push({ component: 'Tabs', reason: 'Tab navigation' });
        suggestions.push({ component: 'Dropdown', reason: 'Dropdown menus' });
    }
    if (useCase.includes('file') || useCase.includes('upload')) {
        suggestions.push({ component: 'FileUpload', reason: 'File upload interface' });
        suggestions.push({ component: 'Progress', reason: 'Upload progress' });
    }

    if (suggestions.length === 0) {
        suggestions.push({ component: 'Box', reason: 'Basic layout container' });
        suggestions.push({ component: 'Card', reason: 'Content container' });
        suggestions.push({ component: 'Button', reason: 'User actions' });
    }

    const output = `# Suggested Components for "${args.useCase}"\n\n${suggestions.map(s => `- **${s.component}**: ${s.reason}`).join('\n')}\n\n## Quick Start\n\`\`\`tsx\nimport { ${suggestions.slice(0, 5).map(s => s.component).join(', ')} } from '@xdev-asia/x-ui-react';\n\`\`\``;

    return { content: [{ type: 'text', text: output }] };
}

function createPageLayout(args: { type: string; features?: string[] }) {
    const layout = pageLayouts[args.type as keyof typeof pageLayouts];
    if (!layout) {
        return { content: [{ type: 'text', text: `Unknown layout type. Available: ${Object.keys(pageLayouts).join(', ')}` }] };
    }

    return {
        content: [{
            type: 'text',
            text: `# ${args.type.charAt(0).toUpperCase() + args.type.slice(1)} Page Layout\n\n${layout.description}\n\n\`\`\`tsx\n${layout.structure}\n\`\`\``,
        }],
    };
}

function getDesignTokens(args: { category: string }) {
    const tokens = args.category === 'all' ? designTokens : designTokens[args.category as keyof typeof designTokens];
    return { content: [{ type: 'text', text: JSON.stringify(tokens, null, 2) }] };
}

function listComponents(args: { category?: string }) {
    if (args.category && componentCategories[args.category as keyof typeof componentCategories]) {
        const cat = componentCategories[args.category as keyof typeof componentCategories];
        return {
            content: [{ type: 'text', text: `# ${args.category}\n\n${cat.description}\n\nComponents: ${cat.components.join(', ')}` }],
        };
    }

    const output = Object.entries(componentCategories)
        .map(([name, cat]) => `## ${name}\n${cat.description}\n- ${cat.components.join(', ')}`)
        .join('\n\n');

    return { content: [{ type: 'text', text: `# X-UI Components\n\n${output}` }] };
}

function validateAccessibility(args: { code: string }) {
    const issues: string[] = [];
    const code = args.code;

    // Check for common accessibility issues
    if (code.includes('<img') && !code.includes('alt=')) {
        issues.push('❌ Image missing alt attribute');
    }
    if (code.includes('onClick') && !code.includes('onKeyDown') && !code.includes('Button') && !code.includes('button')) {
        issues.push('⚠️ Click handler without keyboard support - consider using Button component');
    }
    if (code.includes('<div') && code.includes('onClick') && !code.includes('role=')) {
        issues.push('❌ Clickable div without role attribute - add role="button" or use Button component');
    }
    if (!code.includes('aria-label') && code.includes('IconButton')) {
        issues.push('⚠️ IconButton should have aria-label for screen readers');
    }

    if (issues.length === 0) {
        return { content: [{ type: 'text', text: '✅ No obvious accessibility issues found. Remember to test with screen reader and keyboard navigation.' }] };
    }

    return { content: [{ type: 'text', text: `# Accessibility Issues Found\n\n${issues.join('\n')}\n\n## Recommendations\n- Use semantic HTML elements\n- Add ARIA attributes where needed\n- Ensure keyboard navigability\n- Test with screen reader` }] };
}

function getIntegrationGuide(args: { framework?: string }) {
    const framework = args.framework || 'vite';

    const cssContent = `@import "tailwindcss";
@source "@xdev-asia/x-ui-react/dist";

/* Tailwind v4: Extend theme with x-ui colors */
@theme {
  --color-x-primary: var(--x-primary, #0066FF);
  --color-x-secondary: var(--x-secondary, #8B5CF6);
  --color-x-success: var(--x-success, #10B981);
  --color-x-warning: var(--x-warning, #F59E0B);
  --color-x-error: var(--x-error, #EF4444);
  --color-x-background: var(--x-background, #020617);
  --color-x-foreground: var(--x-foreground, #f8fafc);
  --color-x-card: var(--x-card, #0f172a);
}

/* ============================================ */
/* CRITICAL: Explicit X-UI Component Styles    */
/* Tailwind v4 @source may NOT scan x-ui dist! */
/* ============================================ */

/* X-UI Input Component */
.x-input {
  width: 100% !important;
  transition: all 0.2s ease-out !important;
  color: var(--x-foreground, #f8fafc) !important;
  outline: none !important;
}

.x-input::placeholder { color: rgba(148, 163, 184, 0.6) !important; }
.x-input:disabled { opacity: 0.5 !important; cursor: not-allowed !important; }
.x-input:focus { outline: none !important; box-shadow: 0 0 0 2px rgba(0, 102, 255, 0.2) !important; }

/* Input Autofill Override */
.x-input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0 30px #0f172a inset !important;
  -webkit-text-fill-color: #f8fafc !important;
}

/* Input Variants */
.x-input-outline { border: 1px solid rgba(255, 255, 255, 0.1) !important; background: rgba(255, 255, 255, 0.02) !important; }
.x-input-outline:focus { border-color: var(--x-ring, #0066FF) !important; background: rgba(255, 255, 255, 0.04) !important; }
.x-input-glass { border: 1px solid rgba(255, 255, 255, 0.1) !important; background: rgba(255, 255, 255, 0.06) !important; backdrop-filter: blur(16px) !important; }

/* Input Sizes */
.x-input-sm { height: 2.25rem; font-size: 0.875rem; padding: 0 0.75rem; border-radius: 0.75rem; }
.x-input-md { height: 2.75rem; font-size: 0.875rem; padding: 0 1rem; border-radius: 0.75rem; }
.x-input-lg { height: 3.25rem; font-size: 1rem; padding: 0 1.25rem; border-radius: 1rem; }
.x-input.pl-11 { padding-left: 2.75rem !important; }

/* X-UI Button Component */
.x-button {
  display: inline-flex; align-items: center; justify-content: center;
  font-weight: 600; cursor: pointer; transition: all 0.2s ease-out; outline: none;
}
.x-button:disabled { opacity: 0.5; cursor: not-allowed; pointer-events: none; }
.x-button:focus-visible { box-shadow: 0 0 0 2px var(--x-background, #020617), 0 0 0 4px var(--x-ring, #0066FF); }

/* Button Variants */
.x-button-solid, .x-button-primary {
  background: var(--btn-bg, var(--x-primary, #0066FF)); color: var(--btn-fg, #FFFFFF);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1);
}
.x-button-solid:hover:not(:disabled), .x-button-primary:hover:not(:disabled) {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2); filter: brightness(1.1);
}
.x-button-outline { border: 2px solid var(--btn-bg, #0066FF); color: var(--btn-bg, #0066FF); background: transparent; }
.x-button-ghost { color: var(--btn-bg, #0066FF); background: transparent; }
.x-button-ghost:hover:not(:disabled) { background: rgba(0, 102, 255, 0.1); }
.x-button-glass { background: rgba(255, 255, 255, 0.08); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.12); color: var(--x-foreground, #f8fafc); }

/* Button Sizes */
.x-button-xs { height: 1.75rem; padding: 0 0.75rem; font-size: 0.75rem; border-radius: 0.5rem; }
.x-button-sm { height: 2rem; padding: 0 0.875rem; font-size: 0.875rem; border-radius: 0.75rem; }
.x-button-md { height: 2.5rem; padding: 0 1.25rem; font-size: 0.875rem; border-radius: 0.75rem; }
.x-button-lg { height: 3rem; padding: 0 1.5rem; font-size: 1rem; border-radius: 1rem; }
.x-button.w-full { width: 100%; }

/* X-UI Card Component */
.x-card-glass {
  background: rgba(255, 255, 255, 0.06) !important;
  backdrop-filter: blur(16px) !important;
  -webkit-backdrop-filter: blur(16px) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
}
.x-card-elevated {
  background: var(--x-card, #0f172a);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

/* X-UI Badge */
.x-badge-success { background: rgba(16, 185, 129, 0.15); color: #10B981; }
.x-badge-warning { background: rgba(245, 158, 11, 0.15); color: #F59E0B; }
.x-badge-error { background: rgba(239, 68, 68, 0.15); color: #EF4444; }
.x-badge-primary { background: rgba(0, 102, 255, 0.15); color: #0066FF; }`;

    const appSetup = `import { ThemeProvider, ToastProvider } from '@xdev-asia/x-ui-react';

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <ToastProvider>
        {/* Your app content */}
      </ToastProvider>
    </ThemeProvider>
  );
}`;

    let frameworkConfig = '';
    if (framework === 'vite') {
        frameworkConfig = `// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})`;
    } else if (framework === 'nextjs') {
        frameworkConfig = `// next.config.js
module.exports = {
  transpilePackages: ['@xdev-asia/x-ui-react', '@xdev-asia/x-ui-core'],
}`;
    }

    const output = `# X-UI Integration Guide for ${framework.toUpperCase()}

## 1. Install Dependencies
\`\`\`bash
npm install @xdev-asia/x-ui-react tailwindcss@^4 @tailwindcss/vite
\`\`\`

## 2. CSS Configuration (index.css)

> **⚠️ CRITICAL**: Tailwind v4 \`@source\` directive may NOT scan x-ui dist folder correctly!
> You MUST add explicit CSS for Input, Button, and Card components as shown below.

\`\`\`css
${cssContent}
\`\`\`

## 3. App Setup
\`\`\`tsx
${appSetup}
\`\`\`

## 4. Framework Config
\`\`\`typescript
${frameworkConfig}
\`\`\`

## 5. Common Issues & Fixes

### Input has light background instead of dark
This happens because Tailwind doesn't compile x-ui utility classes.
**Fix**: Add explicit \`.x-input-outline\` CSS with \`!important\`.

### Browser autofill breaks styling
**Fix**: Add autofill override:
\`\`\`css
.x-input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0 30px #0f172a inset !important;
  -webkit-text-fill-color: #f8fafc !important;
}
\`\`\`

### Glass effect not visible
**Fix**: Add explicit \`.x-card-glass\` CSS (already included above).

## 6. Reference
See \`e-monitoring/frontend/src/index.css\` for a complete working CSS setup with all component styles.
`;

    return { content: [{ type: 'text', text: output }] };
}

function generateProjectStructure(args: { projectName?: string; includeExamples?: boolean }) {
    const projectName = args.projectName || 'my-app';
    const includeExamples = args.includeExamples !== false;

    const folderStructure = `
src/
├── components/       # Reusable UI components
│   ├── ui/           # Generic x-ui wrapper components
│   └── layout/       # Layout components (Sidebar, Header, etc.)
├── pages/            # Page components
├── hooks/            # Custom React hooks
│   └── index.ts      # Re-export all hooks
├── services/         # API and external services
│   └── api.ts        # Axios instance with interceptors
├── types/            # TypeScript type definitions
│   └── index.ts      # Shared types
├── utils/            # Utility functions
│   ├── cn.ts         # Class name merge utility
│   └── index.ts      # Re-export utils
├── styles/           # Additional CSS files
├── App.tsx           # Main app with providers
├── main.tsx          # Entry point
└── index.css         # Global CSS with x-ui integration
`;

    const tsconfigApp = `{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,

    /* Path aliases */
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/pages/*": ["./src/pages/*"],
      "@/hooks/*": ["./src/hooks/*"],
      "@/services/*": ["./src/services/*"],
      "@/types/*": ["./src/types/*"],
      "@/utils/*": ["./src/utils/*"]
    }
  },
  "include": ["src"]
}`;

    const viteConfig = `import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/components': path.resolve(__dirname, './src/components'),
      '@/pages': path.resolve(__dirname, './src/pages'),
      '@/hooks': path.resolve(__dirname, './src/hooks'),
      '@/services': path.resolve(__dirname, './src/services'),
      '@/types': path.resolve(__dirname, './src/types'),
      '@/utils': path.resolve(__dirname, './src/utils'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8888',
        changeOrigin: true,
      },
    },
  },
})`;

    const indexCss = `@import "tailwindcss";
@source "@xdev-asia/x-ui-react/dist";

@theme {
  --color-x-primary: var(--x-primary, #0066FF);
  --color-x-background: var(--x-background, #020617);
  --color-x-foreground: var(--x-foreground, #f8fafc);
  --color-x-card: var(--x-card, #0f172a);
}

/* Box sizing reset - DO NOT add margin: 0 or padding: 0 as it overrides Tailwind utilities! */
*, *::before, *::after { box-sizing: border-box; }
html, body, #root { height: 100%; margin: 0; }
body { font-family: Inter, -apple-system, sans-serif; }

.dark body { background: linear-gradient(135deg, #020617 0%, #0f172a 100%); color: #f8fafc; }

/* X-UI Component Styles */
.x-card-glass {
  background: rgba(255, 255, 255, 0.06) !important;
  backdrop-filter: blur(16px) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
}`;

    const appTsx = `import { ThemeProvider, ToastProvider } from '@xdev-asia/x-ui-react'

function AppContent() {
  return (
    <div className="min-h-screen">
      <h1>Welcome to ${projectName}</h1>
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <ToastProvider>
        <AppContent />
      </ToastProvider>
    </ThemeProvider>
  )
}`;

    const apiService = `import axios from 'axios'

export const api = axios.create({
  baseURL: '/api',
  timeout: 30000,
})

api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
)

export default api`;

    const output = `# ${projectName} - Project Structure

## Folder Structure
\`\`\`
${folderStructure}
\`\`\`

## Setup Commands
\`\`\`bash
# Create folders
mkdir -p src/components/ui src/components/layout src/pages src/hooks src/services src/types src/utils src/styles

# Install dependencies
npm install @xdev-asia/x-ui-react tailwindcss@^4 @tailwindcss/vite @tanstack/react-query axios lucide-react
npm install -D clsx tailwind-merge @types/node
\`\`\`

## Configuration Files

### tsconfig.app.json
\`\`\`json
${tsconfigApp}
\`\`\`

### vite.config.ts
\`\`\`typescript
${viteConfig}
\`\`\`

### src/index.css
\`\`\`css
${indexCss}
\`\`\`

### src/App.tsx
\`\`\`tsx
${appTsx}
\`\`\`

### src/services/api.ts
\`\`\`typescript
${apiService}
\`\`\`

## Path Aliases
| Alias | Path |
|-------|------|
| \`@/*\` | \`./src/*\` |
| \`@/components/*\` | \`./src/components/*\` |
| \`@/hooks/*\` | \`./src/hooks/*\` |
| \`@/services/*\` | \`./src/services/*\` |
| \`@/types/*\` | \`./src/types/*\` |
| \`@/utils/*\` | \`./src/utils/*\` |

## Usage Example
\`\`\`tsx
import { Button, Card } from '@xdev-asia/x-ui-react'
import { useClusterInfo } from '@/hooks'
import api from '@/services/api'
import type { ClusterInfo } from '@/types'
\`\`\`
`;

    return { content: [{ type: 'text', text: output }] };
}

// Start server
async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error('X-UI MCP Server v0.1.0 running on stdio');
}

main().catch(console.error);

