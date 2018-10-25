// Import Vue
import Vue from 'vue';

// Import F7
import Framework7 from 'framework7/framework7.esm.bundle.js';

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js';

// import Routes from './routes.js'

// Import F7 Styles
import Framework7Styles from 'framework7/css/framework7.css';
// import RTLStyles from 'framework7/css/framework7.rtl.ios.min.css';

// Import Icons and App Custom Styles
import IconsStyles from './css/icons.css';
import AppStyles from './css/app.css';

// import Router from 'vue-router';


// Import App Component
import App from './app';
import i18n from './tools/i18ns'

import $ from 'jquery'

// Init F7 Vue Plugin
Framework7.use(Framework7Vue)
// Vue.use(Framework7Vue)
// Vue.use(Router)




// Init App
new Vue({
  el: '#app',
  i18n, 
  template: '<app/>',

  // Register App Component
  components: {
    app: App
  }
});
// var myApp = new Framework7({
//     // Default title for modals
//     modalTitle: 'My App',
 
//     // If it is webapp, we can enable hash navigation:
//     pushState: true,
 
//     // Hide and show indicator during ajax requests
//     onAjaxStart: function (xhr) {
//         myApp.showIndicator();
//     },
//     onAjaxComplete: function (xhr) {
//         myApp.hideIndicator();
//     },
//     theme:'ios'
// });
// console.log(myApp)
