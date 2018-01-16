import React from 'react';

function Profile(){
  const styles = {
    containerStyle: {
      width: '300px',
      height: '300px',
      border: '1px solid green'
    },
    profileTop: {
      backgroundColor: 'blue',
      width: '100%',
      height: '150px',
      position: 'relative'
    },
    profilePic: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '50px',
      height: '50px',
      backgroundColor: 'red'
    },
    profileStats: {
      display: 'flex',
      justifyContent:'space-around'
    }
  }
  return(

    <div style={styles.containerStyle}>

      <div style={styles.profileTop}>
        <div style={styles.profilePic}></div>
      </div>

      <div>
        <p>Kellie A. Corrigan</p>
        <div style={styles.profileStats}>
          <p>Tweets</p>
          <p>Following</p>
          <p>Followers</p>
        </div>
      </div>

    </div>
  );
}

export default Profile;
