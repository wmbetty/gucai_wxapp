var Method = require('method.js');
var Data = require('data.js');

function testLinke(call){
  var data ={
    url:'TestLink',
    param:{

    },
    callBack:call,
  }
  Method.Get(data);
}

//验证员工账号和密码，用于员工登录
function verifyWoker(cOperID,cPassWord,call){
  var data={
    url:'MobCheckOperator',
    param:{
      cOperID: cOperID,
      cPassWord: cPassWord,
      //请求参数的名称
      paramName:'cOperatorString',
      //post 请求类型
      paramType:'form',
    },
    callBack: call,
  }
  Method.Post(data);
}

//取房台信息 只能实时 房类是主JSON，房类下的房间是子JSON
function getRoomTypeAndRoom(timestamp,call) {
  var data = {
    url: 'GetRoomTypeAndRoom',
    param: {
    },
    callBack: call,
  }
  Method.Get(data);
}

//取房台分类列表
function getRoomTypeList(timestamp, call) {
  var data = {
    url: 'GetRoomTypeList',
    param: {
    },
    callBack: call,
  }
  Method.Get(data);
}

//取房台信息 参数RoomDB格式:|RoomTypeID=|RoomNo=|QueryDate=yyyy-MM-dd HH:mm:ss| 说明:QueryDate查询日期 RoomTypeID房台类型代码，RoomNo房台代码,两参数空取全部房台
function getRoomInf(roomTypeID, roomNo, queryDate, call) {
  var data = {
    url: 'GetRoomInf',
    param: {
      RoomTypeID: roomTypeID,
      RoomNo: roomNo,
      // yyyy-MM-dd HH:mm:ss
      QueryDate: queryDate,
      //请求参数的名称
      paramName: 'RoomDB',
      //post 请求类型
      paramType: 'form',
    },
    callBack: call,
  }
  Method.Post(data);
}

module.exports={
  testLinke: testLinke,
  verifyWoker: verifyWoker,
  getRoomTypeAndRoom: getRoomTypeAndRoom,
  getRoomTypeList: getRoomTypeList,
  getRoomInf: getRoomInf,
}