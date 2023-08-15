import { defineConfig } from "umi";

export default defineConfig({
  proxy: {
    '/api/todos': {
      'target': 'https://jsonplaceholder.typicode.com',
      'changeOrigin': true,
      'pathRewrite': { '^/api': '' },
    },
  }
})