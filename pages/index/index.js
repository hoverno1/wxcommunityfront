// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shu: [],
    score:[],
    showView: false
  },
  onChangeShowState: function () {
    this.setData({
      showView: (!this.data.showView)
    })
  },
  houduanRequest: function () {
    var that = this;
    wx.request({
      //url: 'http://localhost:8080/goods/getUser',
      url: 'https://www.plantdisrecogn.com/wxupload/goods/getUser',//自己请求的服务器的地址
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      
      success: function (req) { 
        var list = req.data;
        if (list == null) {
          wx.showToast({
            title: 'ErrorMessage',
            icon: 'false',   //图标
            duration: 1500  //提示的延迟的时间
          })
        } else {
          that.setData({
            shu: list[0],
          
            img_hidden:false
      
          })
        }
      }
    })
  },
yes:function(){

  wx.request({
    url: 'https://www.plantdisrecogn.com/wxupload/goods/send',
    method:'post', //仅为示例，并非真实的接口地址
    data: {
      x: 'yes'
    },
    header: {
      'content-type': 'application/x-www-form-urlencoded' // 默认值
    },
    success(res) {
      wx.switchTab({
        url: '../category/category',
      })
      console.log(res.data)
    }
  })
},

  no: function () {

    wx.request({
      url: 'https://www.plantdisrecogn.com/wxupload/goods/send', //仅为示例，并非真实的接口地址
      data: {
        x: 'no'
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success(res) {
        wx.redirectTo({
          url: '../category/category',
        })
      }
    })
  },







  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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