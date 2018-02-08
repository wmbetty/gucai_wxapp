// pages/wineStorage/wineStorage.js
import wxJs from "../../common/wxJs";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    wineStorages: [
      {id:1,name:'酒库11'},
      {id:2,name:'酒库22'},
      {id:3,name:'酒库33'}
    ]
  },

  chooseWine (e) {
    var type = e.currentTarget.dataset.type;
    wxJs.setStorage('chooseWineStore', type)
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