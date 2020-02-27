const app = getApp()

Page({
  data: {

  },
  goLoginPage: function () {
    wx.switchTab({
      url: '../publish/publish',
    })
  },
  //点击事件
  chooseImg: function () {
    var self = this
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        self.setData({
          photos: tempFilePaths
        })
        console.log(self.data.photos)
      }
    })
  },

  uploadImg: function () {
    var self = this
    wx.uploadFile({

      url: 'http://localhost:8080/queryPost', //仅为示例，非真实的接口地址
     // url: 'http://localhost:8080/queryPost',
      filePath: self.data.photos[0],
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
  }
})