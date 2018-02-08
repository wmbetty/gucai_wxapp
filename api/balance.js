/**
 * Created by Administrator on 2018/1/17.
 */
function getBalance(callbackcount, callback){
  wx.request({
    url: '',
    data: {
    },
    method: 'GET',
    header: {'content-Type': 'application/json'},
    success: function(res){
      if(res.code === 200){
        callback(res.data);
      }
    }
  })
}

module.exports = {
  getBalance: getBalance
}