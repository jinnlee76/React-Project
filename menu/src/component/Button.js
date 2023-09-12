import React from 'react';

const Button = ({item,displayMenu}) => {
    
    return (
        <button className="filter-btn" type="button" value={item} onClick={() => displayMenu(item)}>{item}</button>
    );
}

export default Button;