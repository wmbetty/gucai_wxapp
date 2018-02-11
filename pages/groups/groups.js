// pages/groups/groups.js
import wxJs from '../../utils/wxJs'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsList: [
      {
        groupNo: 1, listItems: [
          {id : 1,name : '蓝色夏威夷', image: '../../../images/wine_test1.png', count: 1, price: 100},
          {id : 2,name : '蓝色夏威夷蓝色夏威夷蓝色夏威夷', image: '../../../images/wine_test2.png', count: 1, price: 100.50}
        ]},
      {groupNo: 2, listItems: [
          {id : 1,name : '蓝色夏威夷', image: '../../../images/wine_test1.png', count: 1, price: 100}
        ]}
    ]
  },

  // 放弃套餐
  groupCancle () {
    wxJs.showInfoModal('提示', '是否放弃套餐', true, (res) => {
      if (res.confirm) {
        wx.navigateTo({
          url: '/pages/goodsList/goodsList'
        })
      }
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