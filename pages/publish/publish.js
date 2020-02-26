// pages/publish/publish.js
var app = getApp
Page({

  /**
   * 页面的初始数据
   */
  data: {
    realUrl: '',
    nickName: '', //用户的名称
    avatarUrl: '', //用户的头像
    saveUserInfo: {
      username: "",
      password: ""
    }
  },
  onGotUserInfo: function(e) {
    // console.log("nickname=" + e.detail.userInfo.nickName);
    // console.log("avatarUrl=" + e.detail.userInfo.avatarUrl);
    // console.log("gender=" + e.detail.userInfo.gender);
    // console.log("city=" + e.detail.userInfo.city);
    // console.log("province=" + e.detail.userInfo.province);
    // console.log("country=" + e.detail.userInfo.country);
    var rawData = JSON.parse(e.detail.rawData);
    this.setData({
      nickName: e.detail.userInfo.nickName,
      avatarUrl: e.detail.userInfo.avatarUrl,
    })
  },
  goRegist: function() {
    wx.navigateTo({
      url: '../userRegist/regist',
    })
  },
  doLogin: function(e) {
    var me = this;
    var formObject = e.detail.value;
    var username = formObject.username;
    var password = formObject.password;
    //简单验证
    if (username.length == 0 || password.length == 0) { //反馈数据
      wx.showToast({
        title: '你好,用户名和密码不能为空哦',
        icon: 'none', //图标
        duration: 3000
      })
    } else {
      var serverUrl = app.serverUrl;
      wx.showLoading({
        title: '请等待...',
      })
      wx.request({
        url: serverUrl + '/login',
        method: "POST",
        data: {
          username: username,
          password: password
        },
        header: {
          'content-type': 'application/json' //默认值
        },
        //回调函数 
        //返回
        success: function(res) {
          var status = res.data.status;
          if (status == 200) {
            wx.hideLoading();
            wx.showToast({
              title: '登陆成功啦',
              icon: 'none',
              duration: 3000
            })
            var saveUserInfo = me.data.saveUserInfo;
            saveUserInfo.password = password;
            saveUserInfo.username = username;
            app.saveUserInfo(saveUserInfo);
            app.setGlobalUserInfo(res.data.data);
            var realUrl = me.data.realUrl;
            console.log("realUrl" + realUrl);
            realUrl = app.globalData.realUrl;
            console.log("publisherId" + app.globalData.publisherId);
            if (realUrl == '' || realUrl == null) {
              //跳转
              wx.switchTab({
                url: '../release/release',
              })
            } else {
              wx.redirectTo({
                url: realUrl
              })
            }
          } else if (status == 500) {
            //失败 弹出框
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log("result：" + app.globalData.realUrl);
    var me = this;
    var realUrl = e.realUrl;
    console.log(realUrl);
    if (realUrl != null && realUrl != '' && realUrl != undefined) {
      realUrl = realUrl.replace('@', '=');
      realUrl = realUrl.replace('#', '?');
      //../videoinfo/videoinfo#videoInfo@[object Object]
      console.log("真实的路径" + realUrl);
      me.setData({
        realUrl: realUrl
      })
    }
    var user = app.getSaveUserInfo();
    var username = user.username;
    var password = user.pasword;
    if (username != null && username != undefined && username != '' && password != null && password != undefined &&
      password != '') {
      me.setData({
        username: username,
        password: password
      })
    }
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