import { createApp } from 'vue';
import { Locale } from 'vant';
import enUS from 'vant/es/locale/lang/en-US';
import App from './App.vue';
import { setupPlugins } from './plugins';
import { setupStore } from './store';
import { setupRouter } from './router';

Locale.use('en-US', enUS);

const app = createApp(App);

// if (import.meta.env.PROD) {
//   import('vconsole').then((res) => {
//     new res.default()
//   })
// }

// 安装插件（vant-ui等）,若使用了 vite-plugin-components 插件，则需要手动引入组件
setupPlugins(app);
// 安装pina store
setupStore(app);
// 安装router
setupRouter(app);

app.mount('#app');
