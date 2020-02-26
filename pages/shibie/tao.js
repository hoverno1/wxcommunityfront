// pages/classic/classic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    photos: "",
    img_hidden: true,
    counter2: 'counter2'
  },
  //点击事件
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
      filePath: that.data.photos[0],
      name: 'file',
      formData: {
        'user': '桃'
      },
      success: function (res) {
        var data = res.data
        console.log(data)
        wx.navigateTo({
          url: '../upload/upload',
        })
       
        //do something
      }
    })
  },
  locationUpLoading: function () {
    var that = this;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        const latitude = res.latitude;
        const longitude = res.longitude;
        const speed = res.speed;
        const accuracy = res.accuracy;
        that.setData({
          lat: latitude,
          lon: longitude,
        })
        console.log(that.data.lat)
        console.log(that.data.lon)
        wx.request({
          url: 'https://www.plantdisrecogn.com/wxupload/goods/location',
          method: 'POST',
          header: {
            //默认编码方式，可以使用get.Parameter()获取数据
            'content-type': 'application/x-www-form-urlencoded'
          },
          data: {
            //引用数据时候不加引号
            latitude: latitude,
            longitude: that.data.lon
          },
          success(res) {
            const data = res.data
          }
        })
        wx.showModal({
          title: '当前位置',
          content: '纬度：' + that.data.lat + '，经度：' + that.data.lon,
        })
      },
    })
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      tempFilePaths: '',
      img_hidden: true,
      counter2: 'counter2'
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})