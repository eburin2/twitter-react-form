import React from 'react';
import { Link } from 'react-router-dom';

function Buttons(){
  return(
    <div>
      <Link to='/'>Home</Link> | <Link to='/newnewsfeedform'>Add News Feed</Link>
    </div>
  );
}


export default Buttons;
