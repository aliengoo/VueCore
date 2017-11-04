import Vue from 'vue'
import Vuex from 'vuex'

import home from './routes/home/homeModule'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    home
  }
})

export default store
