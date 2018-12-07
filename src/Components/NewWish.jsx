import React, { Component } from 'react';

class NewWish extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            comment: '',
            link: '',
            image: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        this.setState({[target.name]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.handleWish(this.state);

        this.setState({title: "", comment: "", link: "", image: ""})
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    title:
                    <input name = "title" type="text" value={this.state.title} onChange={this.handleChange} />
                </label>
                <label>
                    comment:
                    <input name = "comment" type="text" value={this.state.comment} onChange={this.handleChange} />
                </label>
                <label>
                    link:
                    <input name = "link" type="text" value={this.state.link} onChange={this.handleChange} />
                </label>
                <label>
                    image:
                    <input name = "image" type="text" value={this.state.image} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default NewWish;