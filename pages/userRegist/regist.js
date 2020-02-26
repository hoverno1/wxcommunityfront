const app = getApp()

Page({
  data: {

  },//点击事件
  chooseImg: function () {
    var that = this
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        that.setData({
          photos: tempFilePaths
        })
        console.log(that.data.photos)
      }
    })
  },

  uploadImg: function () {
    var that = this
    wx.uploadFile({

      url: 'https://www.plantdisrecogn.com/wxupload/goods/upload', //仅为示例，非真实的接口地址
     // url: 'http://localhost:8080/goods/upload',
      filePath: that.data.photos[0],
      name: 'file',
      formData: {
        'user': '大豆',

      },
      success: function (res) {
        var data = res.data
        console.log(data)
        wx.navigateTo({
          url: '../wait/wait',
        })
      }
    })
  },
  doRegist: function(e) {
    var formObject = e.detail.value;
    var username = formObject.username;
    var password = formObject.password;
    //简单验证
    if (username.length == 0 || password.length == 0) { //反馈数据
      wx.showToast({
        title: '用户名或者密码不能为空',
        icon: 'none', //图标
        duration: 3000
      })
    } else {
      var serverUrl = app.serverUrl;
      wx.showLoading({
        title: '请等待...',
      })
      wx.request({
        url: serverUrl + '/regist',
        method: "POST",
        data: {
          username: username,
          password: password
        },
        header: {
          'content-type': 'application/json' //默认值
        },
        //回调函数 
        success: function(res) {
          var status = res.data.status;
          wx.hideLoading();

          if (status == 200) {
            wx.showToast({
              title: '注册成功啦~~',
              icon: 'none',
              duration: 3000
            })
            app.setGlobalUserInfo(res.data.data);
            //页面跳转
            wx.navigateTo({
              url: '../userLogin/login',
            })


          } else if (status = 500) {
            wx.showToast({
              title: res.data.msg,
              icon: 'none',
              duration: 3000
            })
          }
        }
      })
    }
  },
  goLoginPage: function() {
    console("跳转至登陆页面"),
    wx.navigateTo({
      url: '../publish/publish',
    })
  }
})