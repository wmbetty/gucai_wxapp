// pages/charge/charge.js
import wxJs from '../../utils/wxJs'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    chargeArr: [
      {
        title: '充100送30', rewards: '可获得30积分', chargeMoney: '100.00', checked: true
      },
      {
        title: '充200送60', rewards: '可获得60积分', chargeMoney: '200.00'
      }
    ],
    needPay: '100.00'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  // 单选事件
  radioChange (e) {
    var needPay = e.detail.value
    this.setData({
      needPay: needPay
    })
  },

  // 支付点击事件
  payMoney () {
    // 成功或失败给出相应提示
    wxJs.showToast('充值成功')
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