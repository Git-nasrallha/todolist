import React from 'react';
import { AiTwotoneEdit, AiFillDelete } from 'react-icons/ai';

const ListItem = ({ items ,deleteItem ,editItem}) => {

  return (
    <>
      {
        items.map((item,index) => {
          return (
            <li key={item.id} className='d-flex justify-content-around mt-3'>
              <h6> {item.name}</h6>
              <div className='list-action'>
                <span 
                className='mx-2 text-success'
                onClick={()=>{editItem(index)}}
                >
                  <AiTwotoneEdit />
                </span>
                <span 
                className='mx-2 text-danger'
                onClick={()=>{deleteItem(item.id)}}
                >
                  <AiFillDelete />
                </span>
              </div>
            </li>
          )
        })
      }
    </>
  );
}

export default ListItem;
