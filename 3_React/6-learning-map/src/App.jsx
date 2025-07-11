function App() {

  const todoItems = [
    {id:1, todoText: "Buy milk", todoDate: "4-sept-2023"},
    {id:2, todoText: "Go to College", todoDate: "Weekday"},
    {id:3, todoText: "Exercise", todoDate: "Everyday"},
  ];

  function convertObjectToTodoText(todoItem) {
    console.log(`Convert function was called with item ${todoItem}, converting this to ${todoItem.todoText}`);
    return todoItem.todoText;
  }

  console.log("----------start----------");
  todoItems.forEach(item => {
    const str = convertObjectToTodoText(item);
    console.log(str);
  })
  console.log("----------end----------");

  return (
    <div className="text-red-500 bg-green-800">Learning Map</div>
  )
}

export default App
