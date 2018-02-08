// pages/exchangeRecords/exchangeRecords.js
import {getBalance} from '../../api/balance.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentBalance: '100.00',
    // creditsArr: [],
    creditsArr: [
      {
        exchangeWay: 'exchange', createTime: '2017-07-26  17:00:01', creidts: 100, type: 'consume',
        goods:{
          name: 'XXX商品'
        }
      },
      {
        exchangeWay: 'recharge', createTime: '2017-07-26  17:00:01', creidts: 700, type: 'give'
      },
      {
        exchangeWay: 'consume', createTime: '2017-07-26  17:00:01', creidts: 100, type: 'give'
      },
      {
        exchangeWay: 'exchange', createTime: '2017-07-26  17:00:01', creidts: 100, type: 'consume',
        goods: {
          name: 'XX商品22'
        }
      }
    ],
    isList: true,   // 用于判断creditsArr数组是不是空数组，默认true，空的数组
    pageNum: 1,   // 设置加载的第几次，默认是第一次
    callbackcount: 15,      //返回数据的个数
    isLoding: false, //"上拉加载"的变量，默认false，隐藏
    isLodingComplete: false  //“没有数据”的变量，默认false，隐藏
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 请求列表数据

    setTimeout(() => {
      this.setData({
        hidden: true //隐藏loading
      })
    }, 1500)
  },

  loadingChange () {

  },

  //获取列表数据
  getList: function(){
    let that = this;
    let pageNum = that.data.pageNum,//把第几次加载次数作为参数
        callbackcount =that.data.callbackcount; //返回数据的个数

    getBalance(pageNum,callbackcount, function(data){
      console.log(data)
      //是否有数据
      if(data.data.balance !== 0){
        let newBalanceArr = [];
        //如果isList是true从data中取出数据，否则先从原来的数据继续添加
        that.data.isList ? newBalanceArr = data.data.balance : newBalanceArr = that.data.creditsArr.concat(data.data.balance)
        that.setData({
          creditsArr: newBalanceArr, //获取数据数组
          isLoding: true   //"上拉加载"的变量设为false，显示
        });
        //没有数据了，“没有数据”显示，“上拉加载”隐藏
      }else{
        that.setData({
          isLodingComplete: true, //“没有数据”设为true，显示
          isLoding: false  //"上拉加载"的变量设为false，隐藏
        });
      }
    })
  },

  // 上拉加载更多
  pullupLoad (e) {
    console.log(111)
    this.setData({
      isLoding: true,
      isLodingComplete: false
    })
    setTimeout(() => {
      this.setData({
        isLoding: false,
        isLodingComplete: true
      })
    }, 2500)
    // let that = this;
    // if(that.data.isLoding && !that.data.isLodingComplete){
    //   that.setData({
    //     pageNum: that.data.pageNum + 1,  //每次触发上拉事件，把pageNum+1
    //     isList: false  //触发到上拉事件，把isList设为为false
    //   });
    //   that.getList();
    // }
  },

  gotoCharge () {
    wx.navigateTo({
      url: '/pages/charge/charge'
    })
  },

  gotoExchange () {
    wx.navigateTo({
      url: '/pages/exchangeCredits/exchangeCredits'
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