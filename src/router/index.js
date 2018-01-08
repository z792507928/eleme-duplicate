import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/page/Home.vue'
import find from '../components/page/Find.vue'
import order from '../components/page/Order.vue'
import mine from '../components/page/Main.vue'
import search from '../components/page/Search.vue'
import shoplist from '../components/page/Shoplist.vue'
import shop from '../components/page/Shop.vue'
import login from '../components/page/login.vue'
import loginmessage from '../components/page/loginmessage.vue'
import loginpassword from '../components/page/loginpassword.vue'
import PageTransition from '../components/app.vue'
Vue.use(Router)

const Loglist = {
  template: `
    <div>
        <router-view></router-view>
    </div>
  `
}

const router = new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/', name: 'PageTransition', component: PageTransition,
      children: [
        {
          path: '', component: home
        },
        {
          path: '/find', component: find
        },
        {
          path: '/order', component: order
        },
        {
          path: '/mine', component: mine
        },
        {
          path: '/search', component: search
        },
        {
          path:'/shoplist',component: shoplist
        },
        {
          path:'/shop',component: shop
        },
        {
          path:'/login',component: Loglist,
            children:[
              {path: '/',component: login},
              {path: '/message',component: loginmessage},
              {path: '/password',component: loginpassword}
            ]
        },
      ]
    },
  ]
})

new Vue({
  router,
  data(){
    return {
      aaa: 'show',
      colorf: 'none'
    }
  },
  template:`
      <div id="container">
      <router-view class="top"></router-view>
    <ul id="aaa" class="container-footer-list" v-if="">
        <li class="active-color">
            <router-link to="/">
                <svg class="index-footerTabIcon_1EbB8wS">
                    <svg v-if="this.$route.path != '/'" viewBox="-2.5 -2.5 45 45" id="index-regular.b245d60" width="100%"
                         height="100%">
                        <g fill="none" fill-rule="evenodd" stroke="#666" stroke-width="2">
                            <path
                                    d="M31.426 23.095l2.678 5.742 2.943-1.372a3.173 3.173 0 0 0 1.537-4.212l-1.339-2.871-5.819 2.713z"></path>
                            <path
                                    d="M29.074 31.161c-1.224-.49-2.404-.32-3.49.185-6.383 2.977-13.938.286-16.875-6.01-2.936-6.297-.14-13.815 6.243-16.792 5.211-2.43 11.203-1.083 14.825 2.919l-12.263 5.718c-1.596.745-2.295 2.624-1.561 4.198.734 1.574 2.625 2.246 4.22 1.503l8.422-3.928 9.953-4.641a18.78 18.78 0 0 0-.941-2.453C33.202 2.416 21.869-1.62 12.294 2.844 2.718 7.309-1.474 18.586 2.93 28.03c4.404 9.445 15.737 13.482 25.313 9.017 1.069-.499 2.067-.879 3.438-1.744 0 0-1.382-3.651-2.607-4.142z"></path>
                        </g>
                    </svg>
                    <svg v-if="this.$route.path === '/'" viewBox="-2.5 -2.5 45 45" id="index.18edf5a" width="100%"
                         height="100%">
                        <g fill="#0089dc" fill-rule="evenodd">
                            <g transform="translate(1 1)">
                                <g fill="url(#index.18edf5a_c)">
                                    <path id="index.18edf5a_a"
                                          d="M30.426 22.095l2.678 5.742 2.943-1.372a3.173 3.173 0 0 0 1.537-4.212l-1.339-2.871-5.819 2.713z"></path>
                                </g>
                                <g stroke="url(#index.18edf5a_d)" stroke-width="2" mask="url(#index.18edf5a_e)">
                                    <path id="index.18edf5a_a"
                                          d="M30.426 22.095l2.678 5.742 2.943-1.372a3.173 3.173 0 0 0 1.537-4.212l-1.339-2.871-5.819 2.713z"></path>
                                </g>
                            </g>
                            <g transform="translate(1 1)">
                                <g fill="url(#index.18edf5a_c)">
                                    <path id="index.18edf5a_b"
                                          d="M28.074 30.161c-1.224-.49-2.404-.32-3.49.185-6.383 2.977-13.938.286-16.875-6.01-2.936-6.297-.14-13.815 6.243-16.792 5.211-2.43 11.203-1.083 14.825 2.919l-12.263 5.718c-1.596.745-2.295 2.624-1.561 4.198.734 1.574 2.625 2.246 4.22 1.503l8.422-3.928 9.953-4.641a18.78 18.78 0 0 0-.941-2.453C32.202 1.416 20.869-2.62 11.294 1.844 1.718 6.309-2.474 17.586 1.93 27.03c4.404 9.445 15.737 13.482 25.313 9.017 1.069-.499 2.067-.879 3.438-1.744 0 0-1.382-3.651-2.607-4.142z"></path>
                                </g>
                                <g stroke="url(#index.18edf5a_d)" stroke-width="1.4" mask="url(#index.18edf5a_f)">
                                    <path id="index.18edf5a_b"
                                          d="M28.074 30.161c-1.224-.49-2.404-.32-3.49.185-6.383 2.977-13.938.286-16.875-6.01-2.936-6.297-.14-13.815 6.243-16.792 5.211-2.43 11.203-1.083 14.825 2.919l-12.263 5.718c-1.596.745-2.295 2.624-1.561 4.198.734 1.574 2.625 2.246 4.22 1.503l8.422-3.928 9.953-4.641a18.78 18.78 0 0 0-.941-2.453C32.202 1.416 20.869-2.62 11.294 1.844 1.718 6.309-2.474 17.586 1.93 27.03c4.404 9.445 15.737 13.482 25.313 9.017 1.069-.499 2.067-.879 3.438-1.744 0 0-1.382-3.651-2.607-4.142z"></path>
                                </g>
                            </g>
                        </g>
                    </svg>
                </svg>
                <span v-if="this.$route.path != '/'" style="display: block">外卖</span>
                <span v-if="this.$route.path === '/'" style="display: block;color: #0089dc">外卖</span>
            </router-link>
        </li>
        <li>
            <router-link to="/find">
                <svg class="index-footerTabIcon_1EbB8wS">
                    <svg v-if="this.$route.path != '/find'" viewBox="-2.5 -2.5 45 45" id="discover.5811137" width="100%"
                         height="100%">
                        <g style="
    fill: white;    stroke-width: 2;
">
                            <path d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
                                  stroke="#666"></path>
                            <path
                                    d="M12.79 28.126c-1.515.68-2.169.016-1.462-1.484l3.905-8.284c.47-.999 1.665-2.198 2.66-2.675l8.484-4.064c1.497-.717 2.153-.08 1.46 1.435l-3.953 8.64c-.46 1.006-1.647 2.186-2.655 2.64l-8.44 3.792z"
                                    stroke="#666"></path>
                            <path fill="#666"
                                  d="M6.482 5.44c-.684-.294-.678-.764 0-1.055L11.54 2.45c.517-.198.936.085.936.65v3.625c0 .558-.412.852-.936.65L6.48 5.44z"
                                  transform="rotate(-45 34.258 3.92)"></path>
                        </g>
                    </svg>
                    <svg v-if="this.$route.path === '/find'" viewBox="0 0 40 40" id="discover.5811137" width="100%"
                         height="100%">
                        <g fill="#0089dc">
                            <path fill="#0089dc"
                                  d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"></path>
                            <path fill="#FFF"
                                  d="M12.79 28.126c-1.515.68-2.169.016-1.462-1.484l3.905-8.284c.47-.999 1.665-2.198 2.66-2.675l8.484-4.064c1.497-.717 2.153-.08 1.46 1.435l-3.953 8.64c-.46 1.006-1.647 2.186-2.655 2.64l-8.44 3.792z"></path>
                            <path fill="#0089dc"
                                  d="M6.482 5.44c-.684-.294-.678-.764 0-1.055L11.54 2.45c.517-.198.936.085.936.65v3.625c0 .558-.412.852-.936.65L6.48 5.44z"
                                  transform="rotate(-45 34.258 3.92)"></path>
                        </g>
                    </svg>
                </svg>
                <span v-if="this.$route.path != '/find'" style="display: block">发现</span>
                <span v-if="this.$route.path === '/find'" style="display: block;color: #0089dc">发现</span>
            </router-link>
        </li>
        <li>
            <router-link to="/order">
                <svg class="index-footerTabIcon_1EbB8wS">
                    <svg v-if="this.$route.path != '/order'" viewBox="-2.5 -2.5 45 45" id="order-regular.41c17f8" width="100%" height="100%"><g fill="none" fill-rule="evenodd"><g stroke="#666" stroke-width="4" mask="url(#order-regular.41c17f8_b)"><rect id="order-regular.41c17f8_a" width="38" height="38" rx="2"></rect></g><rect width="24" height="2" x="7" y="8" fill="#666" rx="1"></rect><rect width="20" height="2" x="7" y="17" fill="#666" rx="1"></rect><rect width="8" height="2" x="7" y="26" fill="#666" rx="1"></rect></g></svg>
                    <svg v-if="this.$route.path === '/order'" viewBox="-2.5 -2.5 45 45" id="order.070ae2a" width="100%" height="100%"><g fill="#0089dc"><rect width="38" height="38" fill="#0089dc" rx="2"></rect><rect width="24" height="2" x="7" y="8" fill="#FFF" rx="1"></rect><rect width="20" height="2" x="7" y="17" fill="#FFF" rx="1"></rect><rect width="8" height="2" x="7" y="26" fill="#FFF" rx="1"></rect></g></svg>
                </svg>
                <span v-if="this.$route.path != '/order'" style="display: block">订单</span>
                <span v-if="this.$route.path === '/order'" style="display: block;color: #0089dc">订单</span>
            </router-link>
        </li>
        <li>
            <router-link to="/mine">
                <svg class="index-footerTabIcon_1EbB8wS">
                    <svg v-if="this.$route.path != '/mine'" viewBox="-2.5 -2.5 45 45" id="profile-regular.c151d62" width="100%" height="100%"><g fill="none" fill-rule="evenodd" stroke="#666" stroke-width="2"><g mask="url(#profile-regular.c151d62_c)"><path id="profile-regular.c151d62_a" d="M10 11.833V8.999A8.999 8.999 0 0 1 19 0c4.97 0 9 4.04 9 8.999v2.834l-.013.191C27.657 16.981 23.367 21 19 21c-4.616 0-8.64-4.02-8.987-8.976L10 11.833z"></path></g><g mask="url(#profile-regular.c151d62_d)"><path id="profile-regular.c151d62_b" d="M0 32.675C0 26.763 10.139 22 19.027 22 27.916 22 38 26.763 38 32.757v3.312C38 37.136 37.098 38 35.997 38H2.003C.897 38 0 37.137 0 36.037v-3.362z"></path></g></g></svg>
                    <svg v-if="this.$route.path === '/mine'" viewBox="-2.5 -2.5 45 45" id="profile.dbc5ebf" width="100%" height="100%"><path fill="#0089dc" fill-rule="evenodd" d="M10 11.833V8.999A8.999 8.999 0 0 1 19 0c4.97 0 9 4.04 9 8.999v2.834l-.013.191C27.657 16.981 23.367 21 19 21c-4.616 0-8.64-4.02-8.987-8.976L10 11.833zM0 32.675C0 26.763 10.139 22 19.027 22 27.916 22 38 26.763 38 32.757v3.312C38 37.136 37.098 38 35.997 38H2.003C.897 38 0 37.137 0 36.037v-3.362z"></path></svg>
                </svg>
                <span v-if="this.$route.path != '/mine'" style="display: block">我的</span>
                <span v-if="this.$route.path === '/mine'" style="display: block;color: #0089dc">我的</span>
            </router-link>
        </li>
    </ul>
</div>
  `,
  watch: {
    '$route'(to, from){
      let none = document.getElementById('aaa')

      if (to.path == '/search') {
        none.style.display = 'none'
      }
      else if (to.path == '/shop'){
        none.style.display = 'none'
      }
      else if (from.path == '/shop') {
        none.style.display = ''
      }
      else if (to.path == '/Shoplist'){
        none.style.display = 'none'
      }
      else if (to.path == '/login'){
        none.style.display = 'none'
      }
      else if (from.path == '/search') {
        none.style.display = ''
      }
      else if (from.path == '/login'){
        none.style.display = ''
      }
    }
  }

  // watch: {
  //   '$route'(to, from){
  //     if (from.path){
  //       this.slide = slide
  //     }
  //   }
  // }
}).$mount('#app')



