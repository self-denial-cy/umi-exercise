import { defineConfig } from 'umi';
import pluginsConfig from './plugins';
import proxyConfig from './proxy';
import routesConfig from './routes';

export default defineConfig({
  npmClient: 'pnpm',
  ...routesConfig,
  ...proxyConfig,
  ...pluginsConfig,
});
