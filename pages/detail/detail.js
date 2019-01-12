// pages/detail/detail.js
const datas = require('../../datas/list-data.js')
const {list_data} = datas
const appData = getApp()
console.log(appData)

Page({
	

	/**
	 * 页面的初始数据
	 */
	data: {
		detailObj:{},
		isCollection:false,
		isMusicPlay:false
	},
	handleColltion(){
		const isCollection = !this.data.isCollection
		this.setData({
			isCollection: isCollection
		})
		let title = isCollection?'收藏成功':'取消收藏'
		wx.showToast({
			title,
			icon: 'success'
		})
		const {index} = this.data
		let obj = wx.getStorageSync('isCollection')
		if(!obj){
			obj = {}
		}
		obj[index] = isCollection

		wx.setStorage({
			key:"isCollection",
			data: obj
		})

	},
	handleMusicPlay(){
		const isMusicPlay = !this.data.isMusicPlay
		this.setData({
			isMusicPlay: isMusicPlay
		})
		const { dataUrl, title, coverImgUrl} = this.data.detailObj.music
		if(isMusicPlay){
			// 播放
			wx.playBackgroundAudio({
				dataUrl, title, coverImgUrl
			})

		}else{
			//暂停
			wx.stopBackgroundAudio()
		}
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		const index = options.index

		const detailObj = list_data[index]
		this.setData({
			detailObj: detailObj,
			index
		})

		const obj = wx.getStorageSync('isCollection')
		if(obj[index]){
			this.setData({
				isCollection:true
			})
		}

		if (index === appData.data.pauseIndex && appData.data.isPayl){
			this.setData({
				isMusicPlay:true
			})
		}
		wx.onBackgroundAudioPlay(() => {
			this.setData({
				isMusicPlay: true
			})
			appData.data.pauseIndex = index;
			appData.data.isPayl = true;

		})

		wx.onBackgroundAudioPause(() => {
			this.setData({
				isMusicPlay: false
			})
			appData.data.isPayl = false;

		})
		
		
		
		
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