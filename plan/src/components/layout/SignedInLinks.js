import React from 'react'
import { NavLink } from 'react-router-dom';

export default function SignedInLinks() {
  return (
    <ul className="right">
        <li>
            <NavLink to='/create'>new project</NavLink>
        </li>
        <li>
            <NavLink to='/'>logout</NavLink>
        </li>
        <li>
            <NavLink to='/' className='btn btn-floating pink lighten-1'>MM</NavLink>
        </li>
    </ul>
  )
}
