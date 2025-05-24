import './Input.css';
import { List } from "../list";
import { useState } from "react";

function Todo() {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input !== "") {
      setTask([...task, input]);
      setInput("");
    } else {
      alert("Please Enter the Task");
    }
  };

  const handleDelete = (index) => {
    setTask(task.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    const newValue = prompt("Edit the task:", task[index]);
    if (newValue !== null && newValue.trim() !== "") {
      const updatedTasks = task.map((item, i) => (i === index ? newValue : item));
      setTask(updatedTasks);
    }
  };

  return (
    <div className="todo-container">
      <h1>TODO LIST </h1>
      <input id="input"
        type="text"
        placeholder="Enter the task"
        value={input}
        onChange={handleChange}
      />
      <button id="add" onClick={handleSubmit} type="button">Add</button>

      <ul>
        {task.map((item, index) => (
          <List
            id='list'
            key={index}
            value={item}
            index={index}
            onDelete={() => handleDelete(index)}
            onEdit={() => handleEdit(index)}
            className="task-item"
          />
        ))}
      </ul>
    </div>
  );
}

export default Todo;
