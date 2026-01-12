/**
 * X-UI Design Guidelines for AI Assistants
 */

export const designGuidelines = {
    philosophy: {
        name: 'Liquid Glass Design System',
        description: 'Modern glassmorphism-inspired design with depth, blur, and subtle transparency',
        principles: [
            'Depth through layers - use shadows and blur to create visual hierarchy',
            'Transparency with purpose - glass effects enhance, not obscure content',
            'Motion as feedback - subtle animations confirm user actions',
            'Accessibility first - all effects degrade gracefully',
            'Consistency across platforms - unified look on web and mobile'
        ]
    },

    colorUsage: {
        primary: {
            color: 'indigo-600 (#4f46e5)',
            usage: 'Primary CTAs, active states, links, progress indicators'
        },
        secondary: {
            color: 'violet-500 (#8b5cf6)',
            usage: 'Secondary actions, accents, gradients with primary'
        },
        success: {
            color: 'emerald-500 (#10b981)',
            usage: 'Success states, confirmations, positive actions'
        },
        warning: {
            color: 'amber-500 (#f59e0b)',
            usage: 'Warnings, pending states, attention required'
        },
        danger: {
            color: 'red-500 (#ef4444)',
            usage: 'Errors, destructive actions, alerts'
        },
        neutral: {
            color: 'slate (50-950)',
            usage: 'Text, backgrounds, borders, dividers'
        }
    },

    spacingScale: {
        description: 'Consistent spacing using 4px base unit',
        values: {
            xs: '4px',
            sm: '8px',
            md: '16px',
            lg: '24px',
            xl: '32px',
            '2xl': '48px',
            '3xl': '64px'
        },
        guidelines: [
            'Use md (16px) as default padding for cards and containers',
            'Use sm (8px) for related element grouping',
            'Use lg/xl (24-32px) between major sections',
            'Maintain consistent spacing within component variants'
        ]
    },

    typography: {
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        scale: {
            xs: { size: '12px', lineHeight: '16px', usage: 'Labels, captions' },
            sm: { size: '14px', lineHeight: '20px', usage: 'Body text, buttons' },
            base: { size: '16px', lineHeight: '24px', usage: 'Default body' },
            lg: { size: '18px', lineHeight: '28px', usage: 'Lead paragraphs' },
            xl: { size: '20px', lineHeight: '28px', usage: 'Small headings' },
            '2xl': { size: '24px', lineHeight: '32px', usage: 'Section headings' },
            '3xl': { size: '30px', lineHeight: '36px', usage: 'Page titles' },
            '4xl': { size: '36px', lineHeight: '40px', usage: 'Hero text' }
        }
    },

    glassEffect: {
        description: 'Glassmorphism effect for modern UI elements',
        css: {
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '16px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
        },
        whenToUse: [
            'Cards on gradient or image backgrounds',
            'Modal/drawer overlays',
            'Floating action buttons',
            'Navigation headers with scroll',
            'Hero section elements'
        ],
        whenToAvoid: [
            'Dense data tables',
            'Forms with many inputs',
            'When backdrop-filter is not supported',
            'Very light backgrounds (low contrast)'
        ]
    },

    componentPatterns: {
        forms: {
            layout: 'Use Stack with spacing="md" for form fields',
            validation: 'Inline error messages below each field',
            buttons: 'Right-align action buttons in modal/drawer footers',
            example: `<Stack spacing="md">
  <Input label="Name" />
  <Input label="Email" type="email" />
  <HStack justify="end" spacing="sm">
    <Button variant="ghost">Cancel</Button>
    <Button type="submit">Save</Button>
  </HStack>
</Stack>`
        },
        cards: {
            layout: 'Use Grid with gap="md" for card layouts',
            responsive: 'cols={[1, 2, 3]} for responsive grids',
            example: `<Grid cols={[1, 2, 3]} gap="md">
  {items.map(item => (
    <Card key={item.id} variant="glass">
      <CardContent>{item.name}</CardContent>
    </Card>
  ))}
</Grid>`
        },
        modals: {
            structure: 'Header > Body > Footer pattern',
            sizes: 'sm for confirmations, md for forms, lg for complex content',
            example: `<Modal isOpen={isOpen} onClose={onClose} size="md">
  <ModalHeader>Title</ModalHeader>
  <ModalBody>Content</ModalBody>
  <ModalFooter>
    <Button onClick={onClose}>Done</Button>
  </ModalFooter>
</Modal>`
        },
        dataLists: {
            small: 'Use simple Table for < 10 items',
            medium: 'Use DataGrid for 10-1000 items with sorting/filtering',
            large: 'Use virtualized DataGrid for > 1000 items'
        }
    },

    darkMode: {
        strategy: 'CSS custom properties with :root and .dark selectors',
        colors: {
            background: 'Light: #fafafa, Dark: #0a0a0f',
            foreground: 'Light: #0f172a, Dark: #f8fafc',
            muted: 'Light: #64748b, Dark: #94a3b8',
            border: 'Light: rgba(0,0,0,0.1), Dark: rgba(255,255,255,0.1)'
        },
        implementation: 'ThemeProvider with useXTheme hook'
    },

    accessibility: {
        minimumContrast: '4.5:1 for normal text, 3:1 for large text',
        focusRing: 'Visible 2px ring with offset for all interactive elements',
        touchTarget: 'Minimum 44x44px for touch devices',
        motion: 'Respect prefers-reduced-motion media query',
        semantics: 'Use proper HTML elements and ARIA attributes'
    },

    customTheming: {
        description: 'X-UI uses CSS custom properties for full theme customization',

        cssVariables: {
            colors: `/* Override in globals.css */
:root {
    --x-primary: 234 88 12;        /* RGB values */
    --x-secondary: 168 85 247;
    --x-success: 34 197 94;
    --x-warning: 245 158 11;
    --x-danger: 239 68 68;
    
    --x-background: 255 255 255;
    --x-foreground: 15 23 42;
    --x-muted: 241 245 249;
    --x-mutedForeground: 100 116 139;
    --x-border: 226 232 240;
}

.dark {
    --x-background: 15 23 42;
    --x-foreground: 248 250 252;
    --x-muted: 30 41 59;
    --x-border: 51 65 85;
}`,
            glass: `/* Glassmorphism tokens */
:root {
    --x-glass-bg: rgba(255, 255, 255, 0.7);
    --x-glass-border: rgba(0, 0, 0, 0.1);
    --x-glass-blur: 12px;
}

.dark {
    --x-glass-bg: rgba(0, 0, 0, 0.4);
    --x-glass-border: rgba(255, 255, 255, 0.1);
}`,
            spacing: `--x-space-xs: 4px;
--x-space-sm: 8px;
--x-space-md: 16px;
--x-space-lg: 24px;
--x-space-xl: 32px;`,
            radius: `--x-radius-sm: 6px;
--x-radius-md: 12px;
--x-radius-lg: 16px;
--x-radius-full: 9999px;`
        },

        componentOverrides: `/* Override component styles */
.x-button {
    font-family: 'Poppins', sans-serif;
    border-radius: 9999px;
}

.x-button-glass {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
}

.x-card {
    border-radius: 20px;
}

.x-input:focus {
    border-color: rgb(var(--x-primary));
    box-shadow: 0 0 0 3px rgba(var(--x-primary), 0.2);
}`,

        themePresets: `/* Create theme presets with data attributes */
[data-theme="ocean"] {
    --x-primary: 6 182 212;
    --x-secondary: 59 130 246;
}

[data-theme="sunset"] {
    --x-primary: 249 115 22;
    --x-secondary: 239 68 68;
}

[data-theme="forest"] {
    --x-primary: 34 197 94;
    --x-secondary: 16 185 129;
}

/* Apply: <div data-theme="ocean">...</div> */`,

        tailwindIntegration: `// tailwind.config.js
module.exports = {
    theme: {
        extend: {
            colors: {
                'x-primary': 'rgb(var(--x-primary) / <alpha-value>)',
                'x-secondary': 'rgb(var(--x-secondary) / <alpha-value>)',
            },
        },
    },
};`,

        bestPractices: [
            'Override CSS variables in :root for global changes',
            'Use .dark selector for dark mode specific overrides',
            'Use x-* class names for component-level customization',
            'Create theme presets with data-theme attributes',
            'Integrate with Tailwind for utility class support'
        ]
    }
};

export const pageLayouts = {
    dashboard: {
        description: 'Admin dashboard layout with sidebar, header, and content area',
        structure: `<Box className="min-h-screen flex">
  <Sidebar />
  <Box className="flex-1 flex flex-col">
    <Header />
    <main className="flex-1 p-6">
      <Grid cols={[1, 2, 3]} gap="md">
        <StatCard />
        <ChartCard />
        <ActivityCard />
      </Grid>
    </main>
  </Box>
</Box>`
    },
    marketing: {
        description: 'Marketing page with hero, features, and CTA sections',
        structure: `<>
  <Header />
  <Hero />
  <Features />
  <Testimonials />
  <CTA />
  <Footer />
</>`
    },
    settings: {
        description: 'Settings page with tab navigation',
        structure: `<Box className="container py-8">
  <h1>Settings</h1>
  <Tabs defaultValue="profile">
    <TabList>
      <Tab value="profile">Profile</Tab>
      <Tab value="security">Security</Tab>
      <Tab value="notifications">Notifications</Tab>
    </TabList>
    <TabPanel value="profile">
      <ProfileForm />
    </TabPanel>
    ...
  </Tabs>
</Box>`
    }
};
