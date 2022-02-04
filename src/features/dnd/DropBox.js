import React, { useState } from 'react';
import { useDrop } from 'react-dnd';

const DropBox = () => {

    const [droppedItems,setDroppedItems] = useState([]);

    const getIsOverStyles = (isOver) => {
        if(isOver){
            return {backgroundColor:'aquamarine',border:'1px solid tomato'}
        }

    }

    const [{isOver}, drop] = useDrop(() => ({
        accept:'PORT',
        drop:(item,monitor) => {
            setDroppedItems(prev => [...prev,item])
            
        },
        collect:(monitor) => ({isOver:monitor.isOver()})
    }))

    

  return <div className='drop' ref={drop} style={getIsOverStyles(isOver)}>
         {droppedItems.map(item => <div className='port' key={item.id}>{item.name}</div>)}
  </div>;
};

export default DropBox;
