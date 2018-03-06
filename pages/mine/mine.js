// pages/mine/mine.js
import wxJs from '../../utils/wxJs'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    profile: 'user', //登录用户身份
    // profile: 'employee',
    userInfo: {},
    phoneNo: '020-88888888'
  },

  goStoreWine () {
    wxJs.removeStorage('chooseBrandInfo', function () {})
    wxJs.removeStorage('chooseWineStore', function () {})
    wx.navigateTo({
      url: '/pages/storeWine/storeWine'
    })
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

  // 退出登录
  logout () {
    wxJs.showInfoModal('提示', '是否退出登录', true, function (res) {
      if (res.confirm) {
        console.log('确定')
      } else if (res.cancel) {
        console.log('取消')
      }
    })
  },

  // 联系我们
  callUs () {
    let phoneNo = this.data.phoneNo
    wxJs.showInfoModal('联系酒吧', phoneNo, true, function (res) {
      if (res.confirm) {
        wx.makePhoneCall({ //拨打电话
          phoneNumber: phoneNo
        })
      } else if (res.cancel) {
        console.log('取消')
      }
    })
  },

  gotoCharge () {
    wx.navigateTo({
      url: '/pages/charge/charge'
    })
  },

  gotoWallet () {
    wx.navigateTo({
      url: '/pages/myWallet/myWallet'
    })
  },

  goOrderRoom () {
    wx.navigateTo({
      url: '/pages/chooseRoom/chooseRoom'
    })
  },

  gotoMywine () {
    wx.navigateTo({
      url: '/pages/myWines/myWines',
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