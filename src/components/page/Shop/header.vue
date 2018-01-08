<template>
    <div class="shop-header">
      <div class="content-wrapper">
        <div class="bulletin-wrapper">
          <div class="avatar">
            <img width="128" height="128" :src="Seller.seller.avatar" alt="">
          </div>
          <div class="content">
            <div class="title">
              <span class="brand"></span>
              <span class="name">{{ Seller.seller.name }}</span>
            </div>
            <div class="description">
              {{ Seller.seller.description }}/{{ Seller.seller.deliveryTime }}分钟送达
            </div>
            <div v-if="Seller.seller.supports" class="support">
              <span class="icon"></span>
              <span class="text">{{ Seller.seller.supports[0].description }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
  export default{
    props: {
        Seller:{
            type: Object
        }
    },
  }
</script>
<style scoped lang="less">
  .shop-header{
    color: #ffffff;
    background: #151515;
    .content-wrapper{
      padding: 24px 12px 18px 24px;
      .avatar{
        display: inline-block;
      }
      .content{
        display: inline-block;
        margin-left: 16px;
        font-size: .2755555555rem;
        .title{
          margin: 2px 0 8px 0;
          .brand{
            display: inline-block;
            width: 30px;
            height:18px;
          }
        }
      }
    }
  }
</style>
