// pages/orderRoom/orderRoom.js
import wxJs from '../../utils/wxJs'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    roomInfo: {},
    date: null,
    arriveDate: null,
    arrivetTime: '12:01',
    name: '',
    mobile: '',
    phone: '',
    infos: '', //备注
    people: 1 //预计人数
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    let today = new Date()
    let year = today.getFullYear()
    let month = today.getMonth() + 1
    let date = today.getDate()
    that.setData({
      arriveDate: year + '-' + month + '-' + date
    })

    wxJs.getStorage('selectedRoom', function (res) {
      that.setData({
        roomInfo: res.data
      })
      console.log(that.data.roomInfo, 'ooo')
    })
  },

  // 日期选择
  bindDateChange: function (e) {
    this.setData({
      arriveDate: e.detail.value
    })
  },

  // 时间点选择
  bindTimeChange: function(e) {
    this.setData({
      arrivetTime: e.detail.value
    })
  },

  inputEnter (e) {
    let type = e.currentTarget.dataset.type;
    let value = e.detail.value
    switch (type) {
      case 'people':
        this.setData({
          people: value
        })
        break;
      case 'name':
        this.setData({
          name: value
        })
        break;
      case 'phone':
        this.setData({
          phone: value
        })
        break;
      case 'infos':
        this.setData({
          infos: value
        })
        break;
    }
  },

  // 人数减
  numCut () {
    let that =this
    let people = that.data.people
    if (people > 1) {
      people --;
      that.setData({
        people: people
      })
    }
  },

  // 人数加
  numAdd () {
    let that =this
    let people = that.data.people
    if (people >= 1) {
      people ++;
      that.setData({
        people: people
      })
    }
  },

  //提交订房
  submitRoom () {
    let that = this
    let data = that.data
    if (!data.name) {
      wxJs.showInfoModal('提示', '请填写姓名', false, function (res) {
      })
    }
    if ((!/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(data.phone)) || (!(/^1(3|4|5|7|8)\d{9}$/.test(data.phone)))) {
      wxJs.showInfoModal('提示', '请填写正确的手机号码', false, function (res) {
      })
    }
    // 请求提交，成功后提示：订房成功
    if (data.name && data.phone) {
      wxJs.showToast('订房成功')
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