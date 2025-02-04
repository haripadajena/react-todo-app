import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="row m-0">
            <div className="col-5 text-info fw-bold">Todo Item List</div>
            <div className="col-4 text-info fw-bold">Date</div>
            <div className="col-3 text-info fw-bold">Action</div>
          </div>
          <hr />
          {todoItems.map((item) => (
            <TodoItem
              key={item.id}
              todoId={item.id}
              todoName={item.name}
              todoDate={item.duedate}
              onDeleteBtnClick={onDeleteClick}
            ></TodoItem>
          ))}
        </div>
      </div>
    </>
  );
};
export default TodoItems;
