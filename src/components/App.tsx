import { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");

  function handleAddTask(newTask: { text: string; category: string }) {
    console.log(newTask);

    setTasks((existingTasks) => [...existingTasks, newTask]);
  }

  function handleDeleteTask(deletedTaskText: string) {
    setTasks(tasks.filter((task) => task.text !== deletedTaskText));
  }

  const filteredTasks = tasks.filter(
    (task) => category === "All" || task.category === category
  );

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={category}
        onSelectCategory={setCategory}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTask} />
      <TaskList
        tasks={filteredTasks}
        onDeleteTask={handleDeleteTask}
        selectedCategory={category}
      />
    </div>
  );
}

export default App;
