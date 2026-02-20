import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <Link to='/dashboard'>
                    Dashboard
                    </Link>
                </li>
                <li>
                    <Link to='/profile'>
                    Profile
                    </Link>
                </li>
                <li>
                    <Link to='/login'>
                    Login
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar