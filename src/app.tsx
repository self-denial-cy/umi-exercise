import { defineApp } from 'umi';

export default defineApp({
  // 类似 Vue Router 中的 afterEach 钩子，可以在这里设置标题、埋点统计
  onRouteChange({ routes, clientRoutes, location, action, isFirst }) {
    console.log(routes, clientRoutes, location, action, isFirst);
  },
  // 动态更新路由表，配合 render 可以请求接口根据响应动态更新路由
  patchClientRoutes({ routes }) {
    console.log(routes);
  },
  // 覆写 render，可以在渲染之前做登录态校验
  render(oldRender) {
    oldRender();
  },
  rootContainer(lastRootContainer, args) {
    console.log(lastRootContainer, args);
    return <>{lastRootContainer}</>;
  },
});
