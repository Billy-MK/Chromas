import React, {useState} from 'react';
import { SketchPicker, AlphaPicker, BlockPicker, ChromePicker, CirclePicker, CompactPicker, GithubPicker, HuePicker, MaterialPicker, PhotoshopPicker, SliderPicker, SwatchesPicker, TwitterPicker } from 'react-color';

function Nav() {

    const [isOpen, setIsOpen] = useState(false);
    const [color, setColor] = useState('fff');

    function toggleSlide() {
        if (isOpen === true) {
            document.getElementById('nav-container').style.left = '0%'
        }
        if (isOpen === false) {
            document.getElementById('nav-container').style.left = '-100%'
        }
        setIsOpen(!isOpen)
    }

    function handleChange(color) {
        setColor(color)
    }

    function handleChangeComplete(color) {
        setColor(color)
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
                        <SketchPicker color={color} onChange={handleChange} onChangeComplete={handleChangeComplete} />
                        {/* <AlphaPicker /> <BlockPicker /> <ChromePicker /> <CirclePicker /> <CompactPicker /> <GithubPicker /> <HuePicker /> <MaterialPicker /> <PhotoshopPicker /> <SketchPicker /> <SliderPicker /> <SwatchesPicker /> <TwitterPicker /> */}
                    </li>
                </ul>
            </aside>
        </nav>
                <button onClick={toggleSlide}>Test slider</button>
    </>
    )
}

export default Nav