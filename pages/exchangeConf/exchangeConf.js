// pages/exchangeConf/exchangeConf.js
import wxJs from '../../common/wxJs'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    exchangeCondi: '', //兑换条件
    exchangeInfo: '' //备注
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  inputEnter (e) {
    let type = e.currentTarget.dataset.type;
    let value = e.detail.value
    switch (type) {
      case 'exchangeCondi':
        this.setData({
          exchangeCondi: value
        })
        break;
      case 'exchangeInfo':
        this.setData({
          exchangeInfo: value
        })
        break;
    }
  },

  // 确认兑换
  submitExchange () {
    let that = this
    if (!that.data.exchangeCondi) {
      wxJs.showInfoModal('提示', '请填写兑换条件', false, function () {})
    }
    if (!that.data.exchangeInfo) {
      wxJs.showInfoModal('提示', '请填写备注信息', false, function () {})
    }
    // 请求兑换接口
    if (that.data.exchangeCondi && that.data.exchangeInfo) {
      wxJs.showToast('请耐心等待配送')
    }
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