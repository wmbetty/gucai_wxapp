var user = undefined;
var token = undefined;

function isLogin() {
  if (getUser() ) {
    return false;
  } else {
    return true;
  }
}

function isWorker() {
  if (getUser().type =='employee') {
    return true;
  } else {
    return false;
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
  if (user ) {
    user = wx.getStorageSync('user');
  }
  return user;
}

// function saveToken(info) {
//   token = info;
//   wx.setStorage({
//     key: 'token',
//     data: token,
//   })
// }

// function getToken() {
//   if (token == undefined) {
//     token = wx.getStorageSync("token");
//   }
//   return token;
// }

function logout() {
  // saveToken(null);
  saveUser(undefined);
}

module.exports = {
  getUser: getUser,
  saveUser: saveUser,
  isLogin: isLogin,
  // getToken: getToken,
  // saveToken: saveToken,
  logout: logout,
  isWorker: isWorker,
}