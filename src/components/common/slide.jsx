import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MenuUnfoldOutlined, LineChartOutlined, FileAddOutlined, UploadOutlined, RadiusSettingOutlined } from '@ant-design/icons';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

export default class SiderCustom extends Component {
  constructor(props) {
    super(props);
    const { collapsed } = props;
    this.state = {
      collapsed: collapsed,
      firstHide: true, //第一次先隐藏暴露的子菜单
      selectedKey: '', //选择的路径
      openKey: '', //打开的路径（选择的上一层）
    }
  }
  componentDidMount() {
    this.setMenuOpen(this.props);
  }
  componentWillReceiveProps(nextProps) {
    this.onCollapse(nextProps.collapsed);
    this.setMenuOpen(nextProps);
  }
  setMenuOpen = props => {
    const { path } = props;
    this.setState({
      // openKey: path.substr(0, path.lastIndexOf('/')),
      selectedKey: path
    });
  };
  onCollapse = (collapsed) => {
    this.setState({
      collapsed,
      firstHide: collapsed,
    });
  };
  menuClick = e => {
    this.setState({
      selectedKey: e.key
    });
  };
  openMenu = v => {
    this.setState({
      openKey: v[v.length - 1],
      firstHide: false,
    })
  };
  render() {
    const { collapsed, firstHide, openKey, selectedKey } = this.state;
    return (
      <Sider
        trigger={null}
        collapsed={collapsed}
      >
        <div className="logo" style={collapsed ? { backgroundSize: '70%' } : { backgroundSize: '30%' }} />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[selectedKey]}
          onClick={this.menuClick}
          onOpenChange={this.openMenu}
          openKeys={firstHide ? null : [openKey]}
        >

          <Menu.Item key={"/app"}>
            <Link to={"/app"}><HomeOutlined twoToneColor="#eb2f96"></HomeOutlined><span>首页</span></Link>
          </Menu.Item>
          <Menu.Item key={"/app/form"}>
            <Link to={"/app/form"}><MenuUnfoldOutlined /><span>表单</span></Link>
          </Menu.Item>
          <SubMenu
            key="/app/chart"
            title={<span><span><LineChartOutlined />图表</span></span>}
          >
            <Menu.Item key="/app/chart/echarts">
              <Link to={'/app/chart/echarts'}> <RadiusSettingOutlined /><span>echarts</span></Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="/app/richText">
            <Link to={'/app/richText'}> <FileAddOutlined /> <span>富文本</span></Link>
          </Menu.Item>
          <Menu.Item key="/app/upload">
            <Link to={'/app/upload'}><UploadOutlined /><span>文件上传</span></Link>D
          </Menu.Item>
        </Menu>                                                                             
      </Sider>
    )
  }
}