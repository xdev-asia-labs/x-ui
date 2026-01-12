#!/usr/bin/env node
/**
 * Script to auto-generate MCP component list from React package exports
 * Run during build: node scripts/generate-component-list.js
 */

const fs = require('fs');
const path = require('path');

const REACT_INDEX = path.join(__dirname, '../../react/src/index.ts');
const OUTPUT_FILE = path.join(__dirname, '../src/generated-components.ts');

// Component categories mapping
const categoryMap = {
    // Core
    ThemeProvider: 'core',

    // Layout
    Box: 'layout',
    Stack: 'layout', HStack: 'layout', VStack: 'layout',
    Divider: 'layout',
    Grid: 'layout', Col: 'layout', Row: 'layout',

    // Data Display  
    Card: 'data-display',
    Avatar: 'data-display',
    Badge: 'data-display',
    Tag: 'data-display',
    Table: 'data-display',
    DataGrid: 'data-display',
    TreeView: 'data-display',
    Carousel: 'data-display',

    // Forms / Input
    Button: 'button',
    IconButton: 'button',
    Input: 'input',
    TextArea: 'input',
    Select: 'input',
    Switch: 'input',
    Checkbox: 'input',
    Radio: 'input', RadioGroup: 'input',
    DatePicker: 'input',
    TimePicker: 'input',
    Calendar: 'input',
    ColorPicker: 'input',
    FileUpload: 'input',
    Slider: 'input',
    Autocomplete: 'input',

    // Navigation
    Tabs: 'navigation',
    Pagination: 'navigation',
    Stepper: 'navigation',

    // Feedback
    Spinner: 'feedback',
    Progress: 'feedback',
    Skeleton: 'feedback',
    Toast: 'feedback', ToastProvider: 'feedback',
    Tooltip: 'feedback',

    // Overlay
    Modal: 'overlay',
    Drawer: 'overlay',
    Dropdown: 'overlay',
    Popover: 'overlay',
    Accordion: 'overlay',
    AlertDialog: 'overlay',
    BottomSheet: 'overlay',
};

function extractComponents(content) {
    const exportRegex = /export\s*{\s*([^}]+)\s*}\s*from/g;
    const components = new Set();

    let match;
    while ((match = exportRegex.exec(content)) !== null) {
        const exports = match[1].split(',').map(e => e.trim().split(' ')[0]);
        exports.forEach(exp => {
            // Filter only PascalCase component names (not types, hooks)
            if (/^[A-Z][a-zA-Z]+$/.test(exp) &&
                !exp.startsWith('use') &&
                !exp.endsWith('Props') &&
                !exp.endsWith('Context')) {
                components.add(exp);
            }
        });
    }

    return Array.from(components);
}

function generateOutput(components) {
    const list = components.map(name => ({
        name,
        platforms: ['react'],
        category: categoryMap[name] || 'other'
    }));

    return `/**
 * Auto-generated component list for MCP Server
 * Generated at: ${new Date().toISOString()}
 * DO NOT EDIT MANUALLY - Run: pnpm generate-components
 */

export const generatedComponentList = ${JSON.stringify(list, null, 2)};

export const componentCount = ${list.length};
`;
}

// Main
try {
    const content = fs.readFileSync(REACT_INDEX, 'utf-8');
    const components = extractComponents(content);
    const output = generateOutput(components);

    fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
    fs.writeFileSync(OUTPUT_FILE, output);

    console.log(`✅ Generated ${components.length} components to ${OUTPUT_FILE}`);
    console.log('Components:', components.join(', '));
} catch (error) {
    console.error('❌ Error generating component list:', error.message);
    process.exit(1);
}
