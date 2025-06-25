import React, { useEffect, useState } from 'react';
import { getFeedback } from '../api';
import { FaFilter } from 'react-icons/fa';
import './FeedbackDashboard.css';

function FeedbackDashboard() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [sortNewest, setSortNewest] = useState(true);

  useEffect(() => {
    getFeedback().then(res => setFeedbacks(res.data));
  }, []);

  const sortedFeedbacks = [...feedbacks].sort((a, b) =>
    sortNewest
      ? new Date(b.createdAt) - new Date(a.createdAt)
      : new Date(a.createdAt) - new Date(b.createdAt)
  );

  return (
    <div className="dashboard-bg">
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h2>Feedback Dashboard</h2>
          <FaFilter
            className="filter-icon"
            title="Toggle date filter"
            onClick={() => setSortNewest(s => !s)}
            style={{ cursor: 'pointer' }}
          />
        </div>
        <div className="feedback-list">
          {sortedFeedbacks.map(f => (
            <div className="feedback-card" key={f._id}>
              <div className="feedback-header">
                <span className="feedback-name">{f.name}</span>
                <span className="feedback-date">{new Date(f.createdAt).toLocaleString()}</span>
              </div>
              <div className="feedback-email">{f.email}</div>
              <div className="feedback-message">{f.message}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeedbackDashboard;
