import React from 'react';
import { useState } from 'react';

function Button({value, onClick}){
    const [isClicked, setIsClicked] = useState(false);
    let className = 'button';

    if (isClicked) {
        className += ' guessed';
    }

    function clickHandler() {
        console.log("clickHandler invoked;");
        setIsClicked(true);
        onClick(value);
    }

    return (
        <button 
            className={className}
            onClick={clickHandler}
            >
            {value}
        </button>
    );
}

export default Button;