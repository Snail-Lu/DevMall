// pages/member/member.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      name: '路明路',
      cardNo: 'WX12345678',
      currentPoint: 500,
      nextLevelPoint: 1000,
      currentLevelLabel: '普通会员',
      currentLevel: 0
    },
    imageUrl: '',
    descList: [  // mock data
      {
        id: 0,
        label: '等级说明',
        content: [
          '关注官方微信公众号并在商城小程序中完成注册，即可成为会员，享受专属的会员服务。',
          '等级有效期内，会员消费金额一旦满足如下对应的升级规则即可升级：',
          '●普通会员V1：单笔或累计消费1000元以下；',
          '●白银会员V2：单笔或累计消费满1000-1999元以下；',
          '●黄金会员V3：单笔或累计消费满2000-4999元以下；',
          '●铂金会员V4：单笔或累计消费满5000-9999元以下；',
          '●钻石会员V5：单笔或累计消费满10000元以上。',
        ],
        show: false
      },
      {
        id: 1,
        label: '累计消费金额',
        content: [
          '您在过去一年内，通过线下实体门店累计消费金额或者商城小程序中的累计消费金额（所有渠道消费金额按实际支付金额为准，商城小程序的订单需要您确认收货后消费金额才可以累积）。以过去一年的累计消费金额定级，并设置保级周期一年；在保级周期内，只升级不降级；如发生升级，则保级周期将从升级之日起重新计算一年；保级周期结束后，系统将根据过去一年的累计消费金额重新定级；',
        ],
        show: false
      },
      {
        id: 2,
        label: '消费积分',
        content: [
          '会员在线下实体门店或者商城小程序中购物时所产生的积分，不同等级享受不同倍数积分。',
          '●普通会员V1：消费1元=1积分；',
          '●白银会员V2：消费1元=1.2积分；',
          '●黄金会员V3：消费1元=1.5积分；',
          '●铂金会员V4：消费1元=1.8积分；',
          '●钻石会员V5：消费1元=2.2积分；',
          '积分有效期为2年，每年12月底将对2年前产生的消费积分进行清零，积分清零不会影响等级。'
        ],
        show: false
      },
      {
        id: 3,
        label: '升级礼',
        content: [
          '●白银会员V2：升级之后系统自动到账现金券50元（1张）；',
          '●黄金会员V3：升级之后系统自动到账现金券100元（50元*2张）；',
          '●铂金会员V4：升级之后系统自动到账现金券200元（100元*1张，50元*2张）及定制礼盒；',
          '●钻石会员V5：升级之后系统自动到账现金券500元（200元*1张，100元*2张，50元*2张）及尊享礼盒；'
        ], 
        show: false
      },
      {
        id: 4,
        label: '积分抵现',
        content: [
          '会员可凭消费积分，在线下实体门店购物时，抵扣现金。',
          '100积分抵扣1元，平日单笔订单最高可使用3000积分，即抵扣30元封顶，每天最多可抵现1单。如遇抵现活动，以活动内容为准。',
          '当含有积分抵现订单发生退货且会员可以提供原始购物小票时，积分会自动退回会员账户。'
        ],
        show: false
      },
      {
        id: 5,
        label: '会员积分日',
        content: [
          '每周二五倍抵现：每周二可享受100积分抵扣5元，单笔订单最高可使用1000积分，即抵扣50元封顶，每天最多可抵现1单。',
          '每周五双倍积分：会员可根据等级，在每周五购物时享受双倍的消费积分。'
        ],
        show: false
      },
      {
        id: 6,
        label: '积分换礼',
        content: [
          '会员可凭消费积分，在微信公众号，积分商城中兑换礼品。'
        ],
        show: false
      },
      {
        id: 7,
        label: '生日贺礼',
        content: [
          '多倍积分：会员可根据等级，可在生日当月首单享受购物3倍消费积分。',
          '生日礼券：每月1日，系统将根据会员当前等级，给当月生日且符合发放条件的会员发放生日礼券，有效期31天；如在生日当月才填写生日信息，则将在填写生日信息后的第二天发放生日券，有效期31天；如生日当月，等级发生变动，生日券不再重复发放；生日礼券仅发放一张，仅限一单使用。',
          '●白银会员V2：升级之后系统自动到账现金券50元（1张）；',
          '●黄金会员V3：升级之后系统自动到账现金券100元（50元*2张）；',
          '●铂金会员V4：升级之后系统自动到账现金券200元（100元*1张，50元*2张）；',
          '●钻石会员V5：升级之后系统自动到账现金券500元（200元*1张，100元*2张，50元*2张）；'
        ],
        show: false
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  showDescDetail(e) {
    const currentIndex = e.currentTarget.dataset.index;
    const { descList } = this.data;

    descList.forEach((item,index) => {
      item.show = currentIndex===index ? !item.show : false;
    })
    
    this.setData({
      descList
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