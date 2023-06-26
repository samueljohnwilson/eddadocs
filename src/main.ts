import './assets/main.css';

import { createPinia } from 'pinia';
import { createApp } from 'vue';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import VueEasyLightbox from 'vue-easy-lightbox';

import App from './App.vue';
import router from './router';

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App)
  .use(createPinia())
  .use(router)
  .use(vuetify)
  .use(VueEasyLightbox)
  .mount('#app');
