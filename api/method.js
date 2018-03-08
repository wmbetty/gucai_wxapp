var Config = require('config.js');
var Log = require('../utils/log.js');
var Data = require('data.js');
var Md5 = require('../utils/md5.min.js');
var CryptoJS = require('../utils/crypto-js/crypto-js.js')
var Parser = require('../libs/dom-parser.js')

function Post(data) {
  var url = data.url;
  var param = data.param;
  var callBack = data.callBack;
  param = paramPreEncode(param);

  console.log(param);

  //通用接口要求处理
  param.TimeStamp = Date.now();
  param.CheckSum = generaleCheckSum(param.TimeStamp);
  Log.i(param);
  // var loadingText = data.loadingText == undefined ? '正在提交' : data.loadingText;
  wx.showLoading({
    title: "正在请求",
    mask: true,
  })
  wx.request({
    url: Config.getBaseUrl() + url,
    data: param,
    method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    complete: function (res) {
      onComplete(res, callBack)
    },
    fail: function (res) {
      onFail(res, callBack)
    },
    success: function (res) {
      onSuccess(res, callBack);
    }
  })

}


function paramPreEncode(param) {
  if (param.paramType != undefined) {
    var value;
    if (param.paramType == 'form') {
      value = serialize(param);
    } else if (param.paramType = 'json') {
      value = param.paramJson;
    }
    value = encode(value);
    param[param.paramName] = value;
  }
  console.log(param);
  return param;
}

function Get(data) {
  var url = data.url;
  var param = data.param;
  var callBack = data.callBack;
  param = paramPreEncode(param);
  //通用接口要求处理
  param.TimeStamp = Date.now();
  param.CheckSum = generaleCheckSum(param.TimeStamp);
  Log.i(param);
  // var loadingText = data.loadingText == undefined ? '正在提交' : data.loadingText;
  wx.showLoading({
    title: "正在请求",
    mask: true,
  })
  wx.request({
    url: Config.getBaseUrl() + url,
    data: param,
    method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    header: {
      'content-type': 'text/xml; charset=utf-8'
    },
    complete: function (res) {
      onComplete(res, callBack)
    },
    fail: function (res) {
      onFail(res, callBack)
    },
    success: function (res) {
      onSuccess(res, callBack);
    }
  })

}

function onComplete(res, callBack) {
  Log.i(res);
  if (isFunction(callBack.complete)) {
    callBack.complete(res);
  }
}

function onFail(res, callBack) {
  wx.hideLoading();
  wx.showModal({
    title: '请求错误',
    showCancel: false,
    confirmText: '确定',
  })
  if (isFunction(callBack.fail)) {
    callBack.fail(res);
  }
}

function onSuccess(res, callBack) {
  wx.hideLoading();
  var parser = new Parser.DOMParser();
  var xmlDoc = parser.parseFromString(res.data);
  var xmlConent = xmlDoc.getElementsByTagName("string")[0].firstChild.nodeValue;
  if (xmlConent != undefined) {
    res.data = JSON.parse(xmlConent);
  }
  if (res.data.success && res.data.errorCode == 0) {

    if (isFunction(callBack.success)) {
      res.data.data = decode(res.data.dataObject);
      callBack.success(res);
    }
  } else {
    if (res.data.message || res.data.errorMessage) {
      wx.showModal({
        title: '提示',
        content: res.data.message ? res.data.message : res.data.errorMessage,
        showCancel: false,
        confirmText: '确定',
      })
    }
    if (isFunction(callBack.fail)) {
      callBack.fail(res); Ï
    }
  }
}

//
function generaleCheckSum(timestamp) {
  var hash = Md5(Config.ApiKey + timestamp);
  console.log(Config.ApiKey + timestamp);
  console.log(hash);

  return hash.toLowerCase();
}

//解密
function decode(message) {
  var keyHex = CryptoJS.enc.Utf8.parse(Config.Secret);
  // direct decrypt ciphertext
  var decrypted = CryptoJS.DES.decrypt({
    ciphertext: CryptoJS.enc.Base64.parse(message)
  }, keyHex, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  return decrypted.toString(CryptoJS.enc.Utf8);
}

//加密
function encode(message) {
  var keyHex = CryptoJS.enc.Utf8.parse(Config.Secret);
  var encrypted = CryptoJS.DES.encrypt(message, keyHex, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  console.log(message+"\n加密：" + encrypted.toString(), encrypted.ciphertext.toString(CryptoJS.enc.Base64));
  return encrypted.ciphertext.toString(CryptoJS.enc.Base64);
}

function serialize(obj) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p) && obj[p]!=undefined) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return "|" + str.join("|") + "|";
}

function isFunction(fn) {
  return Object.prototype.toString.call(fn) === '[object Function]';
}


module.exports = {
  Get: Get,
  Post: Post,
  decode: decode,
  encode: encode,
}