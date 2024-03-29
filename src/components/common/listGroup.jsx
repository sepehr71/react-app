import React from 'react';

const ListGroup  = ({items ,textProperty,valueProperty, onItemSelect , currentGenre}) => {
    
    return( 
      <ul className="list-group">
        {items.map (item =>
         <li key={item[valueProperty]} 
          className={item === currentGenre ? "list-group-item active" : "list-group-item"} onClick={() => onItemSelect(item)}>{item[textProperty]}</li>
            )}
      </ul>
    )
}
 
export default ListGroup ;