import React from 'react';
import SuggestedFriend from './SuggestedFriend';

var masterSuggestedFeed = [
  {
    name: 'Thato',
    description: 'boy'
  },
  {
    name: 'Haley',
    description: 'girl'
  },
  {
    name: 'brandon',
    description: 'unknown'
  }
]

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
      {masterSuggestedFeed.map((suggestedFriend, index) =>
        <SuggestedFriend name={suggestedFriend.name}
          description={suggestedFriend.description}
          key={index}/>
      )}


    </div>
  );
}

export default SuggestedFeed;
