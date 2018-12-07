import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import User from './Components/User';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                {name: "Ben", list: []},
                {name: "Joel", list: []}
            ],
            currentUser: 0
        };
    }
    //should get passed title, comment
    handleAddWish = (data) => {
      // duplicate of users
      const newUsers = this.state.users;
      // add new value to list
      newUsers[this.state.currentUser].list.push({title: data.title, comment: data.comment, link: data.link, image: data.image});

      this.setState({users: newUsers})
    }

    render() {
        return (
            <div className="App">
                <Navbar/>
                <User user={this.state.users[this.state.currentUser]} handleWish = {this.handleAddWish}></User>

            </div>
        );
    }
}

export default App;
