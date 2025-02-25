/**
 * HomePage.js
 * 
 * Main landing page that displays all available endpoints and features
 * of the application with a modern, responsive design.
 */

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';

// Import CSS
import '../styles/HomePage.css';

const HomePage = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  // Features data 
  const featureEndpoints = [
    { title: 'Authentication', desc: 'User authentication with login and registration', icon: '🔒', path: '/auth' },
    { title: 'Dashboard', desc: 'Interactive user dashboard with analytics', icon: '📊', path: '/dashboard', protected: true },
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
  
  // Application features
  const appFeatures = [
    { title: 'Modern React', desc: 'Built with React 18+ using the latest features like concurrent rendering and hooks' },
    { title: 'Performance Optimized', desc: 'Code splitting, lazy loading, and optimized builds for maximum performance' },
    { title: 'Responsive Design', desc: 'Fully responsive layouts that work on all devices and screen sizes' },
    { title: 'Comprehensive Testing', desc: 'Unit, integration, and end-to-end testing for reliable code' },
    { title: 'Accessibility', desc: 'WCAG compliant with keyboard navigation and screen reader support' },
    { title: 'Error Handling', desc: 'Robust error boundaries and graceful degradation' }
  ];
  
  return (
    <div className={`home-page ${theme}`}>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1>React Feature Explorer</h1>
          <p className="lead">
            A comprehensive showcase of modern React features, programming languages, 
            and development best practices.
          </p>
          
          {!isAuthenticated && (
            <div className="cta-buttons">
              <Link to="/auth" className="btn btn-primary">Sign In</Link>
              <Link to="/auth?register=true" className="btn btn-secondary">Create Account</Link>
            </div>
          )}
          
          {isAuthenticated && (
            <div className="cta-buttons">
              <Link to="/dashboard" className="btn btn-primary">Go to Dashboard</Link>
            </div>
          )}
        </div>
      </section>
      
      {/* Feature Endpoints Section */}
      <section className="endpoints-section" id="features">
        <div className="container">
          <h2>Feature Endpoints</h2>
          <p>Explore various features and capabilities of the application</p>
          
          <div className="endpoints-grid">
            {featureEndpoints.map((feature, index) => (
              <div 
                key={index} 
                className={`endpoint-card ${feature.protected && !isAuthenticated ? 'locked' : ''}`}
              >
                <div className="card-icon">
                  <span className="icon">{feature.icon}</span>
                  {feature.protected && !isAuthenticated && (
                    <span className="lock-icon">🔒</span>
                  )}
                </div>
                
                <div className="card-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                  
                  {(!feature.protected || isAuthenticated) ? (
                    <Link to={feature.path} className="card-link">
                      Explore <span className="arrow-icon">→</span>
                    </Link>
                  ) : (
                    <Link to="/auth" className="card-link locked">
                      Sign in to access <span className="lock-icon">🔒</span>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Programming Languages Section */}
      <section className="languages-section" id="languages">
        <div className="container">
          <h2>Programming Languages</h2>
          <p>Explore code examples in different programming languages</p>
          
          <div className="languages-grid">
            {languages.map((lang, index) => (
              <div key={index} className="language-card">
                <div 
                  className="lang-badge" 
                  style={{ backgroundColor: lang.color }}
                >
                  {lang.lang.substring(0, 2)}
                </div>
                
                <div className="card-content">
                  <h3>{lang.lang}</h3>
                  <p>{lang.desc}</p>
                  
                  <Link to={lang.path} className="card-link">
                    View Examples <span className="arrow-icon">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Application Features Section */}
      <section className="features-section" id="about">
        <div className="container">
          <h2>Key Application Features</h2>
          
          <div className="features-list">
            {appFeatures.map((feature, index) => (
              <div key={index} className="feature-item">
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="app-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <div className="footer-logo">React Feature Explorer</div>
              <p>A modern React application showcasing best practices and development features.</p>
            </div>
            
            <div className="footer-links-group">
              <div className="footer-links">
                <h4>Resources</h4>
                <ul>
                  <li><a href="#docs">Documentation</a></li>
                  <li><a href="#api">API Reference</a></li>
                  <li><a href="#guides">Guides</a></li>
                </ul>
              </div>
              
              <div className="footer-links">
                <h4>Community</h4>
                <ul>
                  <li><a href="#github">GitHub</a></li>
                  <li><a href="#discord">Discord</a></li>
                  <li><a href="#twitter">Twitter</a></li>
                </ul>
              </div>
              
              <div className="footer-links">
                <h4>Legal</h4>
                <ul>
                  <li><a href="#privacy">Privacy</a></li>
                  <li><a href="#terms">Terms</a></li>
                  <li><a href="#cookies">Cookies</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© 2025 React Feature Explorer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
