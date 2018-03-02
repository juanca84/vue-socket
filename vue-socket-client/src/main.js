import Vue from 'vue';
import App from './App.vue';
import router from './router';

import Vuex from 'vuex';
Vue.use(Vuex);
import VueSocketio from 'vue-socket.io';

import counterModule from '@/modules/counter';

const store = new Vuex.Store({
  state: {
    io: {}
  },
  mutations: {
    setSocket: (state, socket) => {
      state.io = socket;
      console.log('socket conectado');
    }
  },
  modules: {
    counterModule
  }
})

Vue.use(VueSocketio, 'http://localhost:5000', store);

new Vue({
  el: '#app',
  store,
  router,
  beforeCreate () {
    store.commit('setSocket', this.$socket);
  },
  render: h => h(App)
})
