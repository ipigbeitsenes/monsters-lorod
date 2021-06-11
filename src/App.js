import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './App.css';

import { CardList } from './components/card-list/Card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };

  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(Response => Response.json())
      .then(users => this.setState({ monsters: users }));
  }
  render() {
    const { monsters, searchField } = this.state;
    const filterdMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
         <h1>Monsters Lorod</h1>
         <h4>By Ipigbe Itsenegbemhe</h4>
        <SearchBox
          placeholder='search monsters'
          handleChange={e =>
            this.setState({ searchField: e.target.value })}   />
     <br /><br />
        <CardList monsters={filterdMonsters} />

      </div>
    );
  }
}
/* function App() {
  return (
    <div className="App">
      <p>man</p>
    </div>
  );
}
*/
export default App;
