//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    sizeList: ['A4', 'B4', 'A3'],
    typeList: [{
      name: 'DM单',
      code: 0
    },
    {
      name: '宣传册',
      code: 1
    },
    {
      name: '手提袋',
      code: 2
    },
    {
      name: '名片',
      code: 3
    }
    ],
    couponList: [{
      name: '五折券',
      code: 0
    }, {
      name: '七折券',
      code: 1
    }],
    craftList: [{
      name: '折页',
      code: 0,
      checked: false
    }, {
      name: '骑马订',
      code: 1,
      checked: true
    }],
    index: 0,
    price: 0.0,
  },

  onLoad: function () {
    console.log('calculator')
  },

  changeSize: function (e) {
    console.log(this.data.sizeList[e.detail.value]);
    this.setData({
      index: e.detail.value
    })
  },

  changeType: function (e) {
    console.log(this.data.typeList[e.detail.value].name)
    this.setData({
      index: e.detail.value
    })
  },

  changeCoupon: function (e) {
    this.setData({
      index: e.detail.value
    })
  },

  // 计算价格: 0.0
  calculatePrice: function (e) {
    wx.showLoading();
    wx.hideLoading();
    var nowPrice = this.data.price + 100;
    console.log('计算价格 ' + nowPrice);
    this.setData({
      price: nowPrice
    })
  },

  checkCraftChanged(e) {
    var checkFlag;
    for (var craft of this.data.craftList) {
      checkFlag = false;
      for (var checkCode of e.detail.value) {
        if (checkCode == craft.code) {
          checkFlag = true;
        }
      }
      craft.checked = checkFlag;
    }
    for (var value of this.data.craftList) {
      console.log( value.name + "#" +value.checked);
    }
  }
})