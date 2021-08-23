import React, {useState} from 'react';
import { SketchPicker, AlphaPicker, BlockPicker, ChromePicker, CirclePicker, CompactPicker, GithubPicker, HuePicker, MaterialPicker, PhotoshopPicker, SliderPicker, SwatchesPicker, TwitterPicker } from 'react-color';


function ColorSelector() {
    const [color, setColor] = useState('fff');

    function handleChange(color) {
        setColor(color)
    }

    function handleChangeComplete(color) {
        setColor(color)
    }

    return (
        <div>
            <SketchPicker color={color} onChange={handleChange} onChangeComplete={handleChangeComplete} />
        </div>
    )
}

export default ColorSelector