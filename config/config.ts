import { defineConfig } from 'umi';
import pluginsConfig from './plugins';
import proxyConfig from './proxy';
import routesConfig from './routes';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/' : '/', // 项目部署根目录
  hash: process.env.NODE_ENV === 'production',
  chainWebpack(memo, { env, webpack }) {
    // 基于 webpack-chain 扩展 Umi 内置的 webpack 配置
  },
  history: {
    type: 'hash',
  },
  icons: {
    autoInstall: {},
  },
  targets: {
    chrome: 80,
    ie: 11,
  },
  title: 'UmiJS',
  jsMinifier: 'terser',
  npmClient: 'pnpm',
  ...routesConfig,
  ...proxyConfig,
  ...pluginsConfig,
});
