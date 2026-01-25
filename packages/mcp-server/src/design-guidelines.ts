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
            'Use 8+ (32px+) for Grid gap to prevent cards from feeling cramped',
            'Maintain consistent spacing within component variants',
            'Recommended Grid gaps: gap={8} for cards, gap={6} for tight layouts',
            'HStack/VStack default align is "center" for proper icon alignment'
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
            layout: 'Use Grid with gap={8} for card layouts (prevents cramped appearance)',
            responsive: 'columns={{ base: 1, md: 2, lg: 3 }} for responsive grids',
            example: `<Grid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
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

    icons: {
        recommendation: 'Use built-in x-ui icons instead of external icon libraries',
        available: [
            'XIcon', 'MenuIcon', 'SunIcon', 'MoonIcon',
            'ChevronDownIcon', 'ChevronLeftIcon', 'ChevronRightIcon',
            'CheckIcon', 'SearchIcon', 'AlertCircleIcon', 'InfoIcon', 'LoaderIcon'
        ],
        usage: 'Import from @xdev-asia/x-ui-react - all icons are inline SVG',
        benefits: [
            'No external dependencies (lucide-react not needed)',
            'Smaller bundle size',
            'Better tree-shaking',
            'Consistent styling with stroke="currentColor"'
        ],
        example: `import { MenuIcon, SunIcon, MoonIcon } from '@xdev-asia/x-ui-react'

<IconButton icon={<MenuIcon size={20} />} />`
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
      <Grid columns={{ base: 1, sm: 2, lg: 3 }} gap={4}>
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

/**
 * Integration Notes - Critical setup requirements and common pitfalls
 */
export const integrationNotes = {
    cssSetup: {
        title: 'CSS Setup for Tailwind v4',
        description: 'X-UI requires proper CSS configuration with Tailwind v4. IMPORTANT: Tailwind v4 @source directive may not scan x-ui dist files correctly. You MUST add explicit CSS styles for components.',

        requiredSourceDirectives: `/* index.css - Add these @source directives for Tailwind v4 to scan classes */
@import "tailwindcss";

/* Source paths for Tailwind v4 to scan for classes */
@source "./**/*.tsx";
@source "./**/*.ts";
@source "../../packages/x-ui/packages/react/src/**/*.tsx";
@source "../../packages/x-ui/packages/core/src/**/*.ts";`,

        requiredCSSVariables: `/* Add these CSS variables for x-ui components to work correctly */
:root {
    --x-background: #020617;
    --x-foreground: #f8fafc;
    --x-primary: #0066FF;
    --x-primaryForeground: #FFFFFF;
    --x-secondary: #8B5CF6;
    --x-secondaryForeground: #FFFFFF;
    --x-muted: #1e293b;
    --x-mutedForeground: #94a3b8;
    --x-success: #10B981;
    --x-warning: #F59E0B;
    --x-error: #EF4444;
    --x-destructive: #EF4444;
    --x-card: #0f172a;
    --x-cardForeground: #f8fafc;
    --x-border: #1e293b;
    --x-ring: #0066FF;
    --x-radius: 0.75rem;
}`,

        globalResetWarning: {
            issue: 'Global CSS reset overrides Tailwind utilities',
            problem: '* { margin: 0; padding: 0; } will override p-4, m-4, etc.',
            solution: `/* WRONG - This overrides Tailwind utilities */
* { margin: 0; padding: 0; box-sizing: border-box; }

/* CORRECT - Only set box-sizing */
*, *::before, *::after { box-sizing: border-box; }`
        }
    },

    /**
     * CRITICAL: Explicit CSS for x-ui components
     * Tailwind v4 @source may not compile utility classes from x-ui dist folder.
     * You MUST add these CSS styles to ensure components render correctly.
     */
    componentCSS: {
        description: 'Explicit CSS styles for x-ui components. Required because Tailwind v4 may not scan x-ui dist folder.',

        inputComponent: `/* ============================================ */
/* X-UI Input Component Styles                 */
/* Required for dark theme styling             */
/* ============================================ */
.x-input {
  width: 100% !important;
  transition: all 0.2s ease-out !important;
  color: var(--x-foreground, #f8fafc) !important;
  outline: none !important;
  -webkit-appearance: none !important;
  appearance: none !important;
}

.x-input::placeholder {
  color: rgba(148, 163, 184, 0.6) !important;
}

.x-input:disabled {
  opacity: 0.5 !important;
  cursor: not-allowed !important;
}

.x-input:focus {
  outline: none !important;
  box-shadow: 0 0 0 2px rgba(0, 102, 255, 0.2) !important;
}

/* Override browser autofill styles */
.x-input:-webkit-autofill,
.x-input:-webkit-autofill:hover,
.x-input:-webkit-autofill:focus,
.x-input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 30px rgba(15, 23, 42, 1) inset !important;
  -webkit-text-fill-color: var(--x-foreground, #f8fafc) !important;
  caret-color: var(--x-foreground, #f8fafc) !important;
  transition: background-color 5000s ease-in-out 0s !important;
}

/* Input Variants */
.x-input-outline,
.x-input.x-input-outline {
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  background: rgba(255, 255, 255, 0.02) !important;
}

.x-input-outline:focus {
  border-color: var(--x-ring, #0066FF) !important;
  background: rgba(255, 255, 255, 0.04) !important;
}

.x-input-glass {
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  background: rgba(255, 255, 255, 0.06) !important;
  backdrop-filter: blur(16px) !important;
  -webkit-backdrop-filter: blur(16px) !important;
}

/* Input Sizes */
.x-input-sm { height: 2.25rem; font-size: 0.875rem; padding: 0 0.75rem; border-radius: 0.75rem; }
.x-input-md { height: 2.75rem; font-size: 0.875rem; padding: 0 1rem; border-radius: 0.75rem; }
.x-input-lg { height: 3.25rem; font-size: 1rem; padding: 0 1.25rem; border-radius: 1rem; }

/* Input with icons - left icon padding */
.x-input.pl-11 { padding-left: 2.75rem !important; }
.x-input.pr-11 { padding-right: 2.75rem !important; }`,

        buttonComponent: `/* ============================================ */
/* X-UI Button Component Styles                */
/* ============================================ */
.x-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-out;
  outline: none;
}

.x-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

.x-button:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--x-background, #020617), 0 0 0 4px var(--x-ring, #0066FF);
}

/* Button Variants */
.x-button-solid,
.x-button-primary {
  background: var(--btn-bg, var(--x-primary, #0066FF));
  color: var(--btn-fg, #FFFFFF);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.x-button-solid:hover:not(:disabled),
.x-button-primary:hover:not(:disabled) {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15);
  filter: brightness(1.1);
}

.x-button-solid:active:not(:disabled),
.x-button-primary:active:not(:disabled) {
  transform: scale(0.98);
}

.x-button-outline {
  border: 2px solid var(--btn-bg, var(--x-primary, #0066FF));
  color: var(--btn-bg, var(--x-primary, #0066FF));
  background: transparent;
}

.x-button-ghost {
  color: var(--btn-bg, var(--x-primary, #0066FF));
  background: transparent;
}

.x-button-ghost:hover:not(:disabled) {
  background: rgba(0, 102, 255, 0.1);
}

.x-button-glass {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: var(--x-foreground, #f8fafc);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

/* Button Sizes */
.x-button-xs { height: 1.75rem; padding: 0 0.75rem; font-size: 0.75rem; gap: 0.375rem; border-radius: 0.5rem; }
.x-button-sm { height: 2rem; padding: 0 0.875rem; font-size: 0.875rem; gap: 0.375rem; border-radius: 0.75rem; }
.x-button-md { height: 2.5rem; padding: 0 1.25rem; font-size: 0.875rem; gap: 0.5rem; border-radius: 0.75rem; }
.x-button-lg { height: 3rem; padding: 0 1.5rem; font-size: 1rem; gap: 0.625rem; border-radius: 1rem; }
.x-button-xl { height: 3.5rem; padding: 0 2rem; font-size: 1.125rem; gap: 0.75rem; border-radius: 1rem; }

/* Button full width */
.x-button.w-full { width: 100%; }`,

        cardComponent: `/* ============================================ */
/* X-UI Card Component Styles                  */
/* ============================================ */
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
}`,

        badgeComponent: `/* X-UI Badge Styles */
.x-badge-success { background: rgba(16, 185, 129, 0.15); color: #10B981; }
.x-badge-warning { background: rgba(245, 158, 11, 0.15); color: #F59E0B; }
.x-badge-error { background: rgba(239, 68, 68, 0.15); color: #EF4444; }
.x-badge-primary { background: rgba(0, 102, 255, 0.15); color: #0066FF; }
.x-badge-info { background: rgba(6, 182, 212, 0.15); color: #06B6D4; }`
    },

    /**
     * Professional Login Page Design Pattern
     * A complete example of enterprise-grade login page styling
     */
    loginPageCSS: {
        description: 'Professional login page CSS with animated background, glassmorphism, and proper spacing',

        fullCSS: `/* ============================================ */
/* Login Page - Professional Enterprise Design */
/* ============================================ */
.login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

/* Animated Background with gradient orbs */
.login-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.login-bg-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #020617 0%, #0f172a 50%, #020617 100%);
}

.login-bg-grid {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse 80% 60% at 50% 50%, black 20%, transparent 100%);
}

.login-bg-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  animation: float 20s ease-in-out infinite;
}

.login-bg-orb-1 {
  width: 600px; height: 600px;
  background: radial-gradient(circle, rgba(0, 102, 255, 0.15) 0%, transparent 70%);
  top: -10%; left: -10%;
}

.login-bg-orb-2 {
  width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 70%);
  bottom: -5%; right: -5%;
  animation-delay: -7s;
}

.login-bg-orb-3 {
  width: 300px; height: 300px;
  background: radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%);
  top: 50%; left: 60%;
  animation-delay: -14s;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(30px, -30px) scale(1.05); }
  50% { transform: translate(-20px, 20px) scale(0.95); }
  75% { transform: translate(20px, 30px) scale(1.02); }
}

/* Login Container */
.login-container {
  width: 100%;
  max-width: 420px;
  position: relative;
  z-index: 10;
}

/* Logo */
.login-logo {
  width: 88px;
  height: 88px;
  background: linear-gradient(135deg, #0066FF 0%, #0052CC 100%);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 
    0 20px 40px -10px rgba(0, 102, 255, 0.4),
    0 0 0 1px rgba(255, 255, 255, 0.1) inset;
}

.login-logo::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 24px;
  background: linear-gradient(180deg, rgba(255,255,255,0.2) 0%, transparent 50%);
}

/* Title */
.login-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #f8fafc;
  letter-spacing: -0.025em;
  margin: 0 0 0.375rem 0;
}

.login-subtitle {
  font-size: 1rem;
  color: #64748b;
  margin: 0;
}

/* Card */
.login-card {
  background: rgba(15, 23, 42, 0.7) !important;
  backdrop-filter: blur(24px) !important;
  -webkit-backdrop-filter: blur(24px) !important;
  border: 1px solid rgba(255, 255, 255, 0.08) !important;
  border-radius: 24px !important;
  padding: 2.5rem !important;
  box-shadow: 
    0 25px 50px -12px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(255, 255, 255, 0.05) inset;
}

/* Form Fields */
.login-field {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}

.login-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: #cbd5e1;
}

.login-input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.login-input-icon {
  position: absolute;
  left: 1rem;
  color: #64748b;
  transition: color 0.2s ease;
}

.login-input {
  width: 100%;
  height: 3.25rem;
  padding: 0 1rem 0 3rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  color: #f8fafc;
  font-size: 0.9375rem;
  font-family: inherit;
  transition: all 0.2s ease;
  outline: none;
}

.login-input::placeholder { color: #475569; }
.login-input:hover { border-color: rgba(255, 255, 255, 0.12); background: rgba(255, 255, 255, 0.04); }
.login-input:focus { border-color: #0066FF; background: rgba(255, 255, 255, 0.05); box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.15); }
.login-input-wrapper:focus-within .login-input-icon { color: #0066FF; }

/* Autofill override */
.login-input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0 30px #0f172a inset !important;
  -webkit-text-fill-color: #f8fafc !important;
}

/* Button */
.login-button {
  width: 100%;
  height: 3.25rem;
  margin-top: 0.5rem;
  background: linear-gradient(135deg, #0066FF 0%, #0052CC 100%);
  border: none;
  border-radius: 14px;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
}

.login-button::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 50%);
}

.login-button:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 10px 30px -5px rgba(0, 102, 255, 0.5);
}`,

        htmlStructure: `/* HTML Structure for Login Page */
<Box className="login-page">
    <div className="login-bg">
        <div className="login-bg-gradient" />
        <div className="login-bg-grid" />
        <div className="login-bg-orb login-bg-orb-1" />
        <div className="login-bg-orb login-bg-orb-2" />
        <div className="login-bg-orb login-bg-orb-3" />
    </div>

    <Box className="login-container">
        <div className="login-header">
            <div className="login-logo"><!-- SVG Icon --></div>
            <h1 className="login-title">App Name</h1>
            <p className="login-subtitle">Tagline here</p>
        </div>

        <Card variant="glass" className="login-card">
            <form className="login-form">
                <div className="login-field">
                    <label className="login-label">Username</label>
                    <div className="login-input-wrapper">
                        <span className="login-input-icon"><!-- Icon --></span>
                        <input className="login-input" type="text" />
                    </div>
                </div>
                <!-- More fields -->
                <button className="login-button">Sign In</button>
            </form>
        </Card>
    </Box>
</Box>`
    },

    commonPitfalls: {
        gridComponent: {
            issue: 'Grid responsive syntax',
            wrong: 'cols={[1, 2, 4]} or gap="lg"',
            correct: 'columns={{ base: 1, sm: 2, lg: 4 }} gap={6}',
            explanation: 'Grid uses "columns" prop (not "cols") with responsive object format, gap is a number (multiplied by 4 for pixels)'
        },

        colSpan: {
            issue: 'Column spanning in Grid',
            wrong: '<Card className="col-span-2">',
            correct: '<Col span={{ base: 1, lg: 2 }}><Card>...</Card></Col>',
            explanation: 'Use Col component with span prop for responsive spanning'
        },

        cardPadding: {
            issue: 'Card padding override',
            wrong: '<Card className="p-5">',
            correct: '<Card padding="none" className="p-5"> or <Card padding="md">',
            explanation: 'Card has default padding="md". To use custom className padding, set padding="none" first'
        },

        tailwindSourceMissing: {
            issue: 'Tailwind classes not applying',
            symptoms: ['p-4 shows padding: 0px', 'Input has light background instead of dark', 'Button missing gradient'],
            solution: 'Add explicit CSS for x-ui components in your index.css - the @source directive may not work for x-ui dist folder'
        },

        inputNotStyled: {
            issue: 'Input component has light/default browser styling',
            symptoms: ['Light blue background from autofill', 'Bright blue border', 'No dark theme styling'],
            solution: 'Add explicit .x-input, .x-input-outline, .x-input-* CSS rules with !important to override browser defaults'
        }
    },

    troubleshooting: {
        noStyles: {
            symptom: 'Components have no styling/padding',
            checks: [
                '1. Add explicit CSS for x-ui components (.x-input, .x-button, .x-card-glass)',
                '2. Check for * { padding: 0 } overriding utilities',
                '3. Ensure CSS variables are defined in :root',
                '4. Verify ThemeProvider wraps your app'
            ]
        },

        inputLightBackground: {
            symptom: 'Input has light background instead of dark transparent',
            solution: 'Add explicit .x-input-outline { background: rgba(255, 255, 255, 0.02) !important; border: 1px solid rgba(255, 255, 255, 0.1) !important; }'
        },

        autofillBreaksStyling: {
            symptom: 'Browser autofill shows light blue/yellow background',
            solution: 'Add autofill override CSS: .x-input:-webkit-autofill { -webkit-box-shadow: 0 0 0 30px #0f172a inset !important; }'
        },

        layoutBroken: {
            symptom: 'Layout not responsive',
            checks: [
                '1. Use columns={{ base: 1, sm: 2 }} format, NOT cols={[1, 2]}',
                '2. Use gap={4} (number), NOT gap="md" (string)',
                '3. Wrap grid items in <Col> for spanning',
                '4. Add explicit CSS for x-ui components'
            ]
        }
    },

    referenceFiles: {
        docsExample: 'packages/x-ui/apps/docs/app/globals.css',
        monitoringExample: 'e-monitoring/frontend/src/index.css',
        description: 'Reference e-monitoring/frontend/src/index.css for a complete working CSS setup with all explicit component styles'
    }
};

