// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui'
import VueI18n from 'vue-i18n'
import './assets/styles/reset.css'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueI18n)

const messages = {
  zh: require('./i18n/langs/zh'),
  en: require('./i18n/langs/en')
}

const i18n = new VueI18n({
  locale: localStorage.getItem('locale') || 'zh',
  messages
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  components: { App },
  template: '<App/>'
})
