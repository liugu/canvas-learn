function getdata(callback) {
  //这里我们假设是从后端获取数据
  setTimeout(function () {
    //假设我们获取到数据info
    var info = {
      "id": 1,
      "name": '张三'
    }
    //得到数据以后执行函数方法
    callback(info)//这个就是回调函数
  }, 2000)
}

// var callback1 = function (info) {
//   console.log(info)
// }

function callback(info) {
  console.log(info)
}

getdata(callback)

// getdata(function (info) {
//     console.log(info)
// })

