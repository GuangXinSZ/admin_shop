import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { setCookie } from '../../utils/cookies';

import './from.scss'

class NormalLoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  // 自定义表单验证
  validatePwd = (rule, value, callback) => {
    if (!value) {
      callback('请输入密码')
    } else if (value.length < 4) {
      callback('密码不能小于4位数')
    } else if (value.length > 12) {
      callback('密码长度不能超过12为数')
    } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
      callback('密码必须是英文、数字或下划线组成')
    } else {
      callback()
    }
  }
  render() {
    const onFinish = (values) => {
      setCookie("mspa_user", values.username)
      this.props.history.push({ pathname: '/app', state: values });
    }

    return (
      <div className="formInput">
        <div className="form_content">
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <h2 className="header_title">电商后台管理系统</h2>
            <Form.Item
              name="username"
              rules={[
                { require: true, whitespace: true, message: '请输入用户名' },
                { min: 4, message: '用户名最少4位数' },
                { max: 12, message: '用户名最多12位数' },
                { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数字或下划线组成' }
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: this.validatePwd
                }
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>记住密码</Checkbox>
              </Form.Item>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登入
        </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}
export default NormalLoginForm;