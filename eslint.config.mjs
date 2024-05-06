// eslint-disable-next-line import/no-extraneous-dependencies
import globals from 'globals';
// eslint-disable-next-line import/no-extraneous-dependencies
import pluginJs from '@eslint/js';
// eslint-disable-next-line import/no-extraneous-dependencies, import/extensions
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';

export default [
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    pluginReactConfig,
];
