function showTips(content){
  wx.showModal({
    title: "提示",
    content: content,
    showCancel: false,
    confirmText: '确定',
  })
}

function showTips(content,success) {
  wx.showModal({
    title: "提示",
    content: content,
    showCancel: false,
    confirmText: '确定',
    success:success
  })
}

module.exports = {
  showTips:showTips,
}