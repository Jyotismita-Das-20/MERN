import { createContext, useReducer } from "react";
import initialTodoItems from "./InitialTodoItems";
import TodoItemsReducer from "./TodoItemsReducer";

export const TodoItemsContext = createContext();

export const TodoItemsProvider = ({children}) => {

  const [todoItems, dispatch] = useReducer(TodoItemsReducer, []);

  const addTodoItem = (todoText, todoDate) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        todoText, todoDate
      }
    })
  }

  const deleteTodoItem = (todoId) => {
    dispatch({
      type: 'DELETE_ITEM',
      payload: {
        todoId
      }
    })
  }

    const addAllTodoItems = (todoItems) => {
    dispatch({
      type: 'LOAD_ALL_ITEMS',
      payload: {
        allItems: todoItems
      }
    })
  }

  return <TodoItemsContext.Provider value={{todoItems, addTodoItem, deleteTodoItem,addAllTodoItems}}>
    {children}
  </TodoItemsContext.Provider>
}