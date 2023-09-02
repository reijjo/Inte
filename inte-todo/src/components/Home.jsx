import { useEffect, useState } from "react";
import BasicButton from "../components/Button";
import ToDoItem from "../components/ToDoItem";
import ToDoForm from "./ToDoForm";

const Home = () => {
  const [taskOpen, setTaskOpen] = useState(false);
  const [editItem, setEditItem] = useState(false);
  const [title, setTitle] = useState("Title");
  const [deadline, setDeadline] = useState("Deadline");
  const [status, setStatus] = useState("Status");
  const [items, setItems] = useState([]);
  const [todoToEdit, setTodoToEdit] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    setTitle("Title");
    setDeadline("Deadline");
    setStatus("Status");
  }, [taskOpen]);

  const editTodo = (todo) => {
    setTodoToEdit(todo);
    setEditItem(true);
  };

  const newTodo = (event) => {
    event.preventDefault();

    if (title.trim() === "" || deadline.trim() === "" || status.trim() === "") {
      setMessage("No empty fields, thanks.");
      setTimeout(() => {
        setMessage(null);
      }, 5000);
    } else if (
      title === "Title" ||
      deadline === "Deadline" ||
      status === "Status"
    ) {
      setMessage("No default inputs.");
      setTimeout(() => {
        setMessage(null);
      }, 5000);
    } else {
      const newItem = {
        id: items.length + 1,
        title: title,
        deadline: deadline,
        status: status,
      };
      setItems(items.concat(newItem));
      setTitle("Title");
      setDeadline("Deadline");
      setStatus("Status");
      setTaskOpen(false);
    }
  };

  const updateTodo = (event) => {
    event.preventDefault();

    const updatedTodo = {
      ...todoToEdit,
      title: title,
      deadline: deadline,
      status: status,
    };

    const todoToUpdate = items.findIndex((todo) => todo.id === todoToEdit.id);

    const updatedItems = [...items];
    updatedItems[todoToUpdate] = updatedTodo;

    setItems(updatedItems);

    setTitle("Title");
    setDeadline("Deadline");
    setStatus("Status");
    setEditItem(false);
  };

  return (
    <div id="main">
      <BasicButton
        variant="contained"
        className="addNew"
        onClick={() => {
          setTaskOpen(!taskOpen);
          setTitle("Title");
        }}
        type="button"
      >
        Add a new todo
      </BasicButton>
      {(taskOpen || editItem) && (
        <form onSubmit={taskOpen ? newTodo : updateTodo}>
          <ToDoForm
            title={title}
            setTitle={setTitle}
            deadline={deadline}
            setDeadline={setDeadline}
            status={status}
            setStatus={setStatus}
            taskOpen={taskOpen}
            setTaskOpen={setTaskOpen}
            editItem={editItem}
            setEditItem={setEditItem}
            todoToEdit={todoToEdit}
            setTodoToEdit={setTodoToEdit}
            message={message}
          />
        </form>
      )}
      {items.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} onClick={() => editTodo(todo)} />
      ))}
      <div
        className="colorInfo"
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "min(50vw, 640px)",
          marginTop: "3vh",
          height: "8vh",
        }}
      >
        <div
          className="itemColor item-done"
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div className="itemInfo" style={{ marginLeft: "2vw" }}>
            Done
          </div>
        </div>
        <div
          className="itemColor item-not-started"
          style={{
            alignItems: "center",
            display: "flex",
            whiteSpace: "nowrap",
            flexDirection: "row",
          }}
        >
          <div className="itemInfo" style={{ marginLeft: "2vw" }}>
            Not started
          </div>
        </div>
        <div
          className="itemColor item-in-progress"
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            whiteSpace: "nowrap",
          }}
        >
          <div className="itemInfo" style={{ marginLeft: "2vw" }}>
            In progress
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
