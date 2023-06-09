import { createPinia } from 'pinia';
import { createApp } from 'vue';
import 'vuetify/styles';
import { createVuetify, type ThemeDefinition } from 'vuetify';
import { md3 } from 'vuetify/blueprints'
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import VueEasyLightbox from 'vue-easy-lightbox';

import App from './App.vue';
import router from './router';

const defaultTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: '#2c3e50',
    secondary: '#db4500',
    white: '#fdf7ef',
  },
};
const vuetify = createVuetify({
  components,
  directives,
  blueprint: md3,
  defaults: {
    VCard: {
      // @ts-ignore
      color: defaultTheme.colors.white, 
    }
  },
  theme: {
    defaultTheme: 'defaultTheme',
    themes: {
      defaultTheme,
    },
  },
});

createApp(App)
  .use(createPinia())
  .use(router)
  .use(vuetify)
  .use(VueEasyLightbox)
  .mount('#app');
