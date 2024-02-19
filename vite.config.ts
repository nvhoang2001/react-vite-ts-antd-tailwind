import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import { EsLinter, linterPlugin } from 'vite-plugin-linter';
import svgrPlugin from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig((configEnv) => {
  const env = loadEnv(configEnv.mode, process.cwd(), '');

  return {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src'),
      },
    },

    plugins: [
      react(),
      linterPlugin({
        include: ['./src/**/*.{ts,tsx}'],
        linters: [new EsLinter({ configEnv })],
      }),
      svgrPlugin({
        svgrOptions: {},
      }),
    ],
    server: {
      port: Number(env.DEV_PORT) || 5000,
      cors: false,
    },
    css: {
      preprocessorOptions: {},
    },
  };
});
