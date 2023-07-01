import type { ThemeDefinition } from "vuetify";
import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import { md3 } from 'vuetify/blueprints'
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const colors = {
  primary: '#2c3e50',
  secondary: '#db4500',
  white: '#fdf7ef',
};
const defaultTheme: ThemeDefinition = {
  dark: false,
  colors,
}
const theme = {
  defaultTheme: 'defaultTheme',
  themes: { defaultTheme },
};

export const vuetify = createVuetify({
  components,
  directives,
  blueprint: md3,
  defaults: {
    VCard: {
      color: colors.white, 
    },
  },
  theme,
});