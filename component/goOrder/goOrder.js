// pages/goOrder/goOrder.js
import wxJs from '../../common/wxJs'

Component({
  /**
   * 组件的属性列表
   */
  properties: {

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
    scanCode () { // 点单扫描二维码
      wxJs.scanCode((res) => {
        if (res.errMsg === 'scanCode:ok') { //扫描成功到点单页面(商品列表页)
          wx.navigateTo({
            url: '../../pages/goodsList/goodsList'
          })
        }
      })
    }
  }
})
