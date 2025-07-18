import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");


  function handleDeleteTask(taskText) {
    setTasks(tasks.filter(task => task.text !== taskText));
  }


  const visibleTasks = selectedCategory === "All"
  ? tasks
  : tasks.filter(task => task.category === selectedCategory);


  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTask} />
      <TaskList tasks={visibleTasks} onDelete={handleDeleteTask} />
    </div>
  );
}

export default App;
