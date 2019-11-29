import React, { Component } from "react";
import Row from "./Components/Row";
import Col from "./Components/Col";
import Container from "./Components/Container";

class ShoppingCart extends Component {
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

export default ShoppingCart;