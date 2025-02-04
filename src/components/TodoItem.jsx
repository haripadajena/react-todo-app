function TodoItem({ todoId, todoName, todoDate, onDeleteBtnClick }) {
  return (
    <>
      <div className="row mb-2">
        <div className="col-5">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-3">
          <button
            className="btn btn-danger"
            onClick={() => onDeleteBtnClick(todoId)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
export default TodoItem;
