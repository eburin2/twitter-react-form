import React from 'react';
import Profile from './Profile';
import Bio from './Bio';
import NewsFeed from './NewsFeed';
import SuggestedFeed from './SuggestedFeed';

function Body(){
const styles ={
  containerStyle: {
    display: 'flex'
  }
}

  return(
    <div style={styles.containerStyle}>
      <div>
        <Profile />
        <Bio />
      </div>

      <div>
        <NewsFeed />
      </div>

      <div>
        <SuggestedFeed />
      </div>
    </div>
  );
}

export default Body;
