import React, { Component } from 'react'
import RouterContext from './RouterContext'
import matchPath from './matchPath'

class Route extends Component {
  render() {
    return (
      <RouterContext.Consumer>
        {(context) => {
          const { location } = context
          const { component, children, render, path, computedMatch } =
            this.props
          const match = computedMatch
            ? computedMatch
            : path
            ? matchPath(location.pathname, this.props)
            : context.match
          const routeProps = { ...context, match }
          return (
            <RouterContext.Provider value={routeProps}>
              {match
                ? children
                  ? typeof children === 'function'
                    ? children(routeProps)
                    : children
                  : component
                  ? React.createElement(component, routeProps)
                  : render
                  ? typeof render === 'function'
                    ? render(routeProps)
                    : render
                  : null
                : typeof children === 'function'
                ? children(routeProps)
                : null}
            </RouterContext.Provider>
          )
        }}
      </RouterContext.Consumer>
    )
  }
}

export default Route
