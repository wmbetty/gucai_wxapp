/**
 * Created by Administrator on 2018/1/15.
 */
// 微信提示信息
function showInfoModal(title, txt, showCancel, callback) {
  wx.showModal({
    confirmText: '确认',
    title: title,
    content: txt,
    showCancel: showCancel,
    success: (res) => {
      callback(res)
    }
  })
}

// 本地存储
function setStorage(key, value) {
  wx.setStorage({
    key: key,
    data: value
  })
}

function getStorage(key, callback) {
  wx.getStorage({
    key: key,
    success: (res) => {
      callback(res)
    }
  })
}

function removeStorage(key, callback) {
  wx.removeStorage({
    key: key,
    success: function(res) {
      callback(res)
    }
  })
}

// 操作提示
function showToast(title) {
  wx.showToast({
    title: title,
    icon: 'none',
    duration: 2000
  })
}

// 调起客户端扫码界面
function scanCode(callback) {
  // 允许从相机和相册扫码
  wx.scanCode({
    success: (res) => {
      callback(res)
    }
  })
}

module.exports = {
  showInfoModal: showInfoModal,
  setStorage: setStorage,
  getStorage: getStorage,
  showToast: showToast,
  scanCode: scanCode
};