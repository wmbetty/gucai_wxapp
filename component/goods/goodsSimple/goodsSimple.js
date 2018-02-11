// component/goodsSimple/goodsSimple.js
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
    // 商品数量减
    numCut (e) {
      var type = e.currentTarget.dataset.type; // 输入框数量
      console.log(type, '数量减')
      var myEventDetail = {} // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('numcut', myEventDetail, myEventOption)
    },
    
    // 商品加
    numAdd (e) {
      var type = e.currentTarget.dataset.type; // 输入框数量
      console.log(type, '数量加')
      var myEventDetail = {} // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('numadd', myEventDetail, myEventOption)
    },
    
    // 看商品详情
    gotoDetail () {
      wx.navigateTo({
        url: '../../pages/goodsDetail/goodsDetail'
      })
    }
    
  }
})
