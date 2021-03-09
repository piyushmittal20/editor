import React from "react";
import Drag from "./Drag";
import logo from "../image/logo.png";

// console.log(Image1);

// const items = ['item1', 'item2', 'item3', 'item4', 'item5'];

// const items = [Image1, Image2, Image3];

// eslint-disable-next-line
export default ({selectedFiles}) => {
    return (
        <div className="drag-drop-container">
            {selectedFiles && selectedFiles.map(item => (
                <Drag key={item} dataItem={item} dragImage={logo} dropEffect="link">
                    <div className="item">{
                        <img className="image" src={item} alt="..." />
                        // item
                    }</div>
                </Drag>
            ))}
        </div>
    )
};
