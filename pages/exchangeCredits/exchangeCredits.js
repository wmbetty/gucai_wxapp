// pages/exchangeCredits/exchangeCredits.js
import wxJs from '../../common/wxJs'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentCredits: 50,
    creditList: [
      {goodsName: '可乐', credits: 5},
      {goodsName: '雪碧', credits: 10},
      {goodsName: '橙汁', credits: 20},
      {goodsName: '红酒', credits: 80}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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

  gotoExchange (e) {
    var type = e.currentTarget.dataset.type;
    var currentCredits = this.data.currentCredits
    if (type > currentCredits) {
      wxJs.showToast('抱歉您积分不足，无法兑换')
    } else {
      wx.navigateTo({
        url: '/pages/exchangeConf/exchangeConf',
      })
    }
  },

  // 查看使用记录
  gotoRecord () {
    wx.navigateTo({
      url: '/pages/exchangeRecords/exchangeRecords',
    })
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