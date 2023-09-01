import { TextField, Select, MenuItem } from "@mui/material";
import BasicButton from "./Button";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useEffect } from "react";
import Message from "./Message";

const ToDoForm = ({
  title,
  setTitle,
  deadline,
  setDeadline,
  status,
  setStatus,
  setTaskOpen,
  editItem,
  setEditItem,
  todoToEdit,
  setTodoToEdit,
  message,
}) => {
  useEffect(() => {
    if (todoToEdit) {
      setTitle(todoToEdit.title);
      setDeadline(todoToEdit.deadline);
      setStatus(todoToEdit.status);
    } else {
      setTitle("Title");
      setDeadline("Deadline");
      setStatus("Status");
    }
  }, [setDeadline, setStatus, setTitle, todoToEdit]);

  return !editItem ? (
    <div className="addTodo">
      Add new todo
      <TextField
        name="title"
        variant="outlined"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <TextField
        name="deadline"
        variant="outlined"
        value={deadline}
        onChange={(event) => setDeadline(event.target.value)}
      />
      <Select
        name="select"
        className="select"
        value={status}
        size="small"
        IconComponent={() => (
          <ArrowDropDownIcon fontSize="large" style={{ margin: "0px" }} />
        )}
        onChange={(event) => setStatus(event.target.value)}
      >
        <MenuItem value="Status" name="status">
          Status
        </MenuItem>
        <MenuItem value="noStart" name="nostart">
          Not started
        </MenuItem>
        <MenuItem value="progress" name="progress">
          In progress
        </MenuItem>
        <MenuItem value="done" name="done">
          Done
        </MenuItem>
      </Select>
      <Message message={message} />
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
  ) : (
    // EDIT TODO
    <div className="addTodo">
      Edit todo
      <TextField
        name="title"
        variant="outlined"
        value={todoToEdit.title}
        onChange={(event) =>
          setTodoToEdit({ ...todoToEdit, title: event.target.value })
        }
      />
      <TextField
        name="deadline"
        variant="outlined"
        value={todoToEdit.deadline}
        onChange={(event) =>
          setTodoToEdit({ ...todoToEdit, deadline: event.target.value })
        }
      />
      <Select
        className="select"
        value={todoToEdit.status}
        size="small"
        name="select"
        IconComponent={() => (
          <ArrowDropDownIcon fontSize="large" style={{ margin: "0px" }} />
        )}
        onChange={(event) =>
          setTodoToEdit({ ...todoToEdit, status: event.target.value })
        }
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
          onClick={() => setEditItem(false)}
        >
          Cancel
        </BasicButton>
        <BasicButton className="" variant="contained" type="submit">
          Update
        </BasicButton>
      </div>
    </div>
  );
};

export default ToDoForm;
