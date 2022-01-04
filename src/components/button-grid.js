import React from 'react';
import Button from './button';

function ButtonGrid({letterGuessed, isShown}) {

    let alphabets = [
        'A','B','C','D','E','F','G','H',
        'I','J','K','L','M','N','O','P',
        'Q','R','S','T','U','V','W','X',
        'Y','Z'
    ]

    let buttons = alphabets.map((letter, index) => (
            <Button 
                key={index} 
                value={letter}
                onClick={letterGuessed}
            />
        ));

    let className = "flex flex-wrap mt-10";

    if (!isShown) {
        className += ' hidden';
    }

    return (
        <div className={className}>
            {buttons}
        </div>
    );
}

export default ButtonGrid;