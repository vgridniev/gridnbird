import Vue from 'vue'
import App from './App.vue'

// import store from './store'
// import axios from './axios'
// import VueAxios from 'vue-axios'
// import VueCookies from 'vue-cookies'

Vue.use(VueAxios, axios)
Vue.use(VueCookies)
Vue.use(store)

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')