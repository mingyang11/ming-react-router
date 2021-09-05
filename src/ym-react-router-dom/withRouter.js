import RouterContext from './RouterContext'

const withRouter = (WrapComponent) => {
  return (props) => {
    return (
      <RouterContext.Consumer>
        {(context) => {
          return <WrapComponent {...props} {...context} />
        }}
      </RouterContext.Consumer>
    )
  }
}

export default withRouter
