import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import App from './App.vue';
import AppLoading from './components/common/AppLoading.vue';
import { setupDirectives } from './directives';
import { setupRouter } from './router';
import { setupAssets } from './plugins';
import { setupStore } from './store';
import 'element-plus/dist/index.css';
async function setupApp() {
  // import assets: js、css
  setupAssets();

  // app loading
  const appLoading = createApp(AppLoading);

  appLoading.mount('#appLoading');

  const app = createApp(App);
  app.use(ElementPlus);
  // store plugin: pinia
  setupStore(app);

  // vue custom directives
  setupDirectives(app);

  // vue router
  await setupRouter(app);

  // mount app
  app.mount('#app');
}

setupApp();
