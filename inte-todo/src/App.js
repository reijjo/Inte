import { useState } from "react";
import BasicButton from "./components/Button";
import ToDoItem from "./components/ToDoItem";
import { FormControl, MenuItem, Select, TextField } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const App = () => {
  const [taskOpen, setTaskOpen] = useState(false);
  const [title, setTitle] = useState("Title");
  const [deadline, setDeadline] = useState("Deadline");
  const [status, setStatus] = useState("Status");

  const newTodo = (event) => {
    event.preventDefault();
    console.log("Title: ", title);
    console.log("Deadline: ", deadline);
    console.log("Status: ", status);

    if (title.trim() === "" || deadline.trim() === "" || status.trim() === "") {
      console.log("WHAT THE HELL EMPTY");
    } else if (
      title === "Title" ||
      deadline === "Deadline" ||
      status === "Status"
    ) {
      console.log("TRY AGAIN!");
    }
    setTitle("Title");
    setDeadline("Deadline");
    setTaskOpen(false);
  };

  console.log("TASK", taskOpen);
  return (
    <div id="main">
      <BasicButton
        variant="contained"
        className="addNew"
        onClick={() => setTaskOpen(!taskOpen)}
        type="button"
      >
        Add a new todo
      </BasicButton>
      {taskOpen && (
        <form onSubmit={newTodo}>
          <div className="addTodo">
            Add new todo
            <TextField
              defaultValue="Title"
              variant="outlined"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            <TextField
              defaultValue="Deadline"
              variant="outlined"
              value={deadline}
              onChange={(event) => setDeadline(event.target.value)}
            />
            {/* <select
              name="status"
              className="select"
              onChange={(event) => setStatus(event.target.value)}
            >
              <option value="status">Status</option>
              <option value="Not started">Not started</option>
              <option value="In progress">In progress</option>
              <option value="Done">Done</option>
            </select> */}
            <Select
              className="select"
              value={status}
              defaultValue="Status"
              size="small"
              IconComponent={ArrowDropDownIcon}
              onChange={(event) => setStatus(event.target.value)}
            >
              <MenuItem value="Status">Status</MenuItem>
              <MenuItem value="noStart">Not started</MenuItem>
              <MenuItem value="progress">In progress</MenuItem>
              <MenuItem value="done">Done</MenuItem>
            </Select>
            <div className="todoButtons">
              <BasicButton
                className="butCancel"
                variant="contained"
                type="button"
                onClick={() => setTaskOpen(false)}
              >
                Cancel
              </BasicButton>
              <BasicButton className="" variant="contained" type="submit">
                Add
              </BasicButton>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default App;
