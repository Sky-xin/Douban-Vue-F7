// Import Vue
import Vue from 'vue'

// Import F7
import Framework7 from 'framework7'

import Framework7Vue from 'framework7-vue'

import VueResource from 'vue-resource'
// Import F7 iOS Theme Styles
import Framework7Theme from 'framework7/dist/css/framework7.ios.min.css'
import Framework7ThemeColors from 'framework7/dist/css/framework7.ios.colors.min.css'
/* OR for Material Theme:
import Framework7Theme from 'framework7/dist/css/framework7.material.min.css'
import Framework7ThemeColors from 'framework7/dist/css/framework7.material.colors.min.css'
*/


// Import App Custom Styles
import AppStyles from './css/app.css'

import routes from './routes';

// Import Routes
// import VueRoutes from 'vue-router';
//
// const Routes = new VueRoutes({
//     mode:'history',
//     routes
// });

import App from './app'

// Init F7 Vue Plugin
Vue.use(Framework7Vue)
Vue.use(VueResource)
// Init App
new Vue({
  // Routes,
  el: '#app',
  template: '<app/>',
  // Init Framework7 by passing parameters here
  framework7: {
    root: '#app',
    /* Uncomment to enable Material theme: */
    material: true,
    routes: routes,
  },
  // Register App Component
  components: {
    app: App
  }
});
