import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mouseFollow: false
  },
  mutations: {
    changeMouseFollow(state, status) {
      state.mouseFollow = status;
    }
  },
  actions: {}
});
