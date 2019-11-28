import React, { Component } from 'react';
import './Home.less'


const navLogoImage = require("../../static/images/nav-logo.png")
const homeWechatHomeImage = require("../../static/images/home-wechat-home.png")
const homeWechatWashImage = require("../../static/images/home-wechat-wash.png")
const wechatQrcode = require("../../static/images/wechat-qrcode.jpeg")

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMounted: false
    }
  }

  navlist = [
    { name: '首页', url: '/' },
    { name: '服务', url: '/' },
    { name: '案例', url: '/' },
    { name: '招募手艺人', url: '/' },
    { name: '加入我们', url: '/' },
    { name: '关于我们', url: '/' }
  ]

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isMounted: true
      })
    }, 0)
  }

  render() {
    const { isMounted } = this.state
    return (
      <div className="home-wrapper">
        {this.renderHeader()}
        <div className="home-mudule-contianer mudule1">
          <div className="module-center-contianer">
            <div className="mudule-left">
              <div className="title">球鞋清洗、修复<br/>客制品牌</div>
              <img className="home-qrcode" src={wechatQrcode} alt=""/>
            </div>
            <img className={`home-wechat-home-image action-image ${isMounted ? 'active' : ''}`} src={homeWechatHomeImage} alt="" />
          </div>
        </div>

        <div className="home-mudule-contianer mudule2">
          <div className="module-center-contianer">
            <img className={`home-wechat-wash-image action-image ${isMounted ? 'active' : ''}`} src={homeWechatWashImage} alt="" />
            <div className="mudule-right">
              <div className="title">球鞋清洗</div>
              <div className="desc">
                <span>专业清洗 多重服务保障</span>
                <span>多重服务保障 满意为止</span>
              </div>
              <div className="shoes-list">
                <div className="shoes-item"></div>
                <div className="shoes-item"></div>
                <div className="shoes-item"></div>
              </div>
            </div>
          </div>
        </div>
        {this.renderFooter()}
      </div>
    )
  }

  renderHeader() {
    return (
      <div className="header-contianer">
        <div className="contianer-box">
          <div className="module-center-contianer">
            <img className="nav-logo" src={navLogoImage} alt="logo" />
            <div className="nav-list">
              {
                this.navlist.map(ele => {
                  return <div className="nav-item" key={ele.name}>{ele.name}</div>
                })
              }
            </div>
          </div>
        </div>
        <div className="cover-box"></div>
      </div>
    )
  }

  renderFooter() {
    return (
      <div className="footer-contianer">
        <div className="module-center-contianer">
          <div className="f-company-name">杭州丝内刻科技有限公司</div>
          <div className="f-company-limited">Hangzhou Shineike Information Technology Co., Ltd</div>
          <div className="f-partners">合作伙伴 <a href="https://www.kuaidi100.com/" target="_blank" rel="noopener noreferrer">快递100</a></div>
          <div className="f-record-cord">浙ICP备19047226号</div>

          <div className="f-customer-service">客服热线:186 6822 3132(工作时间 9:00-18:00)</div>
        </div>
      </div>
    )
  }
} 