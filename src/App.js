import React from 'react';
import './app.css';

import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

import GameBoard from './components/game-board';
import WordSelect from './components/word-select';

class App extends React.Component {
    
    state = {
        secretWord: '',
        userGuessedTheWord: false
    }

    componentDidMount(){
        this.setState({
            secretWord: ''
        });
    }

    onWordSelectedHandler = (val) => {
        this.setState({
            secretWord: val
        });
    }

    render() {
        return(
        <div className="app-container">
            <ReactNotification />
            <h1>Welcome to Hangname!</h1>
            <p>Do you want to play a game?</p>
            <div>
                <WordSelect 
                    isShown={!this.state.secretWord}
                    onWordSelected={val => this.onWordSelectedHandler(val)}
                />
                <GameBoard 
                    secretWord={this.state.secretWord}
                    maxErrors={6}
                    isShown={this.state.secretWord}
                />
            </div>
        </div>
        );
    }
}

export default App;