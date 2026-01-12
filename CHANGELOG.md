# Changelog

All notable changes to X-UI will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- 🎨 **Social Preview & Banner**: Added stunning 3D glass design with aurora nebula background
- 📦 **V0.1.x Components**: Toast, Modal, Drawer, Stepper, Slider, FileUpload, ColorPicker
- 📦 **V0.2.x Components**: Calendar, TimePicker, DataGrid, Autocomplete, Carousel
- 🎯 **X-Prefix Classes**: All components now use `x-*` CSS class prefix for better specificity
- 🌐 **Documentation Site**: Complete docs with internationalization support
- 🔧 **MCP Server**: AI-assisted component development via Model Context Protocol
- 📐 **Grid System**: Responsive grid with breakpoint utilities

### Changed
- 🏷️ **Package Scope**: All packages renamed to `@xdev-asia/*` scope
- 📚 **Storybook**: Added stories for all components

### Fixed
- 🐛 **Grid Build Error**: Fixed `ResponsiveValue` export conflict
- 🐛 **CI Workflow**: Updated test assertions and enabled GitHub Pages deployment

---

## Package Changelogs

For detailed changes per package, see:
- [@xdev-asia/x-ui-react](./packages/react/CHANGELOG.md)
- [@xdev-asia/x-ui-mcp-server](./packages/mcp-server/CHANGELOG.md)
