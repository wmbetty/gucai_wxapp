//login.js
  import {showInfoModal} from '../../utils/wxJs'

//获取应用实例
const app = getApp()

Page({
  data: {
    phone: null,
    code: null,
    flag : false,
    sendCodeText : "发送验证码",
    isEmployee: false, //是否是员工,
    password: null,
    codeTime: 60, //验证码倒计时
    codeDis: false //按钮点击状态，是否禁用
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
  },
  inputEnter (e) {
    var type = e.currentTarget.dataset.type;
    var value = e.detail.value;
    switch (type){
      case 'phone':
        this.setData({
          phone:value
        })
        break;
      case 'code':
        this.setData({
          code:value
        })
        break;
      case 'password':
        this.setData({
          password:value
        })
        break;
    }
  },

  // 发送验证码倒计时
  codeTime (data) {
    var that = this;
    that.setData({
      sendCodeText : 60
    })
    let time = setInterval(()=>{
      let sendCodeText = data.sendCodeText
      sendCodeText --;
      that.setData({
        sendCodeText : sendCodeText
      })
      if(sendCodeText === 0){
        clearInterval(time)
        that.setData({
          sendCodeText : "获取验证码",
          codeDis : false
        })
      }
    },1000)
  },

  // 发送验证码
  sendCode (e) {
    var that = this
    var data = that.data
    if ((!/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(data.phone)) || (!(/^1(3|4|5|7|8)\d{9}$/.test(data.phone)))) {
      showInfoModal('提示', '请填写正确的手机号码', false, function (res) {})
    } else {
      that.setData({
        codeDis: true
      })
      this.codeTime(data)

      // 请求验证码
    }
  },

  // 登录
  login () {
    var data = this.data
    // if (!data.isEmployee) {
    //   if ((!/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(data.phone)) || (!(/^1(3|4|5|7|8)\d{9}$/.test(data.phone)))) {
    //     showInfoModal('提示', '请填写正确的手机号码', false, function (res) {})
    //   }
    //   if (!data.code) {
    //     showInfoModal('提示', '请填写验证码', false, function (res) {})
    //   }
    // } else {
    //   if (!data.password) {
    //     showInfoModal('提示', '请填写密码', false, function (res) {})
    //   }
    //   if ((!/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(data.phone)) || (!(/^1(3|4|5|7|8)\d{9}$/.test(data.phone)))) {
    //     showInfoModal('提示', '请填写正确的手机号码', false)
    //   }
    // }

    // 请求登录(登录时，微信授权获取用户昵称和头像，作为用户资料)
    //登录成功，判断用户角色(用户或工作人员)
    //记录登录状态：已登录状态，直接打开小程序首页
    wx.switchTab({
      url: `/pages/index/index` //登录成功后到主页
    })
  },

  // 员工登录
  goEmployeeLogin () {
    var that = this
    that.setData({
      isEmployee: !that.data.isEmployee
    })
  },

  goProtocol () {
    wx.navigateTo({
      url: '/pages/protocols/protocols'
    })
  }
})
