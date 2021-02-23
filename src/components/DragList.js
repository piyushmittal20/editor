import React from "react";
import Drag from "./Drag";
import logo from "../image/logo.png";
// import Image1 from './images/image1.jpg';
// import Image2 from './images/image2.jpg';
// import Image3 from './images/image3.jpg';

// console.log(Image1);

const items = ['item1', 'item2', 'item3', 'item4', 'item5'];

// eslint-disable-next-line
export default () => {
    return (
        <div className="drag-drop-container">
            {items.map(item => (
                <Drag key={item} dataItem={item} dragImage={logo} dropEffect="link">
                    <div className="item">{
                        // <img src={item} alt="..." />
                        item
                    }</div>
                </Drag>
            ))}
        </div>
    )
};
