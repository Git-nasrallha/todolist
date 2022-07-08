import React ,{useContext} from 'react';
import { AppContext } from '../contextapi/GlobalState';
import ListItem from './ListItem';

const ToDoList = () => {
  const {items,deleteItem , editItem} = useContext(AppContext);
  return (
    <ul className='list-unstyled text-capitalize mt-4 px-3'>
        <h3> my list item </h3>
      <ListItem items={items} deleteItem={deleteItem} editItem={editItem} />
    </ul>
  );
}

export default ToDoList;
