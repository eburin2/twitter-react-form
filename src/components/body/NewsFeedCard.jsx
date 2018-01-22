import React from 'react';
import PropTypes from 'prop-types';

class NewsFeedCard extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){

    const styles = {
      containerStyle: {
        border: '1px solid black',
        margin: 5,
        padding: 5,
        display: 'flex'
      },
      profilePic: {
        width: '50px',
        height: '50px',
        backgroundColor: 'green',
      }
    };

    return (
      <div style={styles.containerStyle}>
        <div style={styles.profilePic}></div>
        <div style={styles.flexItem}>
          <h4>{this.props.title}</h4>
          <p>{this.props.description}</p>
          <button >Like</button>
        </div>
      </div>
    );
  }
}

NewsFeedCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default NewsFeedCard;
