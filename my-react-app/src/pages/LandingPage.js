import React from 'react';
import './Landing.css'; // Include your CSS file for custom styles
import { Tabs, Tab } from '@mui/material'; // Optional: Use Material-UI for tabs

function Landing() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="landing-container">
      <header className="landing-header">
        <h1>Welcome to Kumbhaj.tech</h1>
        <p>Your go-to place for tech solutions!</p>
      </header>
      
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Home_tour" />
        <Tab label="User_logIn" />
        <Tab label="Dashboard" />
        <Tab label="Write_article" />
        <Tab label="Coming_soon" />
      </Tabs>

      <div className="tab-content">
        {value === 0 && <LandingTab />}
        {value === 1 && <LoginTab />}
        {value === 2 && <DashboardTab />}
        {value === 3 && <ArticleWriteTab />}
        {value === 4 && <PlaceholderTab />}
      </div>
    </div>
  );
}

function LandingTab() {
  return (
    <div className="tab-section">
      <h2>HomeTour</h2>
      <p>This is where you introduce your website and provide key information.</p>
    </div>
  );
}

function LoginTab() {
  return (
    <div className="tab-section">
      <h2>Login Page</h2>
      <p>Enter your credentials to access the dashboard.</p>
    </div>
  );
}

function DashboardTab() {
  return (
    <div className="tab-section">
      <h2>Dashboard</h2>
      <p>Manage your articles, view analytics, and more.</p>
    </div>
  );
}

function ArticleWriteTab() {
  return (
    <div className="tab-section">
      <h2>Article Write</h2>
      <p>Write and publish your articles here!</p>
    </div>
  );
}

function PlaceholderTab() {
  return (
    <div className="tab-section">
      <h2>Coming Soon</h2>
      <p>New features coming soon. Stay tuned!</p>
    </div>
  );
}

export default Landing;
