import React, {useState} from 'react';
import { SketchPicker, AlphaPicker, BlockPicker, ChromePicker, CirclePicker, CompactPicker, GithubPicker, HuePicker, MaterialPicker, PhotoshopPicker, SliderPicker, SwatchesPicker, TwitterPicker } from 'react-color';


function ColorSelector() {
    const [color, setColor] = useState('fff');
    const [isOpen, setIsOpen] = useState('false');

    function handleChange(color) {
        setColor(color)
    }

    function handleChangeComplete(color) {
        setColor(color)
    }

    function toggleOpen() {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <button onClick={toggleOpen} className="button selector"></button>
            {isOpen ? null : <SketchPicker color={color} onChange={handleChange} onChangeComplete={handleChangeComplete} />};
        </div>
    )
}

export default ColorSelector