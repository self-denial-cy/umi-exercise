import { defineMock } from 'umi';
import mockjs from 'mockjs';

export default defineMock({
  'GET /api/tags': mockjs.mock({
    'list|100': [{ name: '@city', 'value|1-100': 50, 'type|0-2': 1 }],
  }),
})
