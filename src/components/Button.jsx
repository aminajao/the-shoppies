import React from 'react'

function Button({text, buttonClass}) {
    return (
        <button className={`${buttonClass} btn remove`}>
            {text}
        </button>
    )
}

export default Button;
