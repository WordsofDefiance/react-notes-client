import React from 'react'
import './button.style.css'

export const Button = ({classes='', children, type='submit'}) => (
    <button type={type} className={'ui-button ' + classes}>{children}</button>
)