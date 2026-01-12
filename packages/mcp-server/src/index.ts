/**
 * X-UI MCP Server
 * Model Context Protocol server for X-UI component generation
 */

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
    CallToolRequestSchema,
    ListToolsRequestSchema,
    ListResourcesRequestSchema,
    ReadResourceRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';

import { componentTemplates } from './templates';
import { designTokens } from './tokens';

const server = new Server(
    {
        name: 'x-ui-mcp-server',
        version: '0.0.1',
    },
    {
        capabilities: {
            tools: {},
            resources: {},
        },
    }
);

// List available tools
server.setRequestHandler(ListToolsRequestSchema, async () => {
    return {
        tools: [
            {
                name: 'generate_component',
                description: 'Generate a new X-UI component for React',
                inputSchema: {
                    type: 'object',
                    properties: {
                        name: {
                            type: 'string',
                            description: 'Component name (PascalCase)',
                        },
                        platform: {
                            type: 'string',
                            enum: ['react', 'native', 'both'],
                            description: 'Target platform',
                        },
                        category: {
                            type: 'string',
                            enum: ['button', 'input', 'card', 'layout', 'feedback', 'navigation', 'data-display'],
                            description: 'Component category for template selection',
                        },
                        variants: {
                            type: 'array',
                            items: { type: 'string' },
                            description: 'List of variant names (e.g., ["solid", "outline", "ghost"])',
                        },
                        sizes: {
                            type: 'array',
                            items: { type: 'string' },
                            description: 'List of size names (e.g., ["sm", "md", "lg"])',
                        },
                    },
                    required: ['name', 'platform'],
                },
            },
            {
                name: 'get_design_tokens',
                description: 'Get X-UI design tokens (colors, spacing, typography, etc.)',
                inputSchema: {
                    type: 'object',
                    properties: {
                        category: {
                            type: 'string',
                            enum: ['colors', 'spacing', 'typography', 'shadows', 'borderRadius', 'animation', 'all'],
                            description: 'Token category to retrieve',
                        },
                    },
                    required: ['category'],
                },
            },
            {
                name: 'list_components',
                description: 'List all available X-UI components',
                inputSchema: {
                    type: 'object',
                    properties: {
                        platform: {
                            type: 'string',
                            enum: ['react', 'native'],
                            description: 'Filter by platform',
                        },
                    },
                },
            },
            {
                name: 'get_component_usage',
                description: 'Get usage examples for a specific component',
                inputSchema: {
                    type: 'object',
                    properties: {
                        name: {
                            type: 'string',
                            description: 'Component name',
                        },
                        platform: {
                            type: 'string',
                            enum: ['react', 'native'],
                        },
                    },
                    required: ['name'],
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

        case 'get_design_tokens':
            return getDesignTokens(args as any);

        case 'list_components':
            return listComponents(args as any);

        case 'get_component_usage':
            return getComponentUsage(args as any);

        default:
            throw new Error(`Unknown tool: ${name}`);
    }
});

// List available resources
server.setRequestHandler(ListResourcesRequestSchema, async () => {
    return {
        resources: [
            {
                uri: 'x-ui://tokens/colors',
                name: 'Color Tokens',
                description: 'X-UI color palette and theme colors',
                mimeType: 'application/json',
            },
            {
                uri: 'x-ui://tokens/spacing',
                name: 'Spacing Tokens',
                description: 'X-UI spacing scale',
                mimeType: 'application/json',
            },
            {
                uri: 'x-ui://components/list',
                name: 'Component List',
                description: 'List of all X-UI components',
                mimeType: 'application/json',
            },
        ],
    };
});

// Handle resource reads
server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
    const { uri } = request.params;

    if (uri === 'x-ui://tokens/colors') {
        return {
            contents: [
                {
                    uri,
                    mimeType: 'application/json',
                    text: JSON.stringify(designTokens.colors, null, 2),
                },
            ],
        };
    }

    if (uri === 'x-ui://tokens/spacing') {
        return {
            contents: [
                {
                    uri,
                    mimeType: 'application/json',
                    text: JSON.stringify(designTokens.spacing, null, 2),
                },
            ],
        };
    }

    if (uri === 'x-ui://components/list') {
        return {
            contents: [
                {
                    uri,
                    mimeType: 'application/json',
                    text: JSON.stringify(componentTemplates.list, null, 2),
                },
            ],
        };
    }

    throw new Error(`Unknown resource: ${uri}`);
});

// Tool implementations
function generateComponent(args: {
    name: string;
    platform: 'react' | 'native' | 'both';
    category?: string;
    variants?: string[];
    sizes?: string[];
}) {
    const { name, platform, category = 'button', variants = ['solid', 'outline'], sizes = ['sm', 'md', 'lg'] } = args;

    const template = componentTemplates.generate(name, platform, category, variants, sizes);

    return {
        content: [
            {
                type: 'text',
                text: `Generated ${name} component for ${platform}:\n\n${template}`,
            },
        ],
    };
}

function getDesignTokens(args: { category: string }) {
    const { category } = args;

    const tokens = category === 'all'
        ? designTokens
        : designTokens[category as keyof typeof designTokens];

    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(tokens, null, 2),
            },
        ],
    };
}

function listComponents(args: { platform?: string }) {
    const components = componentTemplates.list;
    const filtered = args.platform
        ? components.filter((c: any) => c.platforms.includes(args.platform))
        : components;

    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(filtered, null, 2),
            },
        ],
    };
}

function getComponentUsage(args: { name: string; platform?: string }) {
    const { name, platform = 'react' } = args;
    const usage = componentTemplates.getUsage(name, platform);

    return {
        content: [
            {
                type: 'text',
                text: usage,
            },
        ],
    };
}

// Start server
async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error('X-UI MCP Server running on stdio');
}

main().catch(console.error);
