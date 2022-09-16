interface Props {
  text: string;
  category: string;
  onDeleteTask(text: string): void;
}

function Task({ text, category, onDeleteTask }: Props) {
  function handleClick() {
    onDeleteTask(text);
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleClick}>
        X
      </button>
    </div>
  );
}

export default Task;
