import React, {useState} from 'react';

function Nav() {

    const [isOpen, setIsOpen] = useState(true);

    function toggleSlide() {
        if (isOpen === true) {
            document.getElementById('nav-container').style.left = '0%'
        }
        if (isOpen === false) {
            document.getElementById('nav-container').style.left = '-100%'
        }
        setIsOpen(!isOpen)
    }

    return (
    <>
        <nav className="nav-container" id="nav-container">
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
                <button onClick={toggleSlide}>Test slider</button>
    </>
    )
}

export default Nav