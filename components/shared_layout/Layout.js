import Toolbar from './toolbar/Toolbar';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div>
      <Toolbar />
      <div>{children}</div>
      <Sidebar />
    </div>
  );
};

export default Layout;
