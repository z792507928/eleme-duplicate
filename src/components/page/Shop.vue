<!--<template>-->
<!--<div>-->
<!--&lt;!&ndash;<v-header :Seller="msg"></v-header>&ndash;&gt;-->
<!--<span v-for="item in submitForm">{{ item }}</span>-->
<!--</div>-->
<!--</template>-->
<template>
  <div>
    <div class="app-2zj-m_1">
      <div class="app-1TQsf_1">
        <div class="app-dps8r_1" v-for="item in submitForm">
          <div>
            <div class="shop-header-3Zr-__0">
              <div class="shop-header-1swXn_0"
                   style="background-image: url(&quot;https://fuss10.elemecdn.com/1/32/c75a72f674052473fb35b5c8ab1d7jpeg.jpeg?imageMogr/format/webp/thumbnail/!40p/blur/50x40/&quot;);"></div>
              <nav class="shop-header-1fspV_0"><a href="javascript:;"
                                                  class="shop-header-16Mzq_0">
                <svg>
                  <use xmlns:xlink="http://www.w3.org/1999/xlink"
                       xlink:href="#arrow-left"></use>
                </svg>
              </a></nav>
              <div class="shop-header-1wVeP_0"><img class="shop-header-2hPPi_0"
                                                    src="https://fuss10.elemecdn.com/1/32/c75a72f674052473fb35b5c8ab1d7jpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/">
                <div class="shop-header-2EhEt_0"><h2 class="shop-header-3df9k_0">{{ item.seller.name }}</h2>
                  <p class="shop-header-3ssUT_0"><span class="shop-header-2wfcq_0">
            {{ item.seller.description }}
          </span><span class="shop-header-2wfcq_0">
            {{ item.seller.deliveryTime }}分钟送达
          </span><span class="shop-header-2wfcq_0">
            配送费¥{{ item.seller.deliveryPrice }}
          </span></p>
                  <div class="shop-header-2JWG__0" v-if="item.seller.infos"><span>公告：</span><span v-for="items in item.seller.infos">{{ items }}</span></div>
                </div>
              </div>
              <div ubt-click="101178"
                   class="shop-header-2GBKf_0">
                <div class="activity-1hPHa_0 activity-2JHFT_0">
                  <span class="icons"></span>
                  <span class="activity-3dUjU_0">{{ item.seller.supports[0].description }}</span>
                </div>
                <div class="shop-header-2yEPX_0">
                  {{ item.seller.supports.length }}个活动
                </div>
              </div>
            </div><!----></div><!---->
          <div class="index-2EFsE_0">
            <svg>
              <use xmlns:xlink="http://www.w3.org/1999/xlink"
                   xlink:href="#shop_cart"></use>
            </svg>
          </div>
        </div>
        <div class="shop-tab-1MgBk_0">
          <div class="shop-tab-2ipt1_0 shop-tab-nD6jp_0"><span class="shop-tab-2H0qT_0">商品</span></div>
          <div class="shop-tab-2ipt1_0"><span class="shop-tab-2H0qT_0">评价</span></div>
          <div class="shop-tab-2ipt1_0"><span class="shop-tab-2H0qT_0">店铺</span></div>
        </div>
        <div class="menuview-menuview_2hUkG"
             style="height:calc(100% - 1.066667rem)">
          <div class="menuview-menuviewNodata_2iJo3"
               style="display: none;"><img src="//github.elemecdn.com/eleme/fe-static/1cb05f59/media/empty/no-food.png">
            <p>没有商品</p>
            <p>该商家还未上传商品</p></div>
          <div class="menuview-menuviewMain_17K3g">
            <main class="menuview-main_i6fQ3">
              <ul class="menucategory-category_29kyE menuview-menuNav_2_lFf" >
                <li v-for="item in submitForm[0].goods"  role="button"
                    aria-label="热销"
                    class="menucategory-active_JnDmc menucategory-hasicon_2MBNs menucategory-categoryItem_3e27M"><!---->
                  <!--<img class="menucategory-categoryIcon_375ij"-->
                       <!--src="https://fuss10.elemecdn.com/5/da/3872d782f707b4c82ce4607c73d1ajpeg.jpeg?imageMogr/format/webp/thumbnail/18x/">-->
                  <span class="menucategory-categoryName_qwsbd" >{{ item.name }}</span></li>
              </ul>
              <section data-v-f433384a=""
                       class="container menuview-menuList_JqDMu">
                <div data-v-f433384a=""
                     class="scroller"><!---->
                  <dl v-for="item in submitForm[0].goods" data-v-f433384a=""
                      role="menu">
                    <dt data-v-f433384a=""
                        role="heading"
                        aria-label="">
                    <div data-v-f433384a=""
                         class="category-title"><strong data-v-f433384a=""
                                                        class="category-name">{{ item.name }}</strong> <span data-v-f433384a=""
                                                                                                class="category-desc"></span>
                    </div> <!----></dt>
                    <dd v-for="(items,index) in item.foods" data-v-f433384a=""
                        aria-label="经典麦辣鸡腿汉堡中薯套餐，原价29元，现价29元。"
                        role="menuitem"
                        class="">
                      <div data-v-f433384a=""
                           class="fooddetails-root_2HoY2">
                        <span class="fooddetails-logo_2Q0S7"><!----> <img alt="经典麦辣鸡腿汉堡中薯套餐"
                                                                          title="经典麦辣鸡腿汉堡中薯套餐"
                                                                          :src="items.image"></span>
                        <section class="fooddetails-info_1fBtn"><p class="fooddetails-name_P4hpW"><!---->
                          {{ items.name }}
                          <!----></p>
                          <p class="fooddetails-desc_3tvBJ">{{ items.info }}</p>
                          <p class="fooddetails-sales_1ETVq"><span>月售{{ items.sellCount }}份</span> <span>好评率{{ items.rating }}%</span></p>
                          <div class="fooddetails-activityRow_1FKti"><!----> <!----></div>
                          <strong class="salesInfo-price_3_oc1_0 fooddetails-salesInfo_MPG41"><span>{{ items.price }}</span> <!---->
                            <!----></strong>
                          <div class="fooddetails-button_RwKqC" @click="add(index)">
                            <span  class="cartbutton-entitybutton_2u6UF"><!----> <!----> <a href="javascript:" role="button" aria-label="添加商品"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-minus">
                              <svg viewBox="0 0 44 44" id="cart-minus" width="100%" height="100%"><path fill="none" d="M0 0h44v44H0z"></path><path fill-rule="evenodd" d="M22 0C9.8 0 0 9.8 0 22s9.8 22 22 22 22-9.8 22-22S34.2 0 22 0zm10 24h-8v8c0 1.1-.9 2-2 2s-2-.9-2-2v-8h-8c-1.1 0-2-.9-2-2s.9-2 2-2h8v-8c0-1.1.9-2 2-2s2 .9 2 2v8h8c1.1 0 2 .9 2 2s-.9 2-2 2z" clip-rule="evenodd"></path></svg>
                            </use></svg></a></span>
                          </div>
                        </section>
                      </div>
                    </dd>
                  </dl>
                </div>
                <div data-v-f433384a=""
                     class="specpanel-container_28FLy">
                  <div class="specpanel-specpanel_3CRhf"
                       style="display: none;"><h1></h1>
                    <div class="specpanel-candidators_IUXBF"></div>
                    <div class="specpanel-selectedresult_3-qgQ">
                      <p class="specpanel-price_2fywH">
                        <small class="specpanel-yen_dt8UU">¥</small>
                        <span class="specpanel-now_PGE8E">0</span>
                        <small class="specpanel-extratext_GKpVd">起</small>
                      </p>
                      <div><!---->
                        <button type="button"
                                class="specpanel-cartadd_3b5FJ specpanel-disabled_1T-EE">选好了
                        </button>
                      </div>
                    </div>
                    <a href="javascript:"
                       role="button"
                       aria-label="关闭"
                       class="specpanel-close_2TIOf"></a></div>
                  <div class="specpanel-layer_1vL1r"
                       style="display: none;"></div>
                </div> <!----></section>
            </main>
            <div>
              <button type="button"
                      class="menuview-essentialTip_2S-dD"
                      style="display: none;">去点必选品
              </button>
              <footer class="cartview-cartview_xUNA6">
                <div class="cartview-cartmask_3rV-M"
                     style="z-index: 10; display: none;"></div>
                <div class="cartview-cartbody_15r9z cartview-cartbodyNoTip_3gVWf"
                     style="z-index: 11;">
                  <section class="discount-tip-discountTip_1IcZ7_0"
                           style="display: none;"></section>
                  <div style="opacity: 0;">
                    <div class="cartview-cartheader_342ET">
                      <div class="cartview-headerText_3abxn"><span class="cartview-title_2uj0T">已选商品</span> <!---->
                        <!----></div>
                      <a href="javascript:"
                         ubt-click="101179"
                         class="cartview-cartheaderRemove_2WfO3">
                        <svg>
                          <use xmlns:xlink="http://www.w3.org/1999/xlink"
                               xlink:href="#cart-remove"></use>
                        </svg>
                        <span>清空</span></a></div>
                    <div class="entityList-cartbodyScroller_GxeX__0"><!---->
                      <ul></ul> <!----></div>
                  </div>
                </div>
                <div class="bottomNav-cartfooter_1qvQh_0"
                     style="z-index: 11;"><span role="button"
                                                aria-label="购物车"
                                                attr-quantity="0"
                                                class="bottomNav-carticon_2xfrl_0 bottomNav-empty_-atZ2_0"></span>
                  <div role="button"
                       aria-label="购物车有商品0件，共0元，配送费&amp;yen;9。"
                       class="bottomNav-cartInfo_135aa_0"><p class="bottomNav-carttotal_1nOFY_0"><span>¥0</span> <!---->
                  </p>
                    <p class="bottomNav-cartdelivery_Gsj2c_0">配送费¥9</p></div>
                  <a role="button"
                     href="javascript:;"
                     class="submit-btn-submitbutton_1dW2t_0 submit-btn-disabled_3y1tV_0"><span>¥0起送</span></a></div>
              </footer> <!----></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import '../../../static/style/shopinner.css'
  import store from '../../Vuex/Vuex'
  import header from './Shop/header.vue'
  export default{
    data(){
      return {
        msg: ''
      }
    },
    mounted(){
      store.commit('Shop')
      this.msg = store.state.shopMsgCon
    },
    methods: {
      add(data){
          console.log(this.submitForm[0].goods)
      }
    },
    created(){
        this.classMap = ['']
    },
    computed: {
      submitForm(){
        return store.state.shopMsgCon
      },
    },
    components: {
      'v-header': header
    }
  }

</script>
<style lang="less">
  .clearfix {
    display: inline-block;
    &:after {
      content: '';
      clear: both;
    }
  }
</style>
