function TodoItem({ todoName, todoDate }) {
  return (
    <>
      <div className="row mb-2">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
    </>
  );
}
export default TodoItem;
