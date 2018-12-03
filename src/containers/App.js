import React from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js'
import './App.css';

import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = (state) => {
  return {  // State that is derived from our reducers
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {  // Dispatches to the reducer.
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends React.Component {
  componentDidMount() {
    this.props.onRequestRobots()  // Reference to our mapDispatchToProps
  }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filterRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return isPending ? <h1>Loading</h1> 
      : 
        (
          <div className="tc">
            <h1 className="f1">RobotFriends</h1>
            <SearchBox searchChange={onSearchChange}/>
              <Scroll>
                <CardList robots={filterRobots}/>
              </Scroll>
          </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
