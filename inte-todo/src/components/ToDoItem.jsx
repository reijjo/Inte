const ToDoItem = ({ todo, onClick }) => {
  const itemStatus = {
    noStart: "item-not-started",
    progress: "item-in-progress",
    done: "item-done",
  };

  const statusColor = itemStatus[todo?.status] || "";

  return (
    <div className="item" onClick={onClick}>
      <div className={`itemColor ${statusColor}`}></div>
      <div className="itemInfo">
        <div>
          <strong>{todo?.title}</strong>
        </div>
        <div>
          <em>Deadline: {todo?.deadline}</em>
        </div>
      </div>
    </div>
  );
};

export default ToDoItem;
