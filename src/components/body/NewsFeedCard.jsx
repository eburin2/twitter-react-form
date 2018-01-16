import React from 'react';

function NewsFeedCard(){
  const styles = {
    containerStyle: {
      border: '1px solid black',
      margin: 5,
      padding: 5,
      display: 'flex'
    },
    profilePic: {
      width: '50px',
      height: '50px',
      backgroundColor: 'green',
      // flexGrow: 1
    },
    flexItem: {
      // flexGrow: 1
    }
  }
  return (
    <div style={styles.containerStyle}>
      <div style={styles.profilePic}></div>
      <div style={styles.flexItem}>
        <h4>Card Title</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
  )
}

export default NewsFeedCard;
