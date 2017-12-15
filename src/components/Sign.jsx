import React from 'react';
import PropTypes from 'prop-types';
import { Input, Button } from 'antd';
import './less/sign.less';
const Search = Input.Search;
class Sign extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {

    };
  }
  render() {
    
    return (
      <div className="sign">
        <div>
          <p className="title">真实地体验下客服，才知道更好</p>
          <Input placeholder="请输入您的手机号" />
          <Button>免费注册</Button>
        </div>
      </div>
    );
  }

}
export default Sign;