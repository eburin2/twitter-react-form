import React from 'react';
import NewsFeedCard from './NewsFeedCard';
import PropTypes from 'prop-types';


function NewsFeed(props){
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
  };



  return(
    <div style={styles.containerStyle}>
      <div style={styles.containerFlex}>
        <div style={styles.profilePic}></div>
        <div>
          <p>Whats happening?</p>
        </div>
      </div>
      {props.newsFeed.map((newsfeedcard) =>
        <NewsFeedCard
          title={newsfeedcard.title}
          description={newsfeedcard.description}
          key={newsfeedcard.id} />
      )}
    </div>
  );
}

NewsFeed.propTypes = {
  newsFeed: PropTypes.array
};

export default NewsFeed;
