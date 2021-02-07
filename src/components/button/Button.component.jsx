import React from 'react'
import './button.style.css'

export const Button = ({classes='', children, type='submit', onClick=()=>console.log('')}) => (
    <div>
        <button onClick={onClick} type={type} className={'ui-button ' + classes}>{children}</button>
    </div>
)