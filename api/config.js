var debug = true;
const ApiKey = 'FAF6FA19-1BE0-4114-952E-02C38CA050FA';
const Secret ='20170728';
var urlDebug = 'http://1h7948394k.51mypc.cn:8081/CatWalkWebService.asmx/';
var urlRelease = 'http://1h7948394k.51mypc.cn:8081/CatWalkWebService.asmx/';
function getBaseUrl() {
  return debug ? urlDebug : urlRelease;
}

module.exports = {
  getBaseUrl: getBaseUrl,
  ApiKey: ApiKey,
  Secret: Secret,
}