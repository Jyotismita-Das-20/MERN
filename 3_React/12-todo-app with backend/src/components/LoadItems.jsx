import { useContext } from "react"
import { TodoItemsContext } from "../store/TodoItemsContext";

const LoadItems = () => {

  const { todoItems} = useContext(TodoItemsContext);

    if (todoItems.length !== 0) {
      return <></>;
    }

    const LoadItemsHandler = () => {
      console.log('Load items')
    }

  return (
    <>
    <h2>Enjoy Your Day</h2>
    <button btnText= 'Load Todo' handler={LoadItemsHandler}>Load Todo</button>
    </>
  )
}

export default LoadItems