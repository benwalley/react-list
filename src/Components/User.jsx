import React, { Component } from 'react';
import NewWish from './NewWish'
import UserWishlist from "./UserWishlist";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div>
                <h1>Welcome {this.props.user.name}</h1>
                <NewWish handleWish = {this.props.handleWish}/>
                <UserWishlist list = {this.props.user.list} />
            </div>
        );
    }
}

export default User;