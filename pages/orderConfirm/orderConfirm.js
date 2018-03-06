// pages/orderConfirm/orderConfirm.js
import wxJs from '../../utils/wxJs'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    currTable: 'VIP区', // 当前位置
    needPay: '',
    getGoods: [
      {id : 1,name : '蓝色夏威夷', image: '../../images/wine_test1.png', count: 1, price: 100},
      {id : 2,name : '蓝色夏威夷蓝色夏威夷蓝色夏威夷夏威夷蓝色夏威夷', image: '../../images/wine_test1.png', count: 1, price: 100.50},
      {id : 3,name : '蓝色夏威夷ccc', image: '../../images/wine_test1.png', count: 1, price: 204}
    ], // 确认商品
    radioColor: '#FF3939' // 单选按钮颜色
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  radioChange (e) {
    var needPay = e.detail.value
    let that = this
    that.setData({
      needPay: needPay
    })
  },

  // 确认下单操作
  orderConfirm () {
    let that = this
    let needPay = that.data.needPay
    wxJs.showInfoModal('提示', needPay, false, function (res) {})
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
    console.log(111)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})