import React, { Component } from "react";

class Search extends Component {
    state = {

    };

    componentDidMount() {

    }

    handleInputChange = event => {
        this.setState({ search: event.target.value });
    }

    handleFormSbumit = event => {
        event.preventDefault();
    }

    render () {
        return (

        );
    }
}

export default Search;