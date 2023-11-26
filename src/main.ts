import 'vuetify/styles';
import 'vue-easy-lightbox/dist/external-css/vue-easy-lightbox.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import VueEasyLightbox from 'vue-easy-lightbox';
import VueScrollTo from 'vue-scrollto';
import { createVuetify, type ThemeDefinition } from 'vuetify';
import { md3 } from 'vuetify/blueprints'
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import App from './App.vue';
import router from './router';

const colors = {
  primary: '#2c3e50',
  secondary: '#db4500',
  white: '#fdf7ef',
};
const defaultTheme: ThemeDefinition = {
  dark: false,
  colors,
};
const vuetify = createVuetify({
  components,
  directives,
  blueprint: md3,
  defaults: {
    VCard: {
      color: colors.white,
      rounded: 0,
    }
  },
  theme: {
    defaultTheme: 'defaultTheme',
    themes: {
      defaultTheme,
    },
  },
});

library.add(faArrowUp);

createApp(App)
  .use(createPinia())
  .use(router)
  .use(vuetify)
  .use(VueEasyLightbox)
  .use(VueScrollTo)
  .component('FontAwesomeIcon', FontAwesomeIcon)
  .mount('#app');
