import { defineConfig } from 'cypress';
import customViteConfig from './vite.config.js';

export default defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig: customViteConfig,
    },
    specPattern: 'cypress/component/**/*.cy.{js,ts,jsx,tsx}',
    supportFile: './cypress/support/component.ts', // Ensure this matches the actual file path
  },

  e2e: {
    baseUrl: 'http://localhost:3001',
    supportFile: ,
false  },
});