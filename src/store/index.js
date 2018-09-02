import Vue from 'vue'
import Vuex from 'vuex'
import modImg from './modImg/modImg.js'
import mod2 from './mod2/mod2.js'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    modImg,
    mod2
  }
})
