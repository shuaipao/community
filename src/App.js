import React, {Component} from 'react';
import logo from './static/imgs/logo.svg';
import './static/css/App.scss';
import { DatePicker } from 'antd';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
                <div>
                    <DatePicker />
                </div>
            </div>
        );
    }
}

export default App;
