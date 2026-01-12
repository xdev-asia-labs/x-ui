/**
 * X-UI Component Templates for MCP Server
 */

export const componentTemplates = {
  list: [
    { name: 'ThemeProvider', platforms: ['react', 'native'], category: 'core' },
    { name: 'Button', platforms: ['react', 'native'], category: 'button' },
    { name: 'Box', platforms: ['react', 'native'], category: 'layout' },
    { name: 'Card', platforms: ['react', 'native'], category: 'data-display' },
    { name: 'Avatar', platforms: ['react', 'native'], category: 'data-display' },
    { name: 'Badge', platforms: ['react', 'native'], category: 'data-display' },
    { name: 'Input', platforms: ['react', 'native'], category: 'input' },
    { name: 'Spinner', platforms: ['react', 'native'], category: 'feedback' },
  ],

  generate(
    name: string,
    platform: 'react' | 'native' | 'both',
    category: string,
    variants: string[],
    sizes: string[]
  ): string {
    const variantsStr = variants.map(v => `'${v}'`).join(' | ');
    const sizesStr = sizes.map(s => `'${s}'`).join(' | ');

    if (platform === 'react' || platform === 'both') {
      return `'use client';

import React, { forwardRef } from 'react';
import { cn } from '@xdev-asia/x-ui-core';

export interface ${name}Props {
  variant?: ${variantsStr};
  size?: ${sizesStr};
  children?: React.ReactNode;
  className?: string;
}

const variantStyles = {
${variants.map(v => `  ${v}: '',`).join('\n')}
};

const sizeStyles = {
${sizes.map(s => `  ${s}: '',`).join('\n')}
};

export const ${name} = forwardRef<HTMLDivElement, ${name}Props>(
  ({ variant = '${variants[0]}', size = '${sizes[1] || sizes[0]}', className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // X-UI identifier classes
          'x-${name.toLowerCase()}',
          \`x-${name.toLowerCase()}-\${variant}\`,
          \`x-${name.toLowerCase()}-\${size}\`,
          // Component styles
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

${name}.displayName = '${name}';
`;
    }

    return `// React Native component template
import React, { forwardRef } from 'react';
import { View, ViewProps } from 'react-native';

export interface ${name}Props extends ViewProps {
  variant?: ${variantsStr};
  size?: ${sizesStr};
}

export const ${name} = forwardRef<View, ${name}Props>(
  ({ variant = '${variants[0]}', size = '${sizes[1] || sizes[0]}', style, children, ...props }, ref) => {
    return (
      <View ref={ref} style={style} {...props}>
        {children}
      </View>
    );
  }
);

${name}.displayName = '${name}';
`;
  },

  getUsage(name: string, platform: string): string {
    const usageExamples: Record<string, Record<string, string>> = {
      Button: {
        react: `import { Button } from '@x-ui/react';

// Basic usage
<Button>Click me</Button>

// With variants
<Button variant="solid" colorScheme="primary">Primary</Button>
<Button variant="outline" colorScheme="secondary">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="glass">Glass Effect</Button>

// With sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// Loading state
<Button isLoading>Loading...</Button>

// With icons
<Button leftIcon={<Icon />}>With Icon</Button>`,
        native: `import { Button } from '@x-ui/native';

// Basic usage
<Button>Click me</Button>

// With variants
<Button variant="solid" colorScheme="primary">Primary</Button>
<Button variant="outline">Outline</Button>
<Button variant="glass">Glass</Button>

// Loading state
<Button isLoading>Loading...</Button>`,
      },
      Card: {
        react: `import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@x-ui/react';

<Card variant="glass">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    Card content goes here
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>`,
        native: `import { Card, CardHeader, CardTitle, CardContent } from '@x-ui/native';

<Card variant="elevated">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    <Text>Card content</Text>
  </CardContent>
</Card>`,
      },
      Input: {
        react: `import { Input } from '@x-ui/react';

// Basic
<Input placeholder="Enter text" />

// With label
<Input label="Email" placeholder="you@example.com" />

// Validation
<Input isInvalid errorMessage="Invalid email" />

// Glass variant
<Input variant="glass" />`,
        native: `import { Input } from '@x-ui/native';

<Input 
  label="Email" 
  placeholder="Enter email"
  variant="outline"
/>`,
      },
    };

    return usageExamples[name]?.[platform] || `// No usage example available for ${name}`;
  },
};
