import React, { useState } from 'react';
import Letter from './letter';

function LetterGrid({secretWord, guessedLetters}) {
    

    let letters = secretWord
                    .split('')
                    .map((char, index) => {
                        let val = char.toLowerCase();
                        let isShown = guessedLetters.indexOf(val) > -1;
                        return (
                            <Letter 
                                key={index}
                                value={char} 
                                isShown={isShown}
                            />
                            );
                        });

    return (
        <div className="flex">
            {letters}
        </div>
    );
}

export default LetterGrid;