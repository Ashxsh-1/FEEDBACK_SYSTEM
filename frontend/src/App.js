import React from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackDashboard from './components/FeedbackDashboard';

function App() {
  // Only show FeedbackForm at /, and FeedbackDashboard at /dashboard
  if (window.location.pathname === '/dashboard') {
    return <FeedbackDashboard />;
  }
  return <FeedbackForm />;
}

export default App;
