// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    diease1:"红蜘蛛",
    diease2: "病毒病",
    diease3: "害虫",
    diease4: "杀虫剂",
    diease5: "细菌病",
    diease6: "健康",
    diease7: "霜霉病",
    diease8: "菌核病",
    showbanfa1: true,
    showbanfa2: true,
    showbanfa3: true,
    showbanfa4: true,
    showbanfa5: true,
    showbanfa6: true,
    showbanfa7: true,
    showbanfa8: true,
    shu: [],
    score: [],
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
    //  url: 'http://localhost:8080/goods/getUser',
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
   
            score: list[1],
            img_hidden: false
          
          })
          if (that.data.shu===that.data.diease1){
          that.setData({
            showbanfa1:false
          })
          } else if (that.data.shu === that.data.diease2) {
            that.setData({
              showbanfa2: false
            })
          } else if (that.data.shu === that.data.diease3) {
            that.setData({
              showbanfa3: false
            })
          } else if (that.data.shu === that.data.diease4) {
            that.setData({
              showbanfa4: false
            })
          } else if (that.data.shu === that.data.diease5) {
            that.setData({
              showbanfa5: false
            })
          } else if (that.data.shu === that.data.diease6) {
            that.setData({
              showbanfa6: false
            })
          } else if (that.data.shu === that.data.diease7) {
            that.setData({
              showbanfa7: false
            })
          } else if (that.data.shu === that.data.diease8) {
            that.setData({
              showbanfa8: false
            })
          }
        }
      }
    })
  },
  yes: function () {

    wx.request({
      url: 'https://www.plantdisrecogn.com/wxupload/goods/send',
      method: 'post', //仅为示例，并非真实的接口地址
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
        wx.navigateTo({
          url: '../cuowu/cuowu',
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