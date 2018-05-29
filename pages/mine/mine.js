// mine.js

const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '我的',
    userInfo: {},
    mineList: [{
        title: '优惠券',
        url: '../coupon/coupon'
      },
      {
        title: '交易记录',
        url: '../history/history'
      }
    ]
  },

  getInfos: function () {
    console.log('获取用户信息');
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('mine');
    this.getInfos();
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function (res) {
              console.log('授权成功' + res)
            },
            fail: function () {
              // fail
              console.log('授权失败')
            },
            complete: function () {
              // complete
            }
          })
        } else {
          console.log('没有获取信息')
        }
      },
      fail: function () {
        console.log('获取设置失败')
      }
    })
  },

  tapMineItem: function (event) {
    var url = event.target.dataset.url
    var index = event.target.dataset.index
    console.log("点击  " + index)
    console.log(event)
    if (url != undefined) {
      wx.navigateTo({
        url: url,
        success: function (res) {
          // success
        },
        fail: function () {
          // fail
        },
        complete: function () {
          // complete
        }
      })
    }
  }

})