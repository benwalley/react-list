import React, { Component } from 'react';

class UserWishlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className = "wishlist">
                {this.props.list.map((item, index) => (
                    <div key = {index}>
                        <span className = "listTitle">{item.title}</span>
                        <span className = "listComment">{item.comment}</span>
                        <a href = {item.link} className = "listLink">{item.link}</a>
                        <img classname = "listImage" src = {item.image}></img>
                    </div>
                    ))}
            </div>
        );
    }
}

export default UserWishlist;