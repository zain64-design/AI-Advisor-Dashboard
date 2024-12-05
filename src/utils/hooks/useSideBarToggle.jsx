import { useState } from 'react';

const useSideBarToggle = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };
  return ([isSidebarOpen,toggleSidebar])
}

export default useSideBarToggle