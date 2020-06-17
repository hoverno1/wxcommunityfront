// pages/community/community-detail/community-detail.js
//var postsData = require('../../../data/posts-data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    postsData:[],
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var self = this;
    //console.log(self.data.postId);
    wx.request({
      url: 'http://localhost:8080/queryPost',
      //url: 'https://www.plantdisrecogn.com/wxupload/goods/getUser',//自己请求的服务器的地址
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (req) { 
        var postsData = req.data;
          self.setData({
            postsData: req.data
    });
    
    // 获取从community传来的id
    var postId = options.id;
        self.setData({
          postId: postId
        })
    //console.log(postId);
    //不知道为什么数据库中postId会自动增加10
    var postData = postsData[postId-10];
    // console.log(postData);
    self.setData({
      postData: postData
    })
  
  }
})
  },

  // 留言编程部分

  writemessage:function(){
    var self = this;
    wx: wx.navigateTo({//this.data.title  this.data.no
      url: '../../message/message?postId=' + self.data.postId ,
    })
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