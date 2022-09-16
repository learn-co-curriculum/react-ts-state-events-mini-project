import Task from "./Task";

interface Props {
  tasks: { text: string; category: string }[];
  onDeleteTask(text: string): void;
  selectedCategory: string;
}

function TaskList({ tasks, onDeleteTask, selectedCategory }: Props) {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task
          key={task.text}
          text={task.text}
          category={task.category}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
