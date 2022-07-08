import React, { useState } from 'react';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';

const TodoInput = ({ addItem, isEdit, selectedItem ,handelChange, id ,updateItem ,index }) => {

    const [itemText, setItemText] = useState('');
     
    // submit function to add item to do
    const handelSubmit = (event) => {
        event.preventDefault();
        if(!isEdit){
            const item = {
                id: Math.floor(Math.random() * 1000),
                name: itemText
            };
            // add new item in to do list
            addItem(item);
            setItemText('');
        }else{
            const updateValue ={
                id,
                name:selectedItem
            }
            updateItem(index,updateValue);
        }
       
    };

    return (
        <>
            <div className='card py-2 px-3'>
                <h3> ToDo List </h3>
                <form onSubmit={handelSubmit}>
                   {
                    !isEdit?(
                        <div className="input-group mb-3 mt-3">
                        <span className="input-group-text btn btn-primary" id="basic-addon1">
                            <BsFillArrowRightSquareFill /> 
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Task"
                            value={itemText}
                            onChange={(e)=>setItemText(e.target.value)}
                        />
                    </div>
                    ):(
                        <div className="input-group mb-3 mt-3">
                        <span className="input-group-text btn btn-primary" id="basic-addon1">
                            <BsFillArrowRightSquareFill /> 
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            value={selectedItem}
                            onChange={handelChange}
                        />
                    </div>
                    )
                   }

                    <button type="submit" className='btn btn-primary px-5 text-capitalize'>
                        {isEdit ? "save" : "add"}
                    </button>
                </form>
            </div>
        </>
    );
}

export default TodoInput;
