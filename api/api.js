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

//
function verifyWoker(cOperID,cPassWord,call){
  var data={
    url:'MobCheckOperator',
    param:{
      cOperID: cOperID,
      cPassWord: cPassWord,
      paramName:'cOperatorString',
      paramType:'form',
    },
    callBack: call,
  }
  Method.Post(data);
}

module.exports={
  testLinke: testLinke,
  verifyWoker: verifyWoker,
}