// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchText: '', // 搜索框文字
    goodsList: [
      {id : 1,name : '蓝色夏威夷', image: '../../images/wine_test1.png', count: 1, price: 100},
      {id : 2,name : '蓝色夏威夷蓝色夏威夷蓝色夏威夷', image: '../../images/wine_test1.png', count: 1, price: 100.50},
      {id : 3,name : '蓝色夏威夷ccc', image: '../../images/wine_test1.png', count: 1, price: 204}
      // {id : 4,name : '蓝色夏威夷', image: '../../images/wine_test1.png', count: 8, price: 100},
      // {id : 5,name : '蓝色夏威夷蓝色夏威夷蓝色夏威夷', image: '../../images/wine_test1.png', count: 10, price: 100.50},
      // {id : 6,name : '蓝色夏威夷ccc', image: '../../images/wine_test1.png', count: 3, price: 204},
      // {id : 7,name : '蓝色夏威夷ccc', image: '../../images/wine_test1.png', count: 3, price: 204},
      // {id : 8,name : '蓝色夏威夷', image: '../../images/wine_test1.png', count: 8, price: 100},
    ],
    getGoods: [], // 搜索结果
    cartCount: 0, // 购物车商品数量
    showCloseIcon: false, // 显示输入框清除按钮
    showNoGoos: false // 显示没有搜索结果
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  // 搜索框输入文字
  inputEnter (e) {
    var value = e.detail.value
    let that = this
    var cartCount = that.data.cartCount
    for (let it of that.data.goodsList) {
      cartCount += it.count
    }
    that.setData({
      cartCount: cartCount
    })
    if (value === '') {
      that.setData({
        getGoods: [],
        showCloseIcon: false
      })
    }
    if (value !== '') { // 有输入时显示搜索结果
      that.setData({
        getGoods: that.data.goodsList,
        showCloseIcon: true
      })
    }
    if (that.data.goodsList.length === 0) {
      that.setData({
        showNoGoos: true
      })
    }
  },

  // 清除输入框文字
  clearInput () {
    this.setData({
      searchText: ''
    })
  },

  // 商品数减
  numCut (e) {
    let that =this
    let goods = that.data.getGoods
    var item = e.currentTarget.dataset.type; // 当前商品操作
    var count = item.count
    var cartCount = that.data.cartCount
    for (let i = 0; i < goods.length; i++) {
      if (item.id === goods[i].id && item.count > 1) {
        count --
        cartCount --
        item.count = count
        goods.splice(i, 1, item)
      }
    }
    that.setData({
      getGoods: goods,
      cartCount: cartCount
    })
  },

  // 商品数加
  numAdd (e) {
    let that =this
    let goods = that.data.getGoods
    var cartCount = that.data.cartCount
    var item = e.currentTarget.dataset.type // 当前商品操作
    var count = item.count
    for (let i = 0; i < goods.length; i++) {
      if (item.id === goods[i].id && item.count >= 1) {
        count ++
        cartCount ++
        item.count = count
        goods.splice(i, 1, item)
      }
    }
    that.setData({
      getGoods: goods,
      cartCount: cartCount
    })
  },

  // 输入商品数目
  numEnter (e) {
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

  // 到商品详情页
  gotoDetail (e) {
    var id = e.currentTarget.dataset.type; // 商品id
    wx.navigateTo({
      url: '/pages/goodsDetail/goodsDetail'
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