import React from 'react';
import Header from './header/Header';
import TicketList from './TicketList';
import Body from './body/Body';
import NewNewsFeedForm from './body/NewNewsFeedForm';
import { Switch, Route } from 'react-router-dom';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterNewsFeed: []
    };
    this.handleAddingNewNewsToList = this.handleAddingNewNewsToList.bind(this);
  }

  handleAddingNewNewsToList(newNewsCard) {
    let newMasterNewsFeed = this.state.masterNewsFeed.slice();
    newMasterNewsFeed.push(newNewsCard);
    this.setState({masterNewsFeed: newMasterNewsFeed});
  }

  render(){
    return(
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><Body newsFeed={this.state.masterNewsFeed} />} />
          <Route path='/newnewsfeedform' render={()=><NewNewsFeedForm onNewNewsCardCreation={this.handleAddingNewNewsToList} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
