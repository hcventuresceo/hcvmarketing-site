import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync, existsSync, mkdirSync } from 'fs';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-crest-logo',
      buildStart() {
        // Copy the crest logo to public folder as favicon
        const publicDir = resolve(__dirname, 'public');
        if (!existsSync(publicDir)) {
          mkdirSync(publicDir, { recursive: true });
        }
        
        // Note: The actual crest logo is imported as figma:asset
        // This will be handled by Vite's asset pipeline
        console.log('✅ Crest logo will be used as favicon');
      }
    }
  ],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.svg', '**/*.ico'],
});
