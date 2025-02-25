/**
 * Main Entry Point for Modern React Application
 * 
 * This file serves as the root entry point for a React 18+ application
 * that demonstrates various features, including code examples in multiple
 * programming languages, authentication, form handling, and more.
 * 
 * @version 1.0.0
 * @author Your Name
 * @license MIT
 */

import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Import core components
import App from './App';
import ErrorBoundary from './components/common/ErrorBoundary';
import LoadingFallback from './components/common/LoadingFallback';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { NotificationProvider } from './contexts/NotificationContext';

// Import CSS
import './styles/index.css';

// Lazy load route components for code splitting
// Main feature pages
const AuthPage = lazy(() => import('./pages/AuthPage'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const ApiTestPage = lazy(() => import('./pages/ApiTestPage'));
const FormPage = lazy(() => import('./pages/FormPage'));
const RealtimePage = lazy(() => import('./pages/RealtimePage'));
const MachineLearningPage = lazy(() => import('./pages/MachineLearningPage'));
const MobilePage = lazy(() => import('./pages/MobilePage'));
const AccessibilityPage = lazy(() => import('./pages/AccessibilityPage'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Programming language example pages
const JavaScriptExamples = lazy(() => import('./pages/languages/JavaScriptExamples'));
const TypeScriptExamples = lazy(() => import('./pages/languages/TypeScriptExamples'));
const PythonExamples = lazy(() => import('./pages/languages/PythonExamples'));
const JavaExamples = lazy(() => import('./pages/languages/JavaExamples'));
const CppExamples = lazy(() => import('./pages/languages/CppExamples'));
const RustExamples = lazy(() => import('./pages/languages/RustExamples'));

/**
 * PrivateRoute component for protected routes
 * Redirects to login if user is not authenticated
 */
const PrivateRoute = ({ children }) => {
  // This would typically use the AuthContext to check if user is logged in
  const isAuthenticated = localStorage.getItem('auth_token');
  
  return isAuthenticated ? children : <Navigate to="/auth" replace />;
};

/**
 * Main application renderer
 * Sets up the React 18 concurrent features with createRoot
 */
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <AuthProvider>
        <ThemeProvider>
          <NotificationProvider>
            <BrowserRouter>
              <Suspense fallback={<LoadingFallback />}>
                <Routes>
                  {/* Main application wrapper */}
                  <Route path="/" element={<App />}>
                    {/* Feature routes */}
                    <Route path="/auth" element={<AuthPage />} />
                    
                    {/* Protected routes */}
                    <Route 
                      path="/dashboard" 
                      element={
                        <PrivateRoute>
                          <Dashboard />
                        </PrivateRoute>
                      } 
                    />
                    
                    <Route path="/api-test" element={<ApiTestPage />} />
                    <Route path="/form" element={<FormPage />} />
                    <Route path="/realtime" element={<RealtimePage />} />
                    <Route path="/ml" element={<MachineLearningPage />} />
                    <Route path="/mobile" element={<MobilePage />} />
                    <Route path="/accessibility" element={<AccessibilityPage />} />
                    
                    {/* Programming language example routes */}
                    <Route path="/js" element={<JavaScriptExamples />} />
                    <Route path="/ts" element={<TypeScriptExamples />} />
                    <Route path="/py" element={<PythonExamples />} />
                    <Route path="/java" element={<JavaExamples />} />
                    <Route path="/cpp" element={<CppExamples />} />
                    <Route path="/rust" element={<RustExamples />} />
                    
                    {/* Default route redirects to dashboard for authenticated users */}
                    <Route 
                      path="/" 
                      element={
                        localStorage.getItem('auth_token') 
                          ? <Navigate to="/dashboard" replace /> 
                          : <Navigate to="/auth" replace />
                      } 
                    />
                    
                    {/* 404 route */}
                    <Route path="*" element={<NotFound />} />
                  </Route>
                </Routes>
              </Suspense>
            </BrowserRouter>
          </NotificationProvider>
        </ThemeProvider>
      </AuthProvider>
    </ErrorBoundary>
  </React.StrictMode>
);

/**
 * Development-specific code
 * Sets up hot module replacement for faster development
 */
if (process.env.NODE_ENV === 'development') {
  // Enable React Refresh for hot module replacement
  if (module.hot) {
    module.hot.accept();
  }
  
  // Development-only logging and debugging tools
  console.log('Running in development mode');
  
  // Import development utilities
  import('./utils/devTools').then(module => {
    const devTools = module.default;
    devTools.init();
  });
}

/**
 * Service Worker registration for PWA support
 * Only registered in production builds
 */
if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(registration => {
        console.log('ServiceWorker registration successful');
      })
      .catch(error => {
        console.error('ServiceWorker registration failed:', error);
      });
  });
}

/**
 * Performance monitoring
 * Tracks and reports key metrics
 */
if (process.env.NODE_ENV === 'production') {
  // Import and initialize performance monitoring
  import('./utils/performanceMonitoring').then(module => {
    const performanceMonitoring = module.default;
    performanceMonitoring.init();
  });
}

// Export any necessary components or functions for testing
export { PrivateRoute };
