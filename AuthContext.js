/**
 * AuthContext.js
 * 
 * Authentication context for managing user authentication state
 * across the application. Provides login, logout, registration,
 * and user session management functionality.
 */

import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';

// Create the context
export const AuthContext = createContext();

/**
 * AuthProvider component
 * Manages authentication state and provides methods for authentication
 */
export const AuthProvider = ({ children }) => {
  // State for authentication
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check if user is already logged in on mount
  useEffect(() => {
    const checkAuthStatus = async () => {
      const token = localStorage.getItem('auth_token');
      
      if (token) {
        try {
          // Set authorization header
          api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          
          // Fetch user data
          const response = await api.get('/auth/me');
          setUser(response.data);
        } catch (err) {
          console.error('Authentication check failed:', err);
          localStorage.removeItem('auth_token');
          delete api.defaults.headers.common['Authorization'];
        }
      }
      
      setLoading(false);
    };

    checkAuthStatus();
  }, []);

  /**
   * Login function
   * @param {string} email - User email
   * @param {string} password - User password
   * @returns {Promise<Object>} - User data
   */
  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await api.post('/auth/login', { email, password });
      const { token, user: userData } = response.data;
      
      // Save token and set authorization header
      localStorage.setItem('auth_token', token);
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      
      setUser(userData);
      return userData;
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  /**
   * Register function
   * @param {Object} userData - User registration data
   * @returns {Promise<Object>} - User data
   */
  const register = async (userData) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await api.post('/auth/register', userData);
      const { token, user: newUser } = response.data;
      
      // Save token and set authorization header
      localStorage.setItem('auth_token', token);
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      
      setUser(newUser);
      return newUser;
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  /**
   * Logout function
   */
  const logout = async () => {
    try {
      // Call logout endpoint if needed
      await api.post('/auth/logout');
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      // Remove token and clear user state
      localStorage.removeItem('auth_token');
      delete api.defaults.headers.common['Authorization'];
      setUser(null);
    }
  };

  /**
   * Update user profile
   * @param {Object} updatedData - Updated user data
   * @returns {Promise<Object>} - Updated user data
   */
  const updateProfile = async (updatedData) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await api.put('/auth/profile', updatedData);
      setUser(response.data);
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || 'Profile update failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  /**
   * Reset password
   * @param {string} email - User email
   */
  const resetPassword = async (email) => {
    setLoading(true);
    setError(null);
    
    try {
      await api.post('/auth/reset-password', { email });
    } catch (err) {
      setError(err.response?.data?.message || 'Password reset request failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Value to be provided by the context
  const contextValue = {
    user,
    loading,
    error,
    isAuthenticated: !!user,
    login,
    register,
    logout,
    updateProfile,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
