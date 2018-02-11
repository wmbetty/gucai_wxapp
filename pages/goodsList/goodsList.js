// pages/goodsList/goodsList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsListTabActive: true, // 商品tab选中状态
    recordTabActive: false, // 消费记录选中状态
    categorys:
      [
        {id : 1,name : '酒水'},
        {id : 2,name : '小吃'},
        {id : 3,name : '干货'}
      ], // 商品列表左侧数据
    currTable: 'VIP区',
    goodsList: [
      {id : 1,name : '蓝色夏威夷', image: '../../../images/test1.png', count: 1, price: 100},
      {id : 2,name : '蓝色夏威夷蓝色夏威夷蓝色夏威夷', image: '../../../images/wine_test1.png', count: 1, price: 100.50},
      {id : 3,name : '蓝色夏威夷ccc', image: '../../../images/wine_test2.png', count: 1, price: 204}
    ], // 商品列表
    cartCount: 0, // 购物车商品数量
    getGoods: [],
    recordList: [
      {id : 1,name : '蓝色夏威夷', image: '../../../images/wine_test2.png', count: 8, price: 100 ,spec: '支',
        subGoods: '可乐*1，雪碧*1，一味药*3，香烟*2，香蕉*1,一味药*3，香烟*2，香蕉*1', isSend: true, outTime: '01:23', out: true},
      {id : 2,name : '蓝色夏威夷蓝色夏威夷蓝色夏威夷蓝色夏威夷', image: '../../../images/wine_test1.png', count: 10, price: 100.50 ,spec: '支', subGood: '', isSend: false, outTime: '03:25', out: false},
    ],
    noGoodsText: ''
  },

  // tab切换
  tabChange (e) {
    var type = e.currentTarget.dataset.type;
    if (type === 'goods') {
      this.setData({
        goodsListTabActive: true,
        recordTabActive: false
      })
    }
    if (type === 'records') {
      this.setData({
        goodsListTabActive: false,
        recordTabActive: true
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    let cates = that.data.categorys
    for (let item of cates) {
      if (item.id === 1) {
        item.listItemActived = true
      }
    }
    that.setData({
      categorys: cates,
      getGoods: that.data.goodsList
    })
  },

  // 左边栏选择切换
  selectListItem (e) {
    let type = e.currentTarget.dataset.type;
    let that = this
    let cates = that.data.categorys
    for (let item of cates) {
      if (item.id === type) {
        item.listItemActived = true
      } else {
        item.listItemActived = false
      }
    }
    that.setData({
      categorys: cates
    })
    if (type === 1) {
      that.setData({
        getGoods: that.data.goodsList
      })
    }
    if (type === 2) {
      that.setData({
        getGoods: [],
        noGoodsText: '暂无小吃'
      })
    }
    if (type === 3) {
      that.setData({
        getGoods: [],
        noGoodsText: '暂无干货'
      })
    }
  },

  // 商品数减
  numCut (e) {
    // let that =this
    // let goods = that.data.getGoods
    // var item = e.currentTarget.dataset.type; // 当前商品操作
    // var count = item.count
    // for (let i = 0; i < goods.length; i++) {
    //   if (item.id === goods[i].id && item.count > 1) {
    //     count --
    //     item.count = count
    //     goods.splice(i, 1, item)
    //   }
    // }
    // that.setData({
    //   getGoods: goods
    // })
  },

  // 商品数加
  numAdd (e) {
    wx.navigateTo({
      url: '/pages/groups/groups'
    })
    // let that =this
    // let goods = that.data.getGoods
    // var item = e.currentTarget.dataset.type // 当前商品操作
    // var count = item.count
    // for (let i = 0; i < goods.length; i++) {
    //   if (item.id === goods[i].id && item.count >= 1) {
    //     count ++
    //     item.count = count
    //     goods.splice(i, 1, item)
    //   }
    // }
    // that.setData({
    //   getGoods: goods
    // })
  },

  // 输入商品数目
  inputEnter (e) {
    var inputCount = e.detail.value
    let that =this
    let goods = that.data.getGoods
    var item = e.currentTarget.dataset.type // 当前商品操作
    for (let i = 0; i < goods.length; i++) {
      if (item.id === goods[i].id) {
        item.count = inputCount
        goods.splice(i, 1, item)
      }
    }
    that.setData({
      getGoods: goods
    })
  },

  gotoSearch () {
    wx.navigateTo({
      url: '/pages/search/search'
    })
  },

  // 到商品详情页
  gotoDetail (e) {
    var id = e.currentTarget.dataset.type; // 商品id
    wx.navigateTo({
      url: '/pages/goodsDetail/goodsDetail'
    })
  },

  // 到购物车页
  gotoCart () {
    wx.navigateTo({
      url: '/pages/cart/cart'
    })
  },

  // 到确认下单页
  goOrderConfirm () {
    wx.navigateTo({
      url: '/pages/orderConfirm/orderConfirm'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})