import React from 'react';
import ReactDOM from 'react-dom';
import enquire from 'enquire.js';
import { scrollScreen } from 'rc-scroll-anim';

import Content5 from './Content5';
import Nav from './Nav';
import Content0 from './Content0';
import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3';
import Content4 from './Content4';
import Content6 from './Content6';
import Content7 from './Content7';
import Content8 from './Content8';
import Content9 from './Content9';
import Footer from './Footer';
import DetailSwitch from './DetailSwitch'
import Slider from './Slider'
import Logo from './Logo'
import Sign from './Sign'
import './less/antMotion_style.less';
import './less/detail.less'
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMode: false
    };
  }

  componentDidMount() {

    // 适配手机屏幕;
    this.enquireScreen((isMode) => {
      this.setState({ isMode });
    });
  }

  enquireScreen = (cb) => {
    /* eslint-disable no-unused-expressions */
    enquire.register('only screen and (min-width: 320px) and (max-width: 767px)', {
      match: () => {
        cb && cb(true);
      },
      unmatch: () => {
        cb && cb();
      },
    });
    /* eslint-enable no-unused-expressions */
  }

  render() {
    const children = [
      
      <Nav id="nav_0_0" key="nav_0_0" isMode={this.state.isMode}/>,

      <Content0 id="content_0_0" key="content_0_0" isMode={this.state.isMode}/>,
      <Content6 id="content_9_0" key="content_9_0" isMode={this.state.isMode}/>,
      
      <DetailSwitch key="content_detail"/>,
      <Slider key="content_slider"/>,
      // <Content1 id="content_2_0" key="content_2_0" isMode={this.state.isMode}/>,
      // <Content2 id="content_3_0" key="content_3_0" isMode={this.state.isMode}/>,
      // <Content3 id="content_4_0" key="content_4_0" isMode={this.state.isMode}/>,
      // <Content4 id="content_1_0" key="content_1_0" isMode={this.state.isMode}/>,
      // <Content5 id="content_10_0" key="content_10_0" isMode={this.state.isMode}/>,
      
      // <Content7 id="content_5_0" key="content_5_0" isMode={this.state.isMode}/>,
      // <Content8 id="content_7_0" key="content_7_0" isMode={this.state.isMode}/>,
      <Content9 id="content_8_0" key="content_8_0" isMode={this.state.isMode}/>,
      <Sign key="sign" isMode={this.state.isMode}/>,
      <Footer id="footer_1_0" key="footer_1_0" isMode={this.state.isMode}/>,
    ];
    return (
      <div className="templates-wrapper">
        {children}
      </div>
    );
  }
}
