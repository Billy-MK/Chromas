import React, {useState} from 'react';

function Nav() {

    const [isOpen, setIsOpen] = useState(false);

    function toggleSlide() {
        isOpen ? setIsOpen(false) : setIsOpen(true);
        console.log(isOpen);
    }

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
                <button onClick={toggleSlide}>TestSlider</button>
            </aside>
        </nav>
    )
}

export default Nav