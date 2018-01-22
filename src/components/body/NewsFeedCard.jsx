import React from 'react';
import PropTypes from 'prop-types';

class NewsFeedCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      likeStatus: false
    };

    this.setLike = this.setLike.bind(this);
    this.setDisLike = this.setDislike.bind(this);
}

  setLike() {
    this.setState({likeStatus: true});
  }

  setDislike() {
    this.setState({likeStatus: false});
  }
  render(props){
    let currentStatus = null;
    if (this.state.likeStatus) {
      currentStatus = <p>Liked</p>
      } else {
        currentStatus = <p>Not Liked</p>
      }

    let currentButton = null;
    if (this.state.likeStatus === true) {
      currentButton = <button onClick={this.setDislike}>Dislike</button>
    } else {
      currentButton = <button onClick={this.setLike}>Like</button>
    }



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
          {currentButton}
          {currentStatus}
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
