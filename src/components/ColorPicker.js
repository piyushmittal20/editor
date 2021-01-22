import {BlockPicker, SketchPicker} from 'react-color';
import {useState} from 'react';

const ColorPicker = ({color, setColor}) => {
    const [showColorPicker, setShowColorPicker] = useState(false)
    const [showColorPicker2, setShowColorPicker2] = useState(false)

    const stylesObj = {
        background: color
    }

    return (
        <div className='box'>
            <button 
            className='pickerButton'
      onClick={() => setShowColorPicker(showColorPicker => !showColorPicker)}>
        {showColorPicker ? ' Close color picker' : 'Pick a color'}</button>
      {
        showColorPicker && (
            <div>
                <button
                className='pickerButton'
                onClick={() => setShowColorPicker2(showColorPicker2 => !showColorPicker2)}>
                    {showColorPicker2 ? 'SketchPicker' : 'BlockPicker'}</button>
                    {
                        showColorPicker2 ? 
                        <SketchPicker color={color} onChange={updatedcolor => setColor(updatedcolor.hex)} />
                        : <BlockPicker color={color} onChange={updatedcolor => setColor(updatedcolor.hex)} />
                    }
            </div>
        )
      }
            <div style={stylesObj} className="smallBox"></div>
        </div>
    )
}

export default ColorPicker;