import React from 'react';
import { useState } from 'react';

function WordSelect({isShown, onWordSelected}) {

    const [secretWord, setSecretWord] = useState('');

    return (
        <div className={isShown ? '':'hidden'}>
            <input 
                type="text"
                onChange={(e) => setSecretWord(e.target.value)}
            />
            <button className="ml-10"
                onClick={(e) => onWordSelected(secretWord)}
            >
                Set Word
            </button>
        </div>
    );
}

export default WordSelect;