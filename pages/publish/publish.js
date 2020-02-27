// pages/publish/publish.js
var app = getApp
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:"",
    password:"",
    endUsername:"",
    endPassword:""
  },
  goRegist : function(){
    wx.redirectTo({
      url: '../userRegist/regist',
    })
  },
  //提交功能绑定在form表单上即<form bindsubmit='doLogin'>中的doLogin
  doLogin:function(e){
    var self = this;
    self.setData({
      username: e.detail.value.username,
      password: e.detail.value.password,
    })
    wx.request({
      url: 'http://localhost:8080/Test',
      //url: 'https://www.plantdisrecogn.com/wxupload/goods/getUser',//自己请求的服务器的地址
      method: 'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (req) {
        console.log(req.data);
        self.setData({
        })

      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})