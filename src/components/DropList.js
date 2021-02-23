import React from "react";
import DropTarget from "./DropTarget";
import Draggable from 'react-draggable';

    // eslint-disable-next-line
export default () => {
    const [items, setItems] = React.useState([]);

    const itemDropped = item => setItems([...items, item]);
    return (
        <DropTarget onItemDropped={itemDropped} dropEffect="link">
            <div className="drag-drop-container">
                {items.map(item => (
                    <Draggable key={item}>
                        <div className="item">
                            {/* {<img src={item} alt="..." />} */}
                            {item}
                        </div>
                    </Draggable>
                ))}
            </div>
        </DropTarget>
    );
};
