import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="inner-content">
                    <div className="brand">
                        <Link to="/">Movieefy!!!</Link>
                    </div>
                    <ul className="nav-links">
                        <li>
                            <Link to="/">Bucket List</Link>
                        </li>
                        <li>
                            <Link to="/watched">Watched Movies</Link>
                        </li>
                        <li>
                            <Link to="/add" className="btn">+ Add</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header
