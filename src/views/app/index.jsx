import React, { Component } from 'react';
import Slider from '../../components/common/slide';
import { Layout } from 'antd';

// 引入sass文件
import './app.scss'
import HeaderStat from '../../components/common/header'

class App extends Component {
  render() {
    const { Header, Footer, Sider, Content } = Layout;
    return (
      <div className="content_All">
        <Layout style={{height: '100%'}}>
          <Sider>
            <Slider></Slider>
          </Sider>

          <Layout>
            <Header>
              <HeaderStat></HeaderStat>
            </Header>
            <Content>
              Content
            </Content>
            <Footer style={{textAlign: 'center', color: '#ccc'}}>
              90后前端开发，要不是为了生活，谁愿意弄得自己一身才华
            </Footer>
          </Layout>
        </Layout>
      </div>
    )
  }
}

export default App;