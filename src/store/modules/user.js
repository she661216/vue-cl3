
const user = {
  state: {
    userInfo: []
  },
  actions: {       
     //可以执行异步操作，被调用方式this.$store.dispatch('login')
     login(context) {  //context与store 实例具有相同方法和属性，必须传
     //todo 调用登陆接口
     //todo 成功之后：更新state状态 context.commit('SET_TOKEN', data.access_token);
  },
  },
  mutations: {      
     //作用：自定义改变state的值，state参数必传，第二个参数可选。被调用方式commit('SET_TOKEN', data.access_token)
    SET_TOKEN: (state, token) => {
      //todo 保存token在本地存储
      //todo 同时把token保存在userInfo中
    }
  }
}

export default user
