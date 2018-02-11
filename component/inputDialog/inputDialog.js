// component/inputDialog/inputDialog.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showModal: { // 组件数据
      type : Boolean,
      value : false,
      observer () {

      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 弹出框蒙层截断touchmove事件
     */
    preventTouchMove: function () {
    },
    /**
     * 隐藏模态对话框
     */
    hideModal: function () {
      this.setData({
        showModal: false
      });
    },
    /**
     * 对话框取消按钮点击事件
     */
    onCancel: function () {
      this.hideModal()
    },
    /**
     * 对话框确认按钮点击事件
     */
    onConfirm: function () {
      this.hideModal()
    }
  }
})
