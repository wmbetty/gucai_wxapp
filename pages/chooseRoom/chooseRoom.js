// pages/chooseRoom/chooseRoom.js
import wxJs from '../../utils/wxJs'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 左边区域
    roomAreas: [
      {id:1,name:'VIP区'},
      {id:2,name:'贵宾区'},
      {id:3,name:'常客区'},
    ],
    orderDate: null,
    dateTitle: '当天日期',
    rooms: [
      {
        id: 1,name: 'VIP房间1',maxPeople: 5, leastConsumed: 100, status: 0
      },
      {
        id: 2, name: 'VIP mini table', maxPeople: 4, leastConsumed: 80, status: 1
      },
      {
        id: 3, name: 'VIP房间2', maxPeople: 6, leastConsumed: 200, status: 2
      },
      {
        id: 4, name: 'VIP mini table222', maxPeople: 3, leastConsumed: 80, status: 3
      },
      {
        id: 1, name: 'VIP房间11', maxPeople: 5, leastConsumed: 100, status: 0
      },
      {
        id: 1, name: 'VIP房间33 hello 你好', maxPeople: 5, leastConsumed: 100, status: 0
      }
    ],
    roomBgColor: null,
    getRooms: [],
    noRoomText: ''
  },

// 左边栏默认第一个选择
  leftItemSelected () {
    let that = this
    let roomAreas = that.data.roomAreas
    for (let item of roomAreas) {
      if (item.id === 1) {
        item.leftSideItemActived = true
      }
    }
    that.setData({
      roomAreas: roomAreas
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.leftItemSelected()
    let today = new Date()
    let year = today.getFullYear()
    let month = today.getMonth() + 1
    let date = today.getDate()
    if (month < 10) {
      month = '0' + month
    }
    if (date < 10) {
      date = '0' + date
    }
    this.setData({
      orderDate: year + '-' + month + '-' + date
    })
    let rooms = this.data.rooms
    //0: 未预订；1.已开台；2.维修中；3.已预订
    for (let item of rooms) {
      if (item.status === 0) {
        item.roomBgColor = 'room-item'
        item.hidden = true
        this.setData({
          rooms: rooms
        })
      }
      if (item.status === 1) {
        item.roomBgColor = 'room-item room-blue'
        item.hidden = false
        this.setData({
          rooms: rooms
        })
      }
      if (item.status === 2) {
        item.roomBgColor = 'room-item room-green'
        item.hidden = false
        this.setData({
          rooms: rooms
        })
      }
      if (item.status === 3) {
        item.roomBgColor = 'room-item room-orange'
        item.hidden = false
        this.setData({
          rooms: rooms
        })
      }
    }
    this.setData({
      getRooms: rooms
    })
  },

  // 左边栏选择切换
  selectArea (e) {
    let type = e.currentTarget.dataset.type; // 选中的区域
    console.log(type, 'wewe')
    let that = this
    let roomAreas = that.data.roomAreas
    for (let item of roomAreas) {
      if (item.id === type) {
        item.leftSideItemActived = true
      } else {
        item.leftSideItemActived = false
      }
    }
    if (type === 1) { // VIP区
      that.setData({
        getRooms: that.data.rooms
      })
    }
    if (type === 2) {
      that.setData({
        getRooms: [],
        noRoomText: '暂无贵宾房间'
      })
    }
    if (type === 3) {
      that.setData({
        getRooms: [],
        noRoomText: '暂无常客房间'
      })
    }

    that.setData({
      roomAreas: roomAreas
    })
  },

  // 日期选择
  bindDateChange: function (e) {
    this.setData({
      orderDate: e.detail.value,
      dateTitle: '预订日期'
    })
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