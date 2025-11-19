const TaskItem = ({ task, onEdit, onDelete }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'completed':
        return 'status-completed';
      case 'in progress':
        return 'status-in-progress';
      default:
        return 'status-pending';
    }
  };

  return (
    <div className={`task-item ${task.status === 'completed' ? 'completed' : ''}`}>
      <div className="task-header">
        <div>
          <h3 className="task-title">{task.title}</h3>
          <span className={`task-status ${getStatusClass(task.status)}`}>
            {task.status}
          </span>
        </div>
      </div>
      
      {task.description && (
        <p className="task-description">{task.description}</p>
      )}
      
      <div className="task-meta">
        <span>Created: {formatDate(task.createdAt)}</span>
        <span>Updated: {formatDate(task.updatedAt)}</span>
      </div>
      
      <div className="task-actions">
        <button
          onClick={() => onEdit(task)}
          className="btn btn-warning btn-sm"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(task._id)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;