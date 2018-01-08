import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import router from '../router'
// Vue.use(router)
Vue.use(Vuex)

const state = {
  msg: '',
  key:'',
  con: '',
  shopMsg:'',
  shopMsgCon:''
}

const mutations = {
  Axios(){
    axios.get('/api/child')
      .then(function (response) {
        state.msg = response.data
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  Find(){
    axios.get('/api/find?key=' +state.key)
      .then(function (res) {
        state.con = res.data
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  Shop(){
    axios.get('/api/shop?key='+state.shopMsg)
      .then(function (res) {
        state.shopMsgCon = res.data
      })
      .catch(function (error) {
        console.log(error);
      });
  }

}
//
// const actions = {
//   saveFrom (context){
//
//   }
// }

export default new Vuex.Store({
  state,
  mutations,
  // actions
})


