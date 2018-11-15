import React from 'react';
const ListGroup =({data,itemId,onSelect,id,displayValue})=> {
        return (
            <ul className="list-group">
                {data.map(el=>(
                    <li 
                        onClick = { ()=>onSelect(el) } 
                        key = {el[id]} 
                        className = {itemId === el[id] ? "list-group-item active": "list-group-item" }   
                        style = {{cursor:'pointer'}}
                    >
                        {el[displayValue]}
                    </li>
                ))}
            </ul>
        );
}

export default ListGroup;