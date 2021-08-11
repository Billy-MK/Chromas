import React from 'react';

function Nav() {
    return (
        <nav className="nav-container">
            <aside className="menu">
                <ul className="menu-list">
                    <li><a>Home</a></li>
                    <li>
                        <a>Options</a>
                        <ul>
                            <li><a>Change template</a></li>
                        </ul>
                    </li>
                </ul>
            </aside>
        </nav>
    )
}

export default Nav