import React, { Component } from 'react';
import './Home.less'


const navLogoImage = require("../../static/images/nav-logo.png")

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navlist: [
        { name: '首页', url: '/' }
      ]
    }
  }



  render() {
    return (
      <div className="nav-contianer">
        <div className="module-contianer">
          <img src={navLogoImage}/>
        </div>
      </div>
    )
  }
} 