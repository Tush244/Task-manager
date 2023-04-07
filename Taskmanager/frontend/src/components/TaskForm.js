const TaskForm = ({
    createTask,
    name,
    handleInputChange,
    isEditing,
    updateTask,
    dueDate
}) => {
    return (
        <>
    
    <div class="input-group">
  <div class="form-outline">
    <input type="search" id="form1" class="form-control"  />
    <label class="form-label" for="form1">Search</label>
  </div>
  <button type="button" class="btn btn-primary">
    <i class="fas fa-search"></i>
  </button>
</div>

        <form className="task-form" onSubmit={isEditing ? updateTask : createTask}>
            
            <input
                type="text"
                placeholder="Add a Task"
                name="name"
                value={name}
                onChange={handleInputChange}
            />
            <input
                type="date"
                placeholder="Date"
                name="Date"
                value={dueDate}
                onChange={handleInputChange}
            />
            <button type="submit">{isEditing ? "Edit" : "Add"}</button>
        </form>
        </>
    );
};

export default TaskForm;