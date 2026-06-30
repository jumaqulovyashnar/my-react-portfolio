import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react(), splitVendorChunkPlugin()],
    build: {
        cssCodeSplit: true,
        minify: 'esbuild',
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom', 'framer-motion', 'i18next', 'react-i18next'],
                },
            },
        },
    },
});
