var isLog = true;

function i(data){
  if(isLog){
    console.log(data);
  }
}

function w(data) {
  if (isLog) {
    console.log(data);
  }
}

function e(data) {
  console.log(data);
}
module.exports ={
  i:i,
  w:w,
  e:e,
}