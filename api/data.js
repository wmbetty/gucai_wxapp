var user = undefined;
var token = undefined;

function isLogin() {
  if (getToken() == undefined) {
    return false;
  } else {
    return true;
  }
}

function saveUser(userInfo) {
  user = userInfo;
  wx.setStorage({
    key: 'user',
    data: user,
  })
}

function getUser() {
  if (user == undefined) {
    user = wx.getStorageSync('user');
  }
  return user;
}

function saveToken(info) {
  token = info;
  wx.setStorage({
    key: 'token',
    data: token,
  })
}

function getToken() {
  if (token == undefined) {
    token = wx.getStorageSync("token");
  }
  return token;
}

function logout() {
  saveToken(null);
  saveUser(null);
}

module.exports = {
  getUser: getUser,
  saveUser: saveUser,
  isLogin: isLogin,
  getToken: getToken,
  saveToken: saveToken,
  logout: logout,
}