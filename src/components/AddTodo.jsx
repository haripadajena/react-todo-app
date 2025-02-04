import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };
  const handleAddButtonClicked = () => {
    if (!todoName || !dueDate) {
      alert("Please Enter Todo Name & Date");
      return; // Stop function execution if dueDate is empty
    } else {
      onNewItem(todoName, dueDate);
      setTodoName("");
      setDueDate("");
    }
  };
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="row mb-2">
            <div className="col-5">
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Todo Here"
                className="form-control"
                value={todoName}
                onChange={handleNameChange}
              />
            </div>
            <div className="col-4">
              <input
                type="date"
                className="form-control"
                value={dueDate}
                onChange={handleDateChange}
              />
            </div>
            <div className="col-3">
              <button
                className="btn btn-success"
                onClick={handleAddButtonClicked}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddTodo;
