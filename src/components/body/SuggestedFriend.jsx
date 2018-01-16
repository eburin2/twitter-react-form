import React from 'react';

function SuggestedFriend() {
  const styles = {
    containerStyle: {
      display: 'flex',
      border: '1px solid black',
      padding: '3px',
      alignItems: 'center',
      margin: '3px'
    },
    avatarStyle: {
      backgroundColor: 'purple',
      width: '50px',
      height: '50px'
    }
  }
  return (
    <div style={styles.containerStyle}>
      <div style={styles.avatarStyle}></div>
      <div>
        <p>Donec eu orci et</p>
        <button>Button</button>
      </div>
    </div>
  );
}

export default SuggestedFriend;
