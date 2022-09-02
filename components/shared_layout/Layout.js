import Toolbar from "../toolbar/Toolbar"

const Layout = ({children}) => {
  return (
    <main>
      <Toolbar />
      <div>{children}</div>
    </main>
  )
}

export default Layout