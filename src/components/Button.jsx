import React from 'react'

function Button({ text, nominationStatus, btnClass, limit, clickEvent }) {
    return (

        <button disabled={nominationStatus} onClick={clickEvent} className={`${btnClass} btn remove`}>
            {
                nominationStatus === true ? (
                    <>Nominated</>
                ) : limit === 0 ? <>Limit Reached</> : <>{text}</>
            }

        </button>

    )
}

export default Button;
