/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Composables
import "@fortawesome/fontawesome-free/css/all.css";
import { createVuetify } from "vuetify";
import { VStepperVertical } from 'vuetify/labs/VStepperVertical'
import { aliases, fa } from "vuetify/iconsets/fa";
// Styles
import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: "dark",
  },
  icons: {
    defaultSet: "fa",
    aliases,
    sets: {
      fa,
    },
  },
  components: {
    VStepperVertical,
  },
});
