import React from 'react';

function NewsFeedCard(props){
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
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default NewsFeedCard;
