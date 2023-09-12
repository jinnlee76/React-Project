import React from 'react';
import Button from './Button';
import MenuItem from './MenuItem';

function MenuList({menulist,category,displayMenu}) {
    return (
            <>
              <div className="btn-container">
                    { category.map((item, index) =>{
                      return <Button item={item} key={index} displayMenu={displayMenu}/>
                    }) }
                </div> 
                            
                <div className="section-center">
                     { menulist.map((item) => { 
                       return <MenuItem item={item} key={item.id}/>
                     })
                  
                     }
                </div>
            </>
            
    );
}

export default MenuList;