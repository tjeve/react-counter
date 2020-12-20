import React from 'react'

function Button(props) {
    //You can pass functions to props with 'props.onClick'
    return (
        <button className={props.valChange} onClick={props.onClick}>{props.valChange}</button>
    )
} 

export default Button