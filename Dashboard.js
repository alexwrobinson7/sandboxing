/**
 * Dashboard.js
 * 
 * Main dashboard page component that displays analytics, 
 * user information, and application statistics.
 * This page is protected and only available to authenticated users.
 */

import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { NotificationContext } from '../contexts/NotificationContext';

// Import components
import DashboardHeader from '../components/dashboard/DashboardHeader';
import AnalyticsChart from '../components/dashboard/AnalyticsChart';
import StatisticsCards from '../components/dashboard/StatisticsCards';
import RecentActivity from '../components/dashboard/RecentActivity';
import QuickActions from '../components/dashboard/QuickActions';

// Import API services
import dashboardService from '../services/dashboardService';

/**
 * Dashboard component that displays user analytics and statistics
 */
const Dashboard = () => {
  // Access authentication context
  const { user } = useContext(AuthContext);
  const { addNotification } = useContext(NotificationContext);
  
  // State for dashboard data
  const [analyticsData, setAnalyticsData] = useState(null);
  const [statistics, setStatistics] = useState(null);
  const [recentActivity, setRecentActivity] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timeRange, setTimeRange] = useState('week'); // 'day', 'week', 'month', 'year'

  /**
   * Fetch dashboard data from API
   */
  useEffect(() => {
    const fetchDashboardData = async () => {
      setLoading(true);
      try {
        // Fetch analytics data based on selected time range
        const analyticsResponse = await dashboardService.getAnalytics(timeRange);
        setAnalyticsData(analyticsResponse.data);
        
        // Fetch general statistics
        const statsResponse = await dashboardService.getStatistics();
        setStatistics(statsResponse.data);
        
        // Fetch recent activity
        const activityResponse = await dashboardService.getRecentActivity();
        setRecentActivity(activityResponse.data);
        
        setError(null);
      } catch (err) {
        console.error('Error fetching dashboard data:', err);
        setError('Failed to load dashboard data. Please try again later.');
        addNotification({
          type: 'error',
          message: 'Failed to load dashboard data',
          duration: 5000
        });
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [timeRange, addNotification]);

  /**
   * Handle time range change
   * @param {string} range - Selected time range
   */
  const handleTimeRangeChange = (range) => {
    setTimeRange(range);
  };

  /**
   * Render loading state
   */
  if (loading && !analyticsData) {
    return (
      <div className="dashboard loading">
        <div className="loading-spinner">
          <span className="visually-hidden">Loading dashboard data...</span>
        </div>
      </div>
    );
  }

  /**
   * Render error state
   */
  if (error && !analyticsData) {
    return (
      <div className="dashboard error">
        <div className="error-message">
          <h2>Something went wrong</h2>
          <p>{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="btn btn-primary"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <DashboardHeader 
        user={user}
        timeRange={timeRange}
        onTimeRangeChange={handleTimeRangeChange}
      />
      
      {/* Statistics Cards */}
      {statistics && (
        <StatisticsCards statistics={statistics} loading={loading} />
      )}
      
      {/* Main Analytics Chart */}
      <section className="analytics-section" aria-labelledby="analytics-heading">
        <h2 id="analytics-heading">Analytics Overview</h2>
        {analyticsData && (
          <AnalyticsChart 
            data={analyticsData} 
            timeRange={timeRange}
            loading={loading}
          />
        )}
      </section>
      
      <div className="dashboard-grid">
        {/* Recent Activity */}
        <section className="recent-activity-section" aria-labelledby="activity-heading">
          <h2 id="activity-heading">Recent Activity</h2>
          <RecentActivity 
            activities={recentActivity}
            loading={loading}
          />
        </section>
        
        {/* Quick Actions */}
        <section className="quick-actions-section" aria-labelledby="actions-heading">
          <h2 id="actions-heading">Quick Actions</h2>
          <QuickActions user={user} />
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
