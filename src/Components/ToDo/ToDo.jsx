import "./styles.css";
import { ToDoList } from "./ToDoList/ToDoList";

export function ToDo() {
  return (
    <div className="todo-app">
      <ToDoList />
    </div>
  );
}
