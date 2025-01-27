function AddTodo() {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="row mb-2">
            <div class="col-6">
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter ToDo Here"
                class="form-control"
              />
            </div>
            <div class="col-4">
              <input type="date" name="" id="" class="form-control" />
            </div>
            <div class="col-2">
              <button class="btn btn-success">Add</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddTodo;
