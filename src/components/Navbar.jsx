import React, { Component } from 'react';

class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: "name"
        }
    }

    render() {
        
        return <h1>{this.state.value}</h1>
    }
}

export default Navbar
