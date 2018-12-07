import React, { Component } from 'react';
import User from '../Components/Dashboard'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page:"/"
        };
    }
    render() {
        return (
            <div>
                <Navbar/>
                <User/>

            </div>
        );
    }
}

export default Home;