import React from 'react';

function Bio(){
  const styles = {
    containerStyle: {
      width: '300px',
      height: '300px',
      border: '1px solid green',
      marginTop: '20px'
    }
  }

  return(
    <div style={styles.containerStyle}>
      <p style={{padding: '5px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  );
}

export default Bio;
