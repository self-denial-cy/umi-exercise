import { defineConfig } from "umi";
import routesConfig from "./routes";
import proxyConfig from "./proxy";
import pluginsConfig from "./plugins";

export default defineConfig({
  npmClient: 'pnpm',
  ...routesConfig,
  ...proxyConfig,
  ...pluginsConfig,
});
