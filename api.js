/**
 * api.js
 * 
 * Centralized API service configuration using Axios
 * Handles requests, responses, error handling, and authentication
 */

import axios from 'axios';

/**
 * Create axios instance with default config
 */
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || '/api',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  timeout: 10000 // 10 second timeout
});

/**
 * Request interceptor for API calls
 * - Adds authorization headers
 * - Handles request configuration
 */
api.interceptors.request.use(
  (config
