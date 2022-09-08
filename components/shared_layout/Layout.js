import Toolbar from './toolbar/Toolbar';

const Layout = ({ children }) => {
  return (
    <div>
      <Toolbar />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
