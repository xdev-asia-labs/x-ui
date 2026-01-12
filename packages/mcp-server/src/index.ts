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
import { designGuidelines, pageLayouts } from './design-guidelines';

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

// Start server
async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error('X-UI MCP Server v0.1.0 running on stdio');
}

main().catch(console.error);

