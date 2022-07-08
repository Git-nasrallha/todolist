import React, { Component, createContext } from 'react';

// declear context app
export const AppContext = createContext();



export class GlobalState extends Component {

    state = {
        toDoItem: JSON.parse(localStorage.getItem('toDo') || []),
        isEdit: false,
        id: "",
        selectedItem: "",
        index: ""
    };

    // handelChange to edit item
    handelChange = (e) => {
        this.setState({
            selectedItem: e.target.value
        })
    }

    // add item 
    addItem = (item) => {
        const items = this.state.toDoItem;
        const newItems = [item, ...items];
        this.setState({ toDoItem: newItems });
        localStorage.setItem("toDo", JSON.stringify(newItems));
    };
    // delete item
    deleteItem = (id) => {
        const items = [...this.state.toDoItem];
        const newItem = items.filter(item => item.id !== id);
        this.setState({ toDoItem: newItem });
        localStorage.setItem("toDo", JSON.stringify(newItem));
    };
    //Edit item
    editItem = (id) => {
        const items = [...this.state.toDoItem];
        const selectedValue = items[id]
        this.setState({
            isEdit: true,
            selectedItem: selectedValue.name,
            id: selectedValue.id,
            index: id

        });
    };

    //update item value
    updateItem = (index, value) => {
        const updatedItems = [...this.state.toDoItem];
        updatedItems.splice(index, 1, value);
        this.setState({ toDoItem: updatedItems });
        localStorage.setItem("toDo", JSON.stringify(updatedItems));
        this.setState({
            isEdit: false,
            selectedItem: "",
            id: ""
        })

    };

    render() {
        return (
            <AppContext.Provider value={{
                ...this.state,
                items: this.state.toDoItem,
                addItem: this.addItem,
                deleteItem: this.deleteItem,
                editItem: this.editItem,
                handelChange: this.handelChange,
                updateItem: this.updateItem
            }}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

