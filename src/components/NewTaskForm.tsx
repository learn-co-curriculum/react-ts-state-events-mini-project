import React, { useState } from "react";

interface Props {
  categories: string[];
  onTaskFormSubmit(newTask: { text: string; category: string }): void;
}

function NewTaskForm({ categories, onTaskFormSubmit }: Props) {
  const [category, setCategory] = useState("Code");
  const [text, setText] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onTaskFormSubmit({ text, category });
    setText("");
    setCategory("Code");
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setText(e.target.value);
          }}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={category}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setCategory(e.target.value);
          }}
        >
          {categories.map((cat) =>
            category !== "All" ? <option key={cat}>{cat}</option> : null
          )}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
