/**
 * 项目内的一些公共参数
 *
 * url: 网址根域名
 * api_url: api根域名
 * local_base: 本地根域名
 */

let url = 'http://tjtcy.cn'
let api_url = 'http://tjtcy.cn/api'

let config = {
  // local_model: process.env.NODE_ENV === 'development',  // 如果是开发环境，则本地模式为true
  local_model: false, // 如果是开发环境，则本地模式为true
  local_token: '6139ef54e096465981bbee781818d872', // 本地token

  url: url + '/',
  api: api_url + '/',
  vue_base: url + '/dist/#',

  tel_reg: /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/,

  // Bomb相关
  Bmob_id: '4820b283f8489834',
  api_key: 'GRJ526',

  nav: [
    {
      title: '首页',
      url: '/'
    }, {
      title: '状元棋',
      url: '/zhuangyuanqi'
    }, {
      title: '轮播图',
      url: '/swiper'
    }, {
      title: '倒计时',
      url: '/countdown'
    }, {
      title: '测试',
      url: '/test'
    }, {
      title: '添加数据',
      url: '/add_data'
    }
  ]
}

export default config
