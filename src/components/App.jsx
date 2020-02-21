// import React from 'react';

// let App = (props) => <h1>{props.string}</h1>

import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "This is from App component's state!",
            placeholder: "input some text",
            hasLoaded: false
        }
    }

    componentDidMount = () => this.setState({ hasLoaded: !this.state.hasLoaded });
    handleInput = (e) => this.setState({ inputVal: e.target.value });
    toggleLoaded = () => this.setState({ hasLoaded: !this.state.hasLoaded });

    render() {
        if (this.state.hasLoaded) {
            return (
                <>
                    <input onChange={(e) => this.handleInput(e)} type="text" placeholder={this.state.placeholder} value={this.state.inputVal || ""} />
                    <button onClick={() => this.toggleLoaded()}>Toggle hasLoaded!</button>
                    <h1>{this.props.string}!</h1>
                    <h2>{this.state.text}</h2>
                </>
            )
        } else {
            return <button onClick={() => this.toggleLoaded()}>Toggle hasLoaded!</button>
        }
    }
}

export default App
