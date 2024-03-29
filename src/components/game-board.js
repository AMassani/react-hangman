import React from 'react';
import { useState } from 'react';
import ButtonGrid from './button-grid';
import LetterGrid from './letter-grid';


function GameBoard({secretWord, maxErrors, isShown}){

    const [guessedLetters, setGuessedLetters] = useState([]);
    const [errorCount, setErrorCount] = useState(0);

    const letterGuessedHandler = function(letter){
        let val = letter.toLowerCase();

        if (secretWord.toLowerCase().indexOf(val) === -1) {
            setErrorCount(errorCount + 1);
        }

        setGuessedLetters(prev => [...prev, val]);
    }

    return (
        <div className={isShown ? '':'hidden'}>
            <div>
                Mistakes left: {maxErrors - errorCount}
            </div>
            <LetterGrid 
                secretWord={secretWord} 
                guessedLetters={guessedLetters} 
            />
            <ButtonGrid 
                letterGuessed={letterGuessedHandler} 
                isShown={errorCount < maxErrors}
            />
        </div>
    );
}

export default GameBoard;