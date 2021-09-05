import { useContext } from 'react'
import RouterContext from './RouterContext'

function Link(props) {
  const { to, children, ...rest } = props
  const routerCtx = useContext(RouterContext)
  // 点击a标签时会触发页面刷新，而组件切换是不需要刷新的
  function handle(e) {
    e.preventDefault()
    routerCtx.history.push(to)
  }
  return (
    <a href={to} {...rest} onClick={handle} style={{ textDecoration: 'none' }}>
      {children}
    </a>
  )
}

export default Link
