// pages/chooseWineBrand/chooseWineBrand.js
import wxJs from '../../utils/wxJs'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    brands: [
      {
        id:1,name:'子弹系列',
        subBrands:[
          {id:1,name:'酒品1'},
          {id:2,name:'酒品2'},
          {id:3,name:'酒品3'}
        ]
      },
      {
        id:2,name:'XX系列',
        subBrands:[
          {id:4,name:'酒品11'},
          {id:5,name:'酒品22'},
          {id:6,name:'酒品33'}
        ]
      }
    ]
  },

  chooseBrand (e) {
    var type = e.currentTarget.dataset.type;
    wxJs.setStorage('chooseBrandInfo', type)
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