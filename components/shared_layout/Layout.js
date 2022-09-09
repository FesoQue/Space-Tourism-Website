import Toolbar from './toolbar/Toolbar';
import Sidebar from './Sidebar';
import { useState } from 'react';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div>
      <Toolbar setIsSidebarOpen={setIsSidebarOpen} />
      <div>{children}</div>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </div>
  );
};

export default Layout;
