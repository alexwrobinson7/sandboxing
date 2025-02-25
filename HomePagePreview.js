/**
 * HomePagePreview.js
 * 
 * Visual representation of the home page with navigation links
 * to all endpoints and features of the application.
 */

import React, { useState } from 'react';

const HomePagePreview = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  const cardStyles = {
    container: {
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      color: isDarkMode ? '#f9fafb' : '#1f2937',
      backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
      transition: 'all 0.3s ease',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 0',
      marginBottom: '40px',
      borderBottom: isDarkMode ? '1px solid #374151' : '1px solid #e5e7eb',
    },
    logo: {
      fontSize: '24px',
      fontWeight: '700',
      color: isDarkMode ? '#818cf8' : '#4f46e5',
    },
    nav: {
      display: 'flex',
      gap: '20px',
    },
    navLink: {
      color: isDarkMode ? '#d1d5db' : '#6b7280',
      fontWeight: '500',
      textDecoration: 'none',
      padding: '8px 12px',
      borderRadius: '6px',
      transition: 'all 0.2s ease',
    },
    button: {
      padding: '8px 16px',
      borderRadius: '6px',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      border: 'none',
    },
    themeToggle: {
      backgroundColor: 'transparent',
      border: isDarkMode ? '1px solid #374151' : '1px solid #e5e7eb',
      color: isDarkMode ? '#d1d5db' : '#6b7280',
    },
    loginButton: {
      backgroundColor: isDarkMode ? '#6366f1' : '#4f46e5',
      color: 'white',
      marginLeft: '12px',
    },
    hero: {
      padding: '60px 20px',
      textAlign: 'center',
      borderRadius: '12px',
      marginBottom: '60px',
      background: isDarkMode 
        ? 'linear-gradient(135deg, #4338ca 0%, #1e1b4b 100%)' 
        : 'linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)',
      color: 'white',
    },
    heroTitle: {
      fontSize: '48px',
      fontWeight: '800',
      marginBottom: '16px',
    },
    heroDescription: {
      fontSize: '18px',
      maxWidth: '800px',
      margin: '0 auto 32px',
      opacity: '0.9',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '16px',
    },
    primaryButton: {
      backgroundColor: 'white',
      color: '#4f46e5',
      padding: '12px 24px',
      borderRadius: '8px',
      fontWeight: '600',
    },
    secondaryButton: {
      backgroundColor: 'transparent',
      color: 'white',
      border: '2px solid white',
      padding: '12px 24px',
      borderRadius: '8px',
      fontWeight: '600',
    },
    sectionTitle: {
      fontSize: '32px',
      fontWeight: '700',
      textAlign: 'center',
      marginBottom: '8px',
      color: isDarkMode ? '#f9fafb' : '#1f2937',
    },
    sectionDescription: {
      fontSize: '18px',
      color: isDarkMode ? '#d1d5db' : '#6b7280',
      textAlign: 'center',
      marginBottom: '40px',
      maxWidth: '800px',
      margin: '0 auto 40px',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '24px',
      marginBottom: '60px',
    },
    card: {
      backgroundColor: isDarkMode ? '#1f2937' : 'white',
      borderRadius: '12px',
      padding: '24px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
      border: isDarkMode ? '1px solid #374151' : '1px solid #e5e7eb',
      transition: 'all 0.3s ease',
    },
    cardIcon: {
      fontSize: '32px',
      marginBottom: '16px',
    },
    cardTitle: {
      fontSize: '20px',
      fontWeight: '600',
      marginBottom: '12px',
      color: isDarkMode ? '#f9fafb' : '#1f2937',
    },
    cardDescription: {
      fontSize: '16px',
      color: isDarkMode ? '#d1d5db' : '#6b7280',
      marginBottom: '20px',
    },
    cardLink: {
      color: isDarkMode ? '#818cf8' : '#4f46e5',
      textDecoration: 'none',
      fontWeight: '500',
      display: 'flex',
      alignItems: 'center',
    },
    languageCard: {
      backgroundColor: isDarkMode ? '#1f2937' : 'white',
      borderRadius: '12px',
      padding: '24px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
      border: isDarkMode ? '1px solid #374151' : '1px solid #e5e7eb',
      transition: 'all 0.3s ease',
      position: 'relative',
    },
    langBadge: {
      width: '48px',
      height: '48px',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: '700',
      fontSize: '18px',
      color: 'white',
      marginBottom: '16px',
    },
    featuresList: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
      gap: '24px',
      marginBottom: '60px',
    },
    footer: {
      borderTop: isDarkMode ? '1px solid #374151' : '1px solid #e5e7eb',
      padding: '40px 0 20px',
      marginTop: '40px',
    },
    footerContent: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '40px',
      marginBottom: '40px',
    },
    footerLogo: {
      fontSize: '20px',
      fontWeight: '700',
      color: isDarkMode ? '#818cf8' : '#4f46e5',
      marginBottom: '16px',
    },
    footerLinks: {
      minWidth: '160px',
    },
    footerTitle: {
      fontSize: '16px',
      fontWeight: '600',
      marginBottom: '16px',
      color: isDarkMode ? '#f9fafb' : '#1f2937',
    },
    footerLinksList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    footerLink: {
      marginBottom: '12px',
    },
    footerLinkAnchor: {
      color: isDarkMode ? '#d1d5db' : '#6b7280',
      textDecoration: 'none',
      transition: 'color 0.2s ease',
    },
    copyright: {
      fontSize: '14px',
      color: isDarkMode ? '#9ca3af' : '#9ca3af',
      textAlign: 'center',
    }
  };

  // Feature endpoints data
  const featureEndpoints = [
    { title: 'Authentication', desc: 'User authentication with login and registration', icon: '🔒', path: '/auth' },
    { title: 'Dashboard', desc: 'Interactive user dashboard with analytics', icon: '📊', path: '/dashboard' },
    { title: 'API Testing', desc: 'Examples of API integration and testing', icon: '🔄', path: '/api-test' },
    { title: 'Form Handling', desc: 'Complex forms with validation', icon: '📝', path: '/form' },
    { title: 'Real-time Updates', desc: 'Real-time data synchronization examples', icon: '⚡', path: '/realtime' },
    { title: 'Machine Learning', desc: 'ML model integration examples', icon: '🧠', path: '/ml' },
    { title: 'Mobile Design', desc: 'Mobile-responsive component examples', icon: '📱', path: '/mobile' },
    { title: 'Accessibility', desc: 'Accessible design patterns and practices', icon: '♿', path: '/accessibility' }
  ];

  // Programming languages data
  const languages = [
    { lang: 'JavaScript', desc: 'Modern JS features and patterns', color: '#f7df1e', path: '/js' },
    { lang: 'TypeScript', desc: 'Typed JavaScript with interfaces and more', color: '#3178c6', path: '/ts' },
    { lang: 'Python', desc: 'Python code examples and patterns', color: '#306998', path: '/py' },
    { lang: 'Java', desc: 'Java programming examples', color: '#5382a1', path: '/java' },
    { lang: 'C++', desc: 'C++ programming examples', color: '#00599c', path: '/cpp' },
    { lang: 'Rust', desc: 'Rust programming examples', color: '#b7410e', path: '/rust' }
  ];

  // App features data
  const appFeatures = [
    { title: 'Modern React', desc: 'Built with React 18+ using the latest features like concurrent rendering and hooks' },
    { title: 'Performance Optimized', desc: 'Code splitting, lazy loading, and optimized builds for maximum performance' },
    { title: 'Responsive Design', desc: 'Fully responsive layouts that work on all devices and screen sizes' },
    { title: 'Comprehensive Testing', desc: 'Unit, integration, and end-to-end testing for reliable code' },
    { title: 'Accessibility', desc: 'WCAG compliant with keyboard navigation and screen reader support' },
    { title: 'Error Handling', desc: 'Robust error boundaries and graceful degradation' }
  ];

  return (
    <div style={cardStyles.container}>
      {/* Header */}
      <header style={cardStyles.header}>
        <div style={cardStyles.logo}>React Feature Explorer</div>
        <nav style={cardStyles.nav}>
          <a href="#features" style={cardStyles.navLink}>Features</a>
          <a href="#languages" style={cardStyles.navLink}>Languages</a>
          <a href="#about" style={cardStyles.navLink}>About</a>
          <a href="#contact" style={cardStyles.navLink}>Contact</a>
        </nav>
        <div>
          <button 
            style={{...cardStyles.button, ...cardStyles.themeToggle}} 
            onClick={toggleDarkMode}
          >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
          <button style={{...cardStyles.button, ...cardStyles.loginButton}}>
            Sign In
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section style={cardStyles.hero}>
        <h1 style={cardStyles.heroTitle}>React Feature Explorer</h1>
        <p style={cardStyles.heroDescription}>
          A comprehensive showcase of modern React features, programming languages, 
          and development best practices.
        </p>
        <div style={cardStyles.buttonContainer}>
          <button style={{...cardStyles.button, ...cardStyles.primaryButton}}>
            Get Started
          </button>
          <button style={{...cardStyles.button, ...cardStyles.secondaryButton}}>
            View Features
          </button>
        </div>
      </section>

      {/* Feature Endpoints Section */}
      <section id="features">
        <h2 style={cardStyles.sectionTitle}>Feature Endpoints</h2>
        <p style={cardStyles.sectionDescription}>
          Explore various features and capabilities of the application
        </p>
        <div style={cardStyles.grid}>
          {featureEndpoints.map((feature, index) => (
            <div key={index} style={cardStyles.card}>
              <div style={cardStyles.cardIcon}>{feature.icon}</div>
              <h3 style={cardStyles.cardTitle}>{feature.title}</h3>
              <p style={cardStyles.cardDescription}>{feature.desc}</p>
              <a href={feature.path} style={cardStyles.cardLink}>
                Explore <span style={{ marginLeft: '4px' }}>→</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Programming Languages Section */}
      <section id="languages">
        <h2 style={cardStyles.sectionTitle}>Programming Languages</h2>
        <p style={cardStyles.sectionDescription}>
          Explore code examples in different programming languages
        </p>
        <div style={cardStyles.grid}>
          {languages.map((lang, index) => (
            <div key={index} style={cardStyles.languageCard}>
              <div style={{...cardStyles.langBadge, backgroundColor: lang.color}}>
                {lang.lang.substring(0, 2)}
              </div>
              <h3 style={cardStyles.cardTitle}>{lang.lang}</h3>
              <p style={cardStyles.cardDescription}>{lang.desc}</p>
              <a href={lang.path} style={cardStyles.cardLink}>
                View Examples <span style={{ marginLeft: '4px' }}>→</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* App Features Section */}
      <section id="about">
        <h2 style={cardStyles.sectionTitle}>Key Application Features</h2>
        <div style={cardStyles.featuresList}>
          {appFeatures.map((feature, index) => (
            <div key={index} style={cardStyles.card}>
              <h3 style={cardStyles.cardTitle}>{feature.title}</h3>
              <p style={cardStyles.cardDescription}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={cardStyles.footer}>
        <div style={cardStyles.footerContent}>
          <div>
            <div style={cardStyles.footerLogo}>React Feature Explorer</div>
            <p style={{...cardStyles.cardDescription, maxWidth: '300px'}}>
              A modern React application showcasing best practices and development features.
            </p>
          </div>
          
          <div style={cardStyles.footerLinks}>
            <h4 style={cardStyles.footerTitle}>Resources</h4>
            <ul style={cardStyles.footerLinksList}>
              <li style={cardStyles.footerLink}>
                <a href="#docs" style={cardStyles.footerLinkAnchor}>Documentation</a>
              </li>
              <li style={cardStyles.footerLink}>
                <a href="#api" style={cardStyles.footerLinkAnchor}>API Reference</a>
              </li>
              <li style={cardStyles.footerLink}>
                <a href="#guides" style={cardStyles.footerLinkAnchor}>Guides</a>
              </li>
            </ul>
          </div>
          
          <div style={cardStyles.footerLinks}>
            <h4 style={cardStyles.footerTitle}>Community</h4>
            <ul style={cardStyles.footerLinksList}>
              <li style={cardStyles.footerLink}>
                <a href="#github" style={cardStyles.footerLinkAnchor}>GitHub</a>
              </li>
              <li style={cardStyles.footerLink}>
                <a href="#discord" style={cardStyles.footerLinkAnchor}>Discord</a>
              </li>
              <li style={cardStyles.footerLink}>
                <a href="#twitter" style={cardStyles.footerLinkAnchor}>Twitter</a>
              </li>
            </ul>
          </div>
          
          <div style={cardStyles.footerLinks}>
            <h4 style={cardStyles.footerTitle}>Legal</h4>
            <ul style={cardStyles.footerLinksList}>
              <li style={cardStyles.footerLink}>
                <a href="#privacy" style={cardStyles.footerLinkAnchor}>Privacy</a>
              </li>
              <li style={cardStyles.footerLink}>
                <a href="#terms" style={cardStyles.footerLinkAnchor}>Terms</a>
              </li>
              <li style={cardStyles.footerLink}>
                <a href="#cookies" style={cardStyles.footerLinkAnchor}>Cookies</a>
              </li>
            </ul>
          </div>
        </div>
        
        <p style={cardStyles.copyright}>
          © 2025 React Feature Explorer. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default HomePagePreview;
