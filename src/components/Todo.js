import React ,{useContext} from 'react';
import { AppContext } from '../contextapi/GlobalState';
import TodoInput from './TodoInput';
import ToDoList from './ToDoList';



const Todo = () => {
  const {addItem,isEdit ,selectedItem ,handelChange ,id ,updateItem,index} = useContext(AppContext);
 
  return (
    <div>
      <TodoInput 
       addItem={addItem}
       isEdit={isEdit} 
       selectedItem={selectedItem} 
       handelChange={handelChange}
       id={id}
       index={index}
       updateItem={updateItem}
       />
      <ToDoList />
    </div>
  );
}

export default Todo;
