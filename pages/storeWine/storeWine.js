// pages/orderRoom/orderRoom.js
import wxJs from '../../utils/wxJs'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    roomInfo: {},
    brand: '',
    wStorage: '',
    mobile: '',
    phone: '',
    infos: '', //备注
    count: 1, //数量
    noImg: true,
    hasImg: false,
    picUrl: [], // 上传图片列表
    chooseImageCount: 3 // 上传图片数目
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this

    wxJs.getStorage('selectedRoom', function (res) {
      that.setData({
        roomInfo: res.data
      })
    })
    wxJs.getStorage('chooseBrandInfo', function (res) {
      if (res.data) {
        that.setData({
          brand: res.data.name
        })
      }
    })
    wxJs.getStorage('chooseWineStore', function (res) {
      if (res.data) {
        that.setData({
          wStorage: res.data.name
        })
      }
    })
  },

  inputEnter (e) {
    let type = e.currentTarget.dataset.type;
    let value = e.detail.value
    switch (type) {
      case 'count':
        this.setData({
          count: value
        })
        break;
      case 'brand':
        this.setData({
          brand: value
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

  // 酒数减
  numCut () {
    let that =this
    let count = that.data.count
    if (count > 0) {
      count = (count - 0.1).toFixed(1);
      that.setData({
        count: count
      })
    }
  },

  // 酒数加
  numAdd () {
    let that =this
    let count = that.data.count
    count ++;
    that.setData({
      count: count
    })
  },

  //提交订房
  submitRoom () {
    let that = this
    let data = that.data
    if (!data.brand) {
      wxJs.showInfoModal('提示', '请选择酒品牌', false, function (res) {
      })
    }
    if ((!/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(data.phone)) || (!(/^1(3|4|5|7|8)\d{9}$/.test(data.phone)))) {
      wxJs.showInfoModal('提示', '请填写正确的手机号码', false, function (res) {
      })
    }
    // 请求提交，成功后提示：订房成功
    if (data.brand && data.phone) {
      wxJs.showToast('订房成功')
    }
  },

  goChooseBrand () {
    wx.navigateTo({
      url: '/pages/chooseWineBrand/chooseWineBrand'
    })
  },

  goChooseStorage () {
    wx.navigateTo({
      url: '/pages/wineStorage/wineStorage'
    })
  },

  // 上传图片
  choosePic () {
    var that = this
    var pics = that.data.picUrl
    var chooseImageCount = that.data.chooseImageCount
    wx.chooseImage({
      count: chooseImageCount, // 默认9
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        if (pics.length === 0) {
          pics = res.tempFilePaths
        } else {
          for (let item of res.tempFilePaths) {
            pics.push(item)
          }
        }

        // 还可选择的图片数目
        if (pics.length <= 3) {
          chooseImageCount = 3 - pics.length
          that.setData({
            chooseImageCount: chooseImageCount
          })
        }

        that.setData({
          picUrl: pics,
          hasImg: true
        })
        if (pics.length === 3) {
          that.setData({
            noImg: false
          })
        }
        // wx.uploadFile({
        //   url: `https://redpack.exiangjian.cn/api/upload`, //上传图片url
        //   filePath: tempFilePaths[0],
        //   name: 'files',
        //   success: function(res){
        //     console.log(res, 'sss')
        //     var data = JSON.parse(res.data).data
        //     that.setData({
        //       picUrl: data.files[0],
        //       hasImg: true,
        //       noImg: false
        //     })
        //     console.log(data, 'img..data')
        //   }
        // })
      },
      fail: (err) => {
        console.log(err.errMsg, 'msg')
        // var info
        // if (err.errMsg === 'chooseImage:fail cancel msg') {
        //   info = '没有拍照或选择图片'
        // }
        // wxJs.showInfoModal('提示', info, false, function () {});
      }
    })
  },

  // 预览图片
  previewImage (e) {
    let img_url = e.currentTarget.dataset.type
    wx.previewImage({
      current: img_url,
      urls: this.data.picUrl
    })
  },

  // 删除图片
  deleteImg (e) {
    let current_imgSrc = e.currentTarget.dataset.src
    let allImg = this.data.picUrl
    let chooseImageCount = this.data.chooseImageCount
    for (let i = 0; i < allImg.length; i++) {
      if (allImg[i] === current_imgSrc) {
        allImg.splice(i, 1)
        chooseImageCount ++
        this.setData({
          picUrl: allImg,
          noImg: true,
          chooseImageCount: chooseImageCount
        })
      }
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