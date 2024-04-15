import React from 'react';

const Biology = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to the Learning Portal</h1>
      <p style={styles.paragraph}>
        Explore various subjects and improve your knowledge. Choose from the topics above to get started!
      </p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
    maxWidth: '600px',
    margin: 'auto',
  },
  heading: {
    marginBottom: '20px',
    color: '#333',
  },
  paragraph: {
    fontSize: '18px',
    lineHeight: '1.6',
    color: '#555',
  },
};

export default Biology;
