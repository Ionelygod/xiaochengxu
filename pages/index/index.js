// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
		index_img:'',
    msg:'开启小程序之旅',
		userInfo:{
			nickName:'请先获取用户信息'
		}
  },
  handleParent(){
		wx.switchTab({
      url:'/pages/list/list'
    })
  },
	onGotUserInfo(msg){
		console.log(msg.detail)
		console.log(this)
		if (msg.detail.userInfo){
			this.setData({
				userInfo:msg.detail.userInfo
			})
		}
	},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		// 可以通过 wx.getSetting 先查询一下用户是否授权了 "scope.record" 这个 scope
		// wx.getSetting({
		// 	success(res) {
		// 		if (!res.authSetting['scope.userInfo']) {
		// 			wx.authorize({
		// 				scope: 'scope.userInfo',
		// 				success() {
		// 					// 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
		// 					wx.openSetting()
		// 				}
		// 			})
		// 		}
		// 	}
		// })
		// 获取登录用户信息
		wx.getUserInfo({
			success: (data) => {
				this.setData({ userInfo: data.userInfo });
			}
		})

	}	,
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