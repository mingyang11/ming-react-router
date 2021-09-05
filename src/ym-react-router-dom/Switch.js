import React, { Component } from 'react'
import { matchPath } from 'react-router'
import RouterContext from './RouterContext'

class Switch extends Component {
  render() {
    return (
      <RouterContext.Consumer>
        {(context) => {
          const { location } = context
          let match
          let element
          // React.Children: 这个是react提供的
          React.Children.forEach(this.props.children, (child) => {
            // React.isValidElement 这个是来判断这个元素是不是一个合格的react元素
            if (match == null && React.isValidElement(child)) {
              element = child
              match = child.props.path
                ? matchPath(location.pathname, child.props)
                : context.match
            }
          })
          return match
            ? React.cloneElement(element, { computedMatch: match })
            : null
        }}
      </RouterContext.Consumer>
    )
  }
}
export default Switch
