import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../components/common/history';

// 引入组件
import Login from '../views/login/index';
import Home from '../views/home/index';
import App from '../views/app/index'
import NoMount from '../components/404/404';

class MRoute extends Component {
  render () {

    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/app" component={App}/>
          <Route path="/login" component={Login}/>
          <Route component={NoMount}/>
        </Switch>
      </Router>
    )
  }
}

export default MRoute;