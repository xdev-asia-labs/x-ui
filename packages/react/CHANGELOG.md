# @xdev-asia/x-ui-react

## 0.2.0

### Minor Changes

- d5fe8d0: ## New Components (v0.1.x & v0.2.x)

  ### React Components

  - **Toast/Snackbar**: Notification system with auto-dismiss and variants
  - **Modal/Dialog**: Accessible modal dialogs with backdrop
  - **Drawer/BottomSheet**: Slide-out panels for navigation and actions
  - **Stepper**: Multi-step form indicator
  - **Slider/RangeSlider**: Value selection with min/max range
  - **FileUpload**: Drag-and-drop file upload with preview
  - **ColorPicker**: Color selection with presets and custom input
  - **Calendar**: Date selection with month/year navigation
  - **TimePicker**: Time selection with hour/minute inputs
  - **DataGrid**: Data table with sorting, filtering, pagination
  - **Autocomplete**: Search with suggestions and keyboard navigation
  - **Carousel**: Image/content slider with navigation controls

  ### Improvements

  - Added `x-*` CSS class prefix to all components
  - Enhanced Storybook stories with controls
  - Updated MCP templates with new components

### Patch Changes

- Updated dependencies [d5fe8d0]
  - @xdev-asia/x-ui-core@0.0.3

## 0.1.0

### Minor Changes

- 2fc5c28: feat: Add x-\* prefix CSS classes to all components

  Added wrapper classes with `x-*` prefix to all X-UI components for easy identification and avoiding conflicts with other CSS frameworks.

  Components updated:

  - Button, Card, Input, Avatar, Badge, Spinner
  - Box, Stack, Divider
  - Checkbox, Radio, Switch, Select, TextArea
  - Modal, Tabs, Table, Tag

  Also added VSCode MCP extension support with `.vscode/mcp.json` configuration.
