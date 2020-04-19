import React from 'react'
import {NavLink} from 'react-router-dom'

function Navigation() {
    return(
        <div>
            <NavLink to='/meme'>Home</NavLink> <br />
            <NavLink to='/'>About</NavLink>
        </div>
    )
}

export default Navigation