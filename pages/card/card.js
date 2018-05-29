//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    cards: [{
        url: '../../img/swiper/1.jpg',
        title: '可口可乐',
        info: '美国可口可乐',
        price: '9.9'
      },
      {
        url: '../../img/swiper/2.jpg',
        title: '可口可乐',
        info: '美国可口可乐',
        price: '9.9'

      },
      {
        url: '../../img/swiper/3.jpg',
        title: '可口可乐',
        info: '美国可口可乐',
        price: '9.9'
      }
    ],
    autoplay: true,
    duration: 1000,
  },
  //事件处理函数
  tapCard: function () {
    console.log('点击名片')
    wx.switchTab({
      url: '../mine/mine'
    })
  },
  onLoad: function () {

  }
})