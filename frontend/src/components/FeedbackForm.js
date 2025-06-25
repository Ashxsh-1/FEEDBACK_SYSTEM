import React, { useState } from 'react';
import { submitFeedback } from '../api';

function FeedbackForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitFeedback(form);
    alert('Feedback submitted!');
    setForm({ name: '', email: '', message: '' });
  };

 
  const goToDashboard = () => {
    window.location.href = '/dashboard';
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #4e9af1 0%, #8f5be8 100%)',
        position: 'relative',
      }}
    >
      {/* Dashboard Button */}
      <button
        onClick={goToDashboard}
        style={{
          position: 'absolute',
          top: 32,
          right: 48,
          padding: '10px 22px',
          borderRadius: '8px',
          background: 'linear-gradient(90deg, #4e9af1 0%, #8f5be8 100%)',
          color: '#fff',
          fontWeight: 'bold',
          fontSize: '15px',
          border: 'none',
          boxShadow: '0 2px 8px rgba(78,154,241,0.07)',
          cursor: 'pointer',
          transition: 'background 0.2s',
        }}
      >
        Dashboard
      </button>

      {/* Main Heading */}
      <h1
        style={{
          textAlign: 'center',
          marginBottom: '28px',
          color: '#fff',
          fontWeight: 'bold',
          fontSize: '2.3rem',
          letterSpacing: '1px',
          textShadow: '0 2px 8px rgba(78,154,241,0.18)',
        }}
      >
        User Feedback System
      </h1>

      <form
        onSubmit={handleSubmit}
        style={{
          background: '#fff',
          borderRadius: '16px',
          padding: '40px 32px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
          minWidth: '340px',
          display: 'flex',
          flexDirection: 'column',
          gap: '18px',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '12px' }}>Feedback</h2>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          required
          style={{
            border: 'none',
            borderBottom: '2px solid #e0e0e0',
            padding: '10px 0',
            fontSize: '16px',
            outline: 'none',
            background: 'transparent',
          }}
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
          style={{
            border: 'none',
            borderBottom: '2px solid #e0e0e0',
            padding: '10px 0',
            fontSize: '16px',
            outline: 'none',
            background: 'transparent',
          }}
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Message"
          required
          rows={4}
          style={{
            border: 'none',
            borderBottom: '2px solid #e0e0e0',
            padding: '10px 0',
            fontSize: '16px',
            outline: 'none',
            background: 'transparent',
            resize: 'none',
          }}
        />
        <button
          type="submit"
          style={{
            marginTop: '18px',
            padding: '12px 0',
            border: 'none',
            borderRadius: '8px',
            background: 'linear-gradient(90deg, #4e9af1 0%, #8f5be8 100%)',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'background 0.2s',
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default FeedbackForm;
