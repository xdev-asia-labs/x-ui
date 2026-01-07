const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, '../..');

const config = getDefaultConfig(projectRoot);

// Watch packages folder
config.watchFolders = [workspaceRoot];

// Allow resolving from workspace root
config.resolver.nodeModulesPaths = [
    path.resolve(projectRoot, 'node_modules'),
    path.resolve(workspaceRoot, 'node_modules'),
];

// Resolve workspace packages
config.resolver.extraNodeModules = {
    '@xdev-asia/x-ui-native': path.resolve(workspaceRoot, 'packages/native'),
    '@xdev-asia/x-ui-core': path.resolve(workspaceRoot, 'packages/core'),
};

module.exports = config;
