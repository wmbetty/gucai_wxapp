// pages/chooseRoom/chooseRoom.js
import wxJs from '../../utils/wxJs'

var Api = require('../../api/api.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 左边区域
    roomType:[],
    roomData:[],
    orderDate: new Date().toISOString().substring(0, 10),
    dateTitle: '当天日期',
    roomBgColor: null,
    getRooms: [],
    noRoomText: ''
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //启动时候默认加载房间类型和第一个分类的房间数据
    var that = this;
    Api.getRoomTypeList(this.data.orderDateTimeStamp, {
      success: function (e) {
        that.setData({
          roomType: JSON.parse(e.data.data),
        })
        loadRoomData(that, 0);
        console.dir(that.data.roomType);
      }
    });

  },

  // 左边栏选择切换
  selectArea (e) {
    loadRoomData(this, e.currentTarget.dataset.index);
  },

  // 日期选择
  bindDateChange: function (e) {
    this.setData({
      orderDate: e.detail.value,
      dateTitle: '预订日期'
    })

    var roomType = this.data.roomType;
    for (var i=0;i<roomType.length;i++) {
      if (roomType[i].leftSideItemActived){
        loadRoomData(this,i);
      }
    }

  },

  // 订房
  goOrder (e) {
    let that = this
    let type = e.currentTarget.dataset.type;
    type.date = that.data.orderDate
    let now = new Date()
    type.time = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds()
    wxJs.setStorage('selectedRoom', type)
    let status = type.status
    if (status === 0) {
      wx.navigateTo({
        url: `/pages/orderRoom/orderRoom`
      })
    }
    if (status === 1) {
      wxJs.showInfoModal('提示', '房间已开台，不可预订', false, function (res) { })
    }
    if (status === 2) {
      wxJs.showInfoModal('提示', '房间维修中，不可预订', false, function (res) { })
    }
    if (status === 3) {
      wxJs.showInfoModal('提示', '房间已被预订', false, function (res) { })
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

//加载房间数据，传入 roomType 的索引，数据会保存到 roomData,
function loadRoomData(that,index){
  var id = that.data.roomType[index].cRoomTypeID;
  var roomType = that.data.roomType;
  for (let item of roomType) {
    item.leftSideItemActived = false
  }
  roomType[index].leftSideItemActived =true;
  var queryDate = that.data.orderDate;
  Api.getRoomInf( id, undefined, queryDate,{
    success:function(e){
      var roomData = JSON.parse(e.data.data);
      roomData=  roomDataPreExc(roomData);
      console.log(e);
      that.setData({
        roomData: roomData,
        roomType: roomType,
      })
    }
  });
}

function roomDataPreExc(rooms){
  //0: 未预订；1.已开台；2.维修中；3.已预订
  for (let item of rooms) {
    if (item.nState === 0) {
      item.roomBgColor = 'room-item'
      item.hidden = true

    }
    if (item.nState === 1) {
      item.roomBgColor = 'room-item room-blue'
      item.hidden = false

    }
    if (item.nState == 5) {
      item.roomBgColor = 'room-item room-green'
      item.hidden = false

    }
    if (item.nState == 3 || item.nState ==2) {
      item.roomBgColor = 'room-item room-orange'
      item.hidden = false
    }
  }
  return rooms;
}