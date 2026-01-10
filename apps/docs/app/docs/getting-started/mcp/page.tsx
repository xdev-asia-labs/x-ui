'use client';

import React from 'react';
import DocsLayout from '@docs/DocsLayout';
import CodeBlock from '@components/CodeBlock';

export default function MCPPage() {
    return (
        <DocsLayout>
            <div style={{ maxWidth: '900px' }}>
                <h1 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '12px', color: 'var(--x-foreground)' }}>
                    Model Context Protocol (MCP) for X-UI
                </h1>
                <p style={{ fontSize: '18px', color: 'var(--x-mutedForeground)', marginBottom: '40px', lineHeight: 1.7 }}>
                    Access the official X-UI docs and code examples in your AI client.
                </p>

                {/* What is MCP */}
                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        What is MCP?
                    </h2>
                    <p style={{ color: 'var(--x-mutedForeground)', marginBottom: '16px', lineHeight: 1.7 }}>
                        The Model Context Protocol (MCP) is an open standard for connecting AI assistants to real, trusted sources of documentation and code.
                        For X-UI users, this means you get answers that are accurate, up-to-date, and directly reference the official docs.
                    </p>
                    <p style={{ color: 'var(--x-mutedForeground)', lineHeight: 1.7 }}>
                        To learn more about MCP, see the{' '}
                        <a href="https://modelcontextprotocol.io/docs/getting-started/intro" target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(99, 102, 241)' }}>
                            official documentation
                        </a>.
                    </p>
                </section>

                {/* Why use MCP */}
                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Why use MCP?
                    </h2>
                    <p style={{ color: 'var(--x-mutedForeground)', marginBottom: '16px', lineHeight: 1.7 }}>
                        Popular AI coding assistants are excellent at providing answers, especially to straightforward questions.
                        But when faced with deeper, more complex questions that require understanding concepts from multiple parts of the documentation,
                        they often hallucinate links, cite non-existent documentation, or provide answers that are hard to verify.
                    </p>
                    <p style={{ color: 'var(--x-mutedForeground)', marginBottom: '16px', lineHeight: 1.7 }}>
                        MCP solves these problems by:
                    </p>
                    <ul style={{ color: 'var(--x-mutedForeground)', lineHeight: 2, paddingLeft: '24px' }}>
                        <li>Quoting real, direct sources in answers</li>
                        <li>Linking to actual documentation—no imaginary links that lead to 404s</li>
                        <li>Using component code from officially published registries</li>
                    </ul>
                </section>

                {/* Installation */}
                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Installation and Setup
                    </h2>
                    <p style={{ color: 'var(--x-mutedForeground)', marginBottom: '24px', lineHeight: 1.7 }}>
                        The sections below detail how to set up the X-UI MCP in popular agentic coding environments.
                    </p>

                    {/* VS Code, Cursor, Windsurf */}
                    <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '12px', color: 'var(--x-foreground)' }}>
                        VS Code, Cursor, Windsurf
                    </h3>
                    <p style={{ color: 'var(--x-mutedForeground)', marginBottom: '12px', lineHeight: 1.7 }}>
                        Open the MCP configuration (Settings → MCP → Add Server) and add the following:
                    </p>
                    <CodeBlock language="json" code={`"mcpServers": {
  "x-ui-mcp": {
    "type": "stdio",
    "command": "npx",
    "args": ["-y", "@xdev-asia/x-ui-mcp@latest"]
  }
}`} />
                    <p style={{ color: 'var(--x-mutedForeground)', marginTop: '16px', marginBottom: '12px', lineHeight: 1.7 }}>
                        VS Code users must also enable Agent mode (for Copilot Chat) and add the following to <code style={{ color: 'rgb(59, 130, 246)' }}>settings.json</code>:
                    </p>
                    <CodeBlock language="json" code={`"chat.mcp.enabled": true,
"chat.mcp.discovery.enabled": true`} />

                    {/* JetBrains */}
                    <h3 style={{ fontSize: '18px', fontWeight: 600, marginTop: '32px', marginBottom: '12px', color: 'var(--x-foreground)' }}>
                        JetBrains IDEs
                    </h3>
                    <p style={{ color: 'var(--x-mutedForeground)', marginBottom: '12px', lineHeight: 1.7 }}>
                        Open the MCP configuration (Settings → Tools → AI Assistant → Model Context Protocol (MCP)) and add the following:
                    </p>
                    <ul style={{ color: 'var(--x-mutedForeground)', lineHeight: 2, paddingLeft: '24px', marginBottom: '12px' }}>
                        <li><strong>Name:</strong> X-UI MCP</li>
                        <li><strong>Command:</strong> <code style={{ color: 'rgb(59, 130, 246)' }}>npx</code></li>
                        <li><strong>Arguments:</strong> <code style={{ color: 'rgb(59, 130, 246)' }}>-y @xdev-asia/x-ui-mcp@latest</code></li>
                    </ul>
                    <p style={{ color: 'var(--x-mutedForeground)', lineHeight: 1.7 }}>
                        Click OK and Apply.
                    </p>

                    {/* Zed */}
                    <h3 style={{ fontSize: '18px', fontWeight: 600, marginTop: '32px', marginBottom: '12px', color: 'var(--x-foreground)' }}>
                        Zed
                    </h3>
                    <p style={{ color: 'var(--x-mutedForeground)', marginBottom: '12px', lineHeight: 1.7 }}>
                        Search for <code style={{ color: 'rgb(59, 130, 246)' }}>agent: add context server</code> in the Command Palette and add the following:
                    </p>
                    <CodeBlock language="json" code={`{
  "x-ui-mcp-server": {
    "command": {
      "path": "npx",
      "args": ["-y", "@xdev-asia/x-ui-mcp@latest"],
      "env": {}
    }
  }
}`} />

                    {/* Claude Code */}
                    <h3 style={{ fontSize: '18px', fontWeight: 600, marginTop: '32px', marginBottom: '12px', color: 'var(--x-foreground)' }}>
                        Claude Code
                    </h3>
                    <p style={{ color: 'var(--x-mutedForeground)', marginBottom: '12px', lineHeight: 1.7 }}>
                        Claude Code is Anthropic's agentic coding tool that runs in your terminal.
                        You can add the X-UI MCP server via the command line:
                    </p>
                    <CodeBlock language="bash" code={`claude mcp add x-ui-mcp -- npx -y @xdev-asia/x-ui-mcp@latest`} />
                    <p style={{ color: 'var(--x-mutedForeground)', marginTop: '16px', marginBottom: '12px', lineHeight: 1.7 }}>
                        By default, this installs the MCP server to local-scope of the project you are working on.
                        If you want the MCP server to always be available to all projects on your machine, install it to user-scope:
                    </p>
                    <CodeBlock language="bash" code={`claude mcp add x-ui-mcp -s user -- npx -y @xdev-asia/x-ui-mcp@latest`} />
                </section>

                {/* LLMs.txt */}
                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        LLMs.txt
                    </h2>
                    <p style={{ color: 'var(--x-mutedForeground)', marginBottom: '16px', lineHeight: 1.7 }}>
                        X-UI also provides an <code style={{ color: 'rgb(59, 130, 246)' }}>llms.txt</code> file for AI/LLM consumption.
                        This file is automatically generated during build and contains information about all available components.
                    </p>
                    <CodeBlock language="text" code={`https://x-ui.xdev.asia/llms.txt`} />
                </section>

                {/* Troubleshooting */}
                <section>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Troubleshooting
                    </h2>

                    <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '8px', color: 'var(--x-foreground)' }}>
                        MCP connection errors
                    </h3>
                    <p style={{ color: 'var(--x-mutedForeground)', marginBottom: '24px', lineHeight: 1.7 }}>
                        Make sure you have Node.js 18+ installed and that <code style={{ color: 'rgb(59, 130, 246)' }}>npx</code> is available in your PATH.
                    </p>

                    <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '8px', color: 'var(--x-foreground)' }}>
                        MCP not being used in responses
                    </h3>
                    <p style={{ color: 'var(--x-mutedForeground)', lineHeight: 1.7 }}>
                        Ensure your AI client has MCP enabled. In VS Code, check that <code style={{ color: 'rgb(59, 130, 246)' }}>chat.mcp.enabled</code> is set to true.
                        In Cursor, verify the MCP server shows as "Connected" in the settings.
                    </p>
                </section>
            </div>
        </DocsLayout>
    );
}
