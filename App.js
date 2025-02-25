/**
 * App.js - Main Application Component
 * 
 * This serves as the main layout wrapper for the entire application.
 * It provides the navigation structure and renders child routes.
 */

import React, { useContext, useState } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';
import { ThemeContext } from './contexts/ThemeContext';
import { NotificationContext } from './contexts/NotificationContext';

// Import common components
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';
import Notifications from './components/common/Notifications';

/**
 * Main App component that wraps the entire application
 * Provides layout and navigation structure
 */
const App = () => {
  const { user, logout } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { notifications } = useContext(NotificationContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Navigation items - dynamically highlight current route
  const navItems = [
    { path: '/dashboard', label: 'Dashboard', protected: true },
    { path: '/api-test', label: 'API Test', protected: false },
    { path: '/form', label: 'Form Examples', protected: false },
    { path: '/realtime', label: 'Realtime Data', protected: false },
    { path: '/ml', label: 'Machine Learning', protected: true },
    { path: '/mobile', label: 'Mobile Views', protected: false },
    { path: '/accessibility', label: 'Accessibility', protected: false },
  ];

  // Language examples navigation
  const languageNavItems = [
    { path: '/js', label: 'JavaScript', protected: false },
    { path: '/ts', label: 'TypeScript', protected: false },
    { path: '/py', label: 'Python', protected: false },
    { path: '/java', label: 'Java', protected: false },
    { path: '/cpp', label: 'C++', protected: false },
    { path: '/rust', label: 'Rust', protected: false },
  ];

  return (
    <div className={`app-container ${theme}`}>
      <Navbar 
        user={user} 
        theme={theme} 
        toggleTheme={toggleTheme} 
        toggleSidebar={toggleSidebar} 
        logout={logout}
      />
      
      <div className="main-content">
        <Sidebar 
          isOpen={sidebarOpen} 
          toggle={toggleSidebar}
          navItems={navItems}
          languageNavItems={languageNavItems}
          currentPath={location.pathname}
          isAuthenticated={!!user}
        />
        
        <main className="content-area" id="main-content">
          {/* Accessibility skip to content link */}
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          
          {/* Display notifications */}
          {notifications.length > 0 && <Notifications />}
          
          {/* Render the current route */}
          <Outlet />
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default App;
