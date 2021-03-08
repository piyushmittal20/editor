import React from "react";
import DropTarget from "./DropTarget";
import Draggable from 'react-draggable';

    // eslint-disable-next-line
export default () => {
    const [items, setItems] = React.useState([]);

    console.log(items);

    const itemDropped = item => setItems([...items, item]);
    return (
        <DropTarget onItemDropped={itemDropped} dropEffect="link">
            <div className="drag-drop-container">
            <div id="old-block"></div>
                {items.map(item => (
                    <Draggable key={item}>
                        <div className="item">
                            {<img className="image" src={item} alt="..." />}
                        </div>
                    </Draggable>
                ))}
            </div>
        </DropTarget>
    );
};
