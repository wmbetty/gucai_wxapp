// pages/myWines/myWines.js
import wxJs from '../../utils/wxJs'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    wineData: [
      {
        id:1,name:'马爹利蓝带11',count:2,times:'2018-01-01-2018-01-02',remark:'客户很豪爽，没有备注11',wineStatus:true
      },
      {
        id:2,name:'马爹利蓝带22',count:3,times:'2018-01-01-2018-01-02',remark:'客户很豪爽，没有备注22',wineStatus:false
      },
      {
        id:3,name:'马爹利蓝带22',count:3,times:'2018-01-01-2018-01-02',remark:'客户很豪爽，没有备注33',wineStatus:true
      }
    ]
  
  },

  // 取酒操作
  getWine () {
      let currentBar = 'A6666'
      let text = '当前吧台是' + ' ' + currentBar + ' ' + '你确认取酒吗？'
      wxJs.showInfoModal('取酒吧台', text, true, (res) => {
        if (res.confirm) { // 取酒确认
          wxJs.showToast('服务员正在前往的路上，请耐心等待')
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