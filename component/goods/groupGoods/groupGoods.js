// component/goods/groupGoods/groupGoods.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goodsList: { // 组件数据
      type : [],
      value : [],
      observer () {

      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 看商品详情
        gotoDetail () {
          wx.navigateTo({
            url: '../../pages/goodsDetail/goodsDetail'
          })
        }
  }
})
