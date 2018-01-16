import React from 'react';
import NewsFeedCard from './NewsFeedCard';


function NewsFeed(){
  const styles = {
    containerStyle: {
      width: 500,
      border: '1px solid black',
      margin: 5
    },
    containerFlex: {
      display: 'flex',
      height: 80,
      border: '1px solid black'
    },
    profilePic: {
      width: 50,
      height: 50,
      backgroundColor: 'orange',
      marginLeft: 25,
      marginRight: 50
    }
  }

  return(
    <div style={styles.containerStyle}>
      <div style={styles.containerFlex}>
        <div style={styles.profilePic}></div>
        <div>
          <p>Whats happening?</p>
        </div>
      </div>

      <NewsFeedCard />
      <NewsFeedCard />
      <NewsFeedCard />
      <NewsFeedCard />
      <NewsFeedCard />
      <NewsFeedCard />


    </div>
  );
}

export default NewsFeed;
