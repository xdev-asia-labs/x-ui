/**
 * X-UI Component Usage Examples
 * Comprehensive usage examples for AI assistants
 */

export const componentUsageExamples: Record<string, {
    description: string;
    props: Record<string, { type: string; default?: string; description: string }>;
    examples: { title: string; code: string }[];
    bestPractices: string[];
    accessibility: string[];
    relatedComponents: string[];
}> = {
    Button: {
        description: 'Interactive button component with multiple variants, sizes, and states. Supports icons, loading states, and full styling customization.',
        props: {
            variant: { type: "'solid' | 'outline' | 'ghost' | 'glass' | 'link'", default: "'solid'", description: 'Visual style variant' },
            colorScheme: { type: "'primary' | 'secondary' | 'success' | 'warning' | 'danger'", default: "'primary'", description: 'Color theme' },
            size: { type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'", default: "'md'", description: 'Button size' },
            isLoading: { type: 'boolean', default: 'false', description: 'Show loading spinner' },
            isDisabled: { type: 'boolean', default: 'false', description: 'Disable interaction' },
            leftIcon: { type: 'ReactNode', description: 'Icon before text' },
            rightIcon: { type: 'ReactNode', description: 'Icon after text' },
            fullWidth: { type: 'boolean', default: 'false', description: 'Take full container width' },
        },
        examples: [
            {
                title: 'Basic Variants',
                code: `<Button variant="solid">Solid</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="glass">Glass</Button>`
            },
            {
                title: 'Color Schemes',
                code: `<Button colorScheme="primary">Primary</Button>
<Button colorScheme="success">Success</Button>
<Button colorScheme="danger">Danger</Button>`
            },
            {
                title: 'With Icons',
                code: `import { PlusIcon, ArrowRightIcon } from '@xdev-asia/x-ui-react';

<Button leftIcon={<PlusIcon />}>Add Item</Button>
<Button rightIcon={<ArrowRightIcon />}>Continue</Button>`
            },
            {
                title: 'Loading State',
                code: `<Button isLoading>Submitting...</Button>
<Button isLoading loadingText="Please wait...">Submit</Button>`
            },
            {
                title: 'In a Form',
                code: `<form onSubmit={handleSubmit}>
  <Input placeholder="Email" />
  <Button type="submit" colorScheme="primary" fullWidth>
    Subscribe
  </Button>
</form>`
            }
        ],
        bestPractices: [
            'Use primary color for main CTA, secondary for less important actions',
            'Always provide loading state for async actions',
            'Use icons to enhance recognition, not replace text',
            'Limit to one primary button per section',
            'Use glass variant for overlays on images/gradients'
        ],
        accessibility: [
            'Includes focus ring with visible outline',
            'Supports keyboard navigation (Enter/Space)',
            'aria-disabled used when isDisabled',
            'aria-busy used when isLoading',
            'Minimum touch target of 44x44px'
        ],
        relatedComponents: ['IconButton', 'ButtonGroup', 'Link']
    },

    Input: {
        description: 'Text input field with label, helper text, validation states, and optional icons.',
        props: {
            variant: { type: "'outline' | 'filled' | 'glass'", default: "'outline'", description: 'Visual style' },
            size: { type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Input size' },
            label: { type: 'string', description: 'Label text above input' },
            placeholder: { type: 'string', description: 'Placeholder text' },
            helperText: { type: 'string', description: 'Helper text below input' },
            errorMessage: { type: 'string', description: 'Error message (shows when isInvalid)' },
            isInvalid: { type: 'boolean', default: 'false', description: 'Show error state' },
            isDisabled: { type: 'boolean', default: 'false', description: 'Disable input' },
            leftElement: { type: 'ReactNode', description: 'Element on left side (icon, etc)' },
            rightElement: { type: 'ReactNode', description: 'Element on right side' },
        },
        examples: [
            {
                title: 'Basic Usage',
                code: `<Input label="Email" placeholder="you@example.com" />`
            },
            {
                title: 'With Validation',
                code: `<Input 
  label="Password" 
  type="password"
  isInvalid={!isValid}
  errorMessage="Password must be at least 8 characters"
/>`
            },
            {
                title: 'With Icons',
                code: `import { SearchIcon } from '@xdev-asia/x-ui-react';

<Input 
  placeholder="Search..."
  leftElement={<SearchIcon />}
/>`
            },
            {
                title: 'Glass Variant (for hero sections)',
                code: `<Input 
  variant="glass" 
  placeholder="Enter your email"
  size="lg"
/>`
            }
        ],
        bestPractices: [
            'Always include a label for accessibility',
            'Use placeholder for format hints, not labels',
            'Show validation errors inline near the field',
            'Use glass variant on dark/gradient backgrounds',
            'Group related inputs with Stack component'
        ],
        accessibility: [
            'Label is associated via htmlFor',
            'aria-invalid set when isInvalid',
            'aria-describedby links to error/helper text',
            'Proper focus management'
        ],
        relatedComponents: ['TextArea', 'Select', 'Form', 'InputGroup']
    },

    Card: {
        description: 'Container component for grouping related content with optional header, body, and footer sections.',
        props: {
            variant: { type: "'elevated' | 'outline' | 'filled' | 'glass'", default: "'elevated'", description: 'Visual style' },
            padding: { type: "'none' | 'sm' | 'md' | 'lg'", default: "'md'", description: 'Internal padding' },
            isHoverable: { type: 'boolean', default: 'false', description: 'Add hover effect' },
            isClickable: { type: 'boolean', default: 'false', description: 'Show as clickable' },
        },
        examples: [
            {
                title: 'Basic Card',
                code: `<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Optional description</CardDescription>
  </CardHeader>
  <CardContent>
    Your content here
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>`
            },
            {
                title: 'Glass Card (Glassmorphism)',
                code: `<Card variant="glass">
  <CardContent>
    <h3>Premium Feature</h3>
    <p>Beautiful translucent effect</p>
  </CardContent>
</Card>`
            },
            {
                title: 'Clickable Card',
                code: `<Card isClickable onClick={() => router.push('/details')}>
  <CardContent>
    <Avatar src={user.avatar} />
    <h3>{user.name}</h3>
  </CardContent>
</Card>`
            }
        ],
        bestPractices: [
            'Use glass variant on colorful/image backgrounds',
            'Keep card content focused on single topic',
            'Use consistent card sizes in grids',
            'Add hover states for interactive cards',
            'Limit actions in footer to 2-3 buttons'
        ],
        accessibility: [
            'Use semantic heading levels in CardTitle',
            'Add role="button" for clickable cards',
            'Ensure sufficient color contrast',
            'Card sections have proper ARIA landmarks'
        ],
        relatedComponents: ['CardHeader', 'CardContent', 'CardFooter', 'Avatar', 'Badge']
    },

    Modal: {
        description: 'Dialog overlay for focused interactions. Includes header, body, footer sections with backdrop.',
        props: {
            isOpen: { type: 'boolean', description: 'Control visibility' },
            onClose: { type: '() => void', description: 'Called when modal should close' },
            size: { type: "'sm' | 'md' | 'lg' | 'xl' | 'full'", default: "'md'", description: 'Modal width' },
            closeOnOverlayClick: { type: 'boolean', default: 'true', description: 'Close when clicking backdrop' },
            closeOnEsc: { type: 'boolean', default: 'true', description: 'Close on Escape key' },
        },
        examples: [
            {
                title: 'Confirmation Modal',
                code: `const [isOpen, setIsOpen] = useState(false);

<Button onClick={() => setIsOpen(true)}>Delete Item</Button>

<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
  <ModalHeader>Confirm Delete</ModalHeader>
  <ModalBody>
    Are you sure you want to delete this item?
  </ModalBody>
  <ModalFooter>
    <Button variant="ghost" onClick={() => setIsOpen(false)}>Cancel</Button>
    <Button colorScheme="danger" onClick={handleDelete}>Delete</Button>
  </ModalFooter>
</Modal>`
            },
            {
                title: 'Form Modal',
                code: `<Modal isOpen={isOpen} onClose={onClose} size="lg">
  <ModalHeader>Edit Profile</ModalHeader>
  <ModalBody>
    <Stack spacing="md">
      <Input label="Name" value={name} onChange={setName} />
      <Input label="Email" value={email} onChange={setEmail} />
      <TextArea label="Bio" value={bio} onChange={setBio} />
    </Stack>
  </ModalBody>
  <ModalFooter>
    <Button variant="outline" onClick={onClose}>Cancel</Button>
    <Button onClick={handleSave}>Save Changes</Button>
  </ModalFooter>
</Modal>`
            }
        ],
        bestPractices: [
            'Keep modals focused on a single task',
            'Always provide a clear way to close',
            'Use size appropriate for content',
            'Avoid nested modals',
            'Consider Drawer for complex multi-step flows'
        ],
        accessibility: [
            'Focus trapped inside modal when open',
            'Focus returns to trigger on close',
            'Escape key closes modal',
            'aria-modal and role="dialog" set',
            'Screen reader announces modal title'
        ],
        relatedComponents: ['AlertDialog', 'Drawer', 'BottomSheet', 'Popover']
    },

    DataGrid: {
        description: 'Advanced table component with sorting, filtering, pagination, and selection.',
        props: {
            data: { type: 'T[]', description: 'Array of data objects' },
            columns: { type: 'DataGridColumn[]', description: 'Column definitions' },
            sortable: { type: 'boolean', default: 'true', description: 'Enable column sorting' },
            filterable: { type: 'boolean', default: 'false', description: 'Enable column filtering' },
            selectable: { type: 'boolean', default: 'false', description: 'Enable row selection' },
            pagination: { type: 'boolean', default: 'true', description: 'Enable pagination' },
            pageSize: { type: 'number', default: '10', description: 'Items per page' },
        },
        examples: [
            {
                title: 'Basic DataGrid',
                code: `const columns = [
  { key: 'name', header: 'Name', sortable: true },
  { key: 'email', header: 'Email' },
  { key: 'role', header: 'Role', 
    render: (value) => <Badge>{value}</Badge> 
  },
  { key: 'actions', header: '', 
    render: (_, row) => (
      <Button size="sm" onClick={() => edit(row)}>Edit</Button>
    )
  },
];

<DataGrid 
  data={users} 
  columns={columns}
  sortable
  pagination
  pageSize={20}
/>`
            }
        ],
        bestPractices: [
            'Define column widths for consistent layout',
            'Use render prop for custom cell content',
            'Implement server-side pagination for large datasets',
            'Provide loading state during data fetch',
            'Use sticky headers for long tables'
        ],
        accessibility: [
            'Proper table semantics (thead, tbody, th, td)',
            'Sortable columns announced to screen readers',
            'Keyboard navigation between cells',
            'Focus management for interactive cells'
        ],
        relatedComponents: ['Table', 'Pagination', 'Badge', 'Checkbox']
    },

    TreeView: {
        description: 'Hierarchical tree structure with expand/collapse, selection, and drag-drop support.',
        props: {
            data: { type: 'TreeNode[]', description: 'Hierarchical data structure' },
            selectable: { type: 'boolean', default: 'false', description: 'Enable node selection' },
            multiSelect: { type: 'boolean', default: 'false', description: 'Allow multiple selections' },
            defaultExpanded: { type: 'string[]', description: 'Initially expanded node IDs' },
            onSelect: { type: '(nodeId: string) => void', description: 'Selection callback' },
        },
        examples: [
            {
                title: 'File Explorer',
                code: `const fileTree = [
  {
    id: 'src',
    label: 'src',
    icon: <FolderIcon />,
    children: [
      { id: 'index', label: 'index.ts', icon: <FileIcon /> },
      { id: 'app', label: 'App.tsx', icon: <ReactIcon /> },
    ]
  }
];

<TreeView 
  data={fileTree}
  selectable
  onSelect={(id) => openFile(id)}
/>`
            }
        ],
        bestPractices: [
            'Use icons to indicate node types',
            'Limit nesting depth for usability',
            'Provide keyboard shortcuts (arrows, enter)',
            'Consider virtualization for large trees'
        ],
        accessibility: [
            'Uses role="tree" and role="treeitem"',
            'aria-expanded for collapsible nodes',
            'Arrow key navigation',
            'Focus visible on selected node'
        ],
        relatedComponents: ['Accordion', 'Menu', 'Sidebar']
    }
};

export const componentCategories = {
    layout: {
        description: 'Components for structuring page layout',
        components: ['Box', 'Stack', 'HStack', 'VStack', 'Grid', 'Col', 'Divider']
    },
    forms: {
        description: 'Form input components',
        components: ['Button', 'Input', 'TextArea', 'Select', 'Checkbox', 'Radio', 'Switch', 'Slider', 'DatePicker', 'TimePicker', 'ColorPicker', 'FileUpload', 'Autocomplete']
    },
    dataDisplay: {
        description: 'Components for displaying data',
        components: ['Card', 'Avatar', 'Badge', 'Tag', 'Table', 'DataGrid', 'TreeView', 'Carousel']
    },
    feedback: {
        description: 'User feedback components',
        components: ['Spinner', 'Progress', 'Skeleton', 'Toast', 'Tooltip', 'AlertDialog']
    },
    navigation: {
        description: 'Navigation components',
        components: ['Tabs', 'Pagination', 'Stepper', 'Drawer', 'BottomSheet']
    },
    overlay: {
        description: 'Overlay and popover components',
        components: ['Modal', 'Drawer', 'Dropdown', 'Popover', 'Accordion', 'Tooltip']
    }
};
