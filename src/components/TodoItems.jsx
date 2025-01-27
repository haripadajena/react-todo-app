import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems }) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="row m-0">
            <div className="col-6 text-info fw-bold">Todo Item List</div>
            <div className="col-4 text-info fw-bold">Date</div>
            <div className="col-2 text-info fw-bold">Action</div>
          </div>
          <hr />
          {todoItems.map((item) => (
            <TodoItem todoName={item.name} todoDate={item.duedate}></TodoItem>
          ))}
        </div>
      </div>
    </>
  );
};
export default TodoItems;
