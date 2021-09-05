import { Component } from 'react'
import { createBrowserHistory } from 'history'
import Router from './Router'

class BrowserRouter extends Component {
  constructor(props) {
    super(props)
    this.history = createBrowserHistory()
  }
  render() {
    console.log(this.history, 'this.history')
    return <Router history={this.history} children={this.props.children} />
  }
}

export default BrowserRouter
