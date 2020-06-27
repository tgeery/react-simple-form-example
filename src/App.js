import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class MyLabel extends Component {
    render() {
        const val = this.props.mylabel;
        return (
            <h1>{val}</h1>
        );
    }
}

class MyText extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({mytext: e.target.value});
    }

    handleSubmit(e) {
        alert("submit: " + this.state.mytext);
        this.props.onTextSubmit(this.state.mytext);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="value" value={this.props.mytext} onChange={this.handleChange} />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

class MySubmit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mytext: ''
        };
        this.handleTextSubmit = this.handleTextSubmit.bind(this);
    }

    handleTextSubmit(text) {
        alert("textSubmit: " + text);
        this.setState({
            mytext: text
        });
    }

    render() {
        return (
            <div>
                <MyText onTextSubmit={this.handleTextSubmit}/>
                <MyLabel mylabel={this.state.mytext}/>
            </div>
        );
    }
}

function App() {
  return (
    <div className="App">
        <MySubmit />
    </div>
  );
}

export default App;
