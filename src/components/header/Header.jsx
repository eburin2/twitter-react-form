import React from 'react';
import Buttons from './Buttons';
import Search from './Search';
import TweetButton from './TweetButton';

function Header(){
  const styles = {
    containerStyle: {
      width: '1200px',
      display: 'flex',
      justifyContent: 'space-around',
      border: '1px solid black',
      padding: '5px'
    },
  }

  return (
    <div style={styles.containerStyle}>
      <Buttons />
      <div>
        <Search />
        <TweetButton />
      </div>
    </div>
  );
}

export default Header;
