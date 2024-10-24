import React from 'react';

const LetsGoPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Another Page!</h1>
      <p style={styles.text}>
        You've successfully navigated to another page. This is a random page with some placeholder content. 
        You can customize this page with whatever content you like!
      </p>
      <p style={styles.text}>
        Explore, learn, and enjoy your journey through this website. Every page holds a new experience.
      </p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
    padding: '20px',
  },
  heading: {
    fontSize: '36px',
    color: '#333',
    marginBottom: '20px',
  },
  text: {
    fontSize: '18px',
    color: '#666',
    textAlign: 'center',
    maxWidth: '600px',
    lineHeight: '1.5',
  },
};

export default LetsGoPage;
