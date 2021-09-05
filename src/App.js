import React, { Component } from 'react'
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Switch,
//   // Redirect,
//   // useHistory,
//   // useLocation,
//   useRouteMatch,
//   // useParams,
//   // withRouter,
//   Prompt,
// } from 'react-router-dom'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  // useHistory,
  // useLocation,
  useRouteMatch,
  // useParams,
  // withRouter,
  // Redirect
} from './ym-react-router-dom'

import HomePage from './pages/HomePage'
import UserPage from './pages/UserPage'
import LoginPage from './pages/LoginPage'
import _404Page from './pages/_404Page'

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">首页</Link>
        <Link to="/user">用户中心</Link>
        <Link to="/login">登录</Link>
        <Link to="/product/123">商品</Link>
        <Link to="/product123">商品</Link>

        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/user" component={UserPage} />
          <Route path="/login" component={LoginPage} />
          {/* 动态路由，使用正则 */}
          <Route
            path="/product/:productId"
            render={(props) => <Product {...props} />}
          />
          <Route component={_404Page} />
        </Switch>
      </Router>
    </div>
  )
}

export default App

// 嵌套路由
function Product() {
  const match = useRouteMatch()
  const { params, url } = match
  const { id } = params
  return (
    <div>
      <h1>商品</h1>
      <h1>商品-{id}</h1>
      <Link to={url + '/detail'}>详情</Link>
      <Route path={url + '/detail'} component={Detail} />
    </div>
  )
}

// @withRouter
// class Product extends Component {
//   render() {
//     const {match} = this.props;
//     const {params, url} = match;
//     const {id} = params;
//     return (
//       <div>
//         <h1>Search-{id}</h1>
//         <Link to={url + "/detail"}>详情</Link>
//         <Route path={url + "/detail"} component={Detail} />
//       </div>
//     );
//   }
// }

function Detail(props) {
  console.log('detail', props) //sy-log
  return (
    <div>
      <h1>detail</h1>
    </div>
  )
}
