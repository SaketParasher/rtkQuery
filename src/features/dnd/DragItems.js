import React,{useState} from 'react';
import { useDrag } from 'react-dnd';

const portItems = [
    {id:1,name:'Port 1'},{id:2,name:'Port 2'},{id:3,name:'Port 3'},{id:4,name:'Port 4'},{id:5,name:'Port 5'},
    {id:6,name:'Port 6'},{id:7,name:'Port 7'},{id:8,name:'Port 8'},{id:9,name:'Port 9'},{id:10,name:'Port 10'},
    {id:11,name:'Port 11'},{id:12,name:'Port 12'},{id:13,name:'Port 13'},{id:14,name:'Port 14'},{id:15,name:'Port 15'},
]

const Draggable = ({id,name,updateItems,children}) => {
    
    const getDragStyle = (isDragging) => {
        if(isDragging){
            return {border:'1px solid tomato',color:'tomato'}
        }
        // return isDragging ? {border:'1px solid tomato',} : {border:'1px solid black'} 
    }
    const [ collected, drag, dragPreview ] = useDrag( () => ({
        type:'PORT',
        item: {id,name},
        options:{
            dropEffect:"move"
        },
        end:(item,monitor) => {
            console.log("Item was dropped ",item);
            updateItems(prev => prev.filter(i => i.id !== item.id))
            //console.log("monitor didDrop ",monitor.didDrop());
            //console.log("monitor getDropResult ",monitor.getDropResult())
        },
        collect:(monitor) => ({
            isDragging:monitor.isDragging(),
            isDropped:monitor.didDrop()
        }),
        canDrag:(monitor) => !monitor.didDrop()
        
    }))
    console.log('COLLECTED ---------------',collected);
    return (
        <div className='port' ref={drag} style={getDragStyle(collected.isDragging)}>{children}</div>
    )
}

const DragItems = () => {
    const [items,setItems] = useState(portItems);

  return <div className='port-container'>
      {items.map(item => <Draggable key={item.id} id={item.id} name={item.name} updateItems={setItems}>{item.name}</Draggable>)}
  </div>;
};

export default DragItems;
