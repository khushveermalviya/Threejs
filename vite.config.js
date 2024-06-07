import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-refresh';

export default defineConfig({
    plugins: [react()],
    server: {
        watch: {
            usePolling: true, // Useful if you're working in a VM or a Docker container
        },
        hmr: {
            overlay: true,
        },
    },
});
