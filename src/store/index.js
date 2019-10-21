import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import getters from './getters'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {      //作用：更好的模块划分
      user
    },
    getters         //作用：state获取的值，并实时监听state值的变化(最新状态)
  })
export default store;