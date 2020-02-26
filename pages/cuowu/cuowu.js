// pages/UpWords/UpWords.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue: "",
  },

  wordInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
    console.log(this.data.inputValue);
  },

  wordsUpLodaing: function () {
  
    wx.request({
      //url:'https://www.nongyeshibie.top/goods/word', 
      url: 'https://www.plantdisrecogn.com/wxupload/goods/word',
      method: 'POST',
      header: {
        //默认编码方式，可以使用get.Parameter()获取数据
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        //引用数据时候不加引号
        word: this.data.inputValue
      },
      success(res) {
        wx.navigateTo({
          url: '../category/category'
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