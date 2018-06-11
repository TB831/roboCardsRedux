import React from 'react';
import CardList from './CardList.js';
import SearchBox from './SearchBox.js';
import { robots } from './robots.js';

const App = () => {
  return (
    <div className="tc">
      <h1>RobotFriends</h1>
      <SearchBox/>
      <CardList robots={robots}/>
    </div>
  );
}

export default App;
