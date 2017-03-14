import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;

import '../css/App.css'
import React, { Component } from 'react';
import {Link} from 'react-router';
import FlashMessageList from './flashMessage/FlashMessageList';

class  App extends Component{
  render(){
      return (
        <Layout>
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="0"><h1>Hackathon</h1></Menu.Item>
          <Menu.Item key="1"><Link to='/home'>Home</Link></Menu.Item>
          <Menu.Item key="2"><Link to='/signin'>Sign In</Link></Menu.Item>
          <Menu.Item key="3"><Link to='/signup'>Sign Up</Link></Menu.Item>
          <Menu.Item key="4"><Link to='/about'>About</Link></Menu.Item>
        </Menu>
      </Header>

      <Content className="content">
        <FlashMessageList/>
        <div style={{ background: '#fff', padding: 12, minHeight: 500 }}>
        {this.props.children}
        </div>
      </Content>
      <div id="wrapper">
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2016 Created by Ant UED
      </Footer>
    </div>
    </Layout>
      )
  }
}

/*   */

export default App;
