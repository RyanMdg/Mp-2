import React, { useState } from "react";
import Link from "next/link";

const SideNavbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        className={`bg-gray-800 text-white w-64 flex-shrink-0 transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between py-4 px-6">
          <h2 className="text-2xl font-bold">Sidebar</h2>
          <button
            className="text-white focus:outline-none focus:text-white"
            onClick={toggleSidebar}
          >
            Close
          </button>
        </div>
        <nav>
          <ul className="text-white px-4 py-2">
            <li>
              <Link href="/" className="block py-2">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="block py-2">
                About
              </Link>
            </li>
            <li>
              <Link href="/products" className="block py-2">
                Products
              </Link>
            </li>
            {/* Add more menu items as needed */}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main
        className={`flex-1 p-6 transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : ""
        }`}
        style={{
          marginLeft: isSidebarOpen ? "250px" : "0",
        }}
      >
        <h1 className="text-2xl font-bold mb-4">Main Content</h1>
        {/* Add your main content here */}
      </main>
    </div>
  );
};

export default SideNavbar;
