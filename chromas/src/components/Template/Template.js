import React, {useState} from 'react';

function Template() {

    const [palette, setPalette] = useState({
        color1: 'fff',
        color2: 'fff',
        color3: 'fff'
      });

    return (
        <div>
            <div>{palette.color1} {palette.color2} {palette.color3}</div>
        </div>
    )
}

export default Template