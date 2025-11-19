import TaskItem from './TaskItem';

const TaskList = ({ tasks, onEdit, onDelete, loading }) => {
  if (loading) {
    return (
      <div className="loading">
        <p>Loading tasks...</p>
      </div>
    );
  }

  if (!tasks || tasks.length === 0) {
    return (
      <div className="empty-state">
        <h3>No tasks found</h3>
        <p>Start by creating your first task!</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem
          key={task._id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;