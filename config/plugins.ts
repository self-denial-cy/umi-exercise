import { defineConfig } from 'umi';

export default defineConfig({
  plugins: [require.resolve('@umijs/plugins/dist/unocss')],
  unocss: {
    watch: ['src/**/*.tsx', 'src/**/*.jsx'],
  },
});
