import React from 'react';
import SuggestedFriend from './SuggestedFriend';

function SuggestedFeed() {
  const styles = {
    containerStyle: {
      width: '350px',
      border: '1px solid black',
      padding: '5px'
    }
  }


  return (
    <div style={styles.containerStyle}>
      <p>Lorem Ipsum</p>
      <SuggestedFriend />
      <SuggestedFriend />
      <SuggestedFriend />

    </div>
  );
}

export default SuggestedFeed;
