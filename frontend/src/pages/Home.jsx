import { useState, useEffect } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import { taskAPI } from '../services/api';

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editingTask, setEditingTask] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await taskAPI.getAllTasks();
      setTasks(response.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch tasks. Please try again.');
      console.error('Error fetching tasks:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateTask = async (taskData) => {
    try {
      const response = await taskAPI.createTask(taskData);
      setTasks(prev => [response.data, ...prev]);
      setShowForm(false);
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create task');
    }
  };

  const handleUpdateTask = async (taskData) => {
    try {
      const response = await taskAPI.updateTask(editingTask._id, taskData);
      setTasks(prev => 
        prev.map(task => 
          task._id === editingTask._id ? response.data : task
        )
      );
      setEditingTask(null);
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update task');
    }
  };

  const handleDeleteTask = async (taskId) => {
    if (!window.confirm('Are you sure you want to delete this task?')) {
      return;
    }

    try {
      await taskAPI.deleteTask(taskId);
      setTasks(prev => prev.filter(task => task._id !== taskId));
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to delete task');
    }
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setShowForm(false);
  };

  const handleCancelEdit = () => {
    setEditingTask(null);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Task Manager</h1>
        <p>Organize your tasks efficiently</p>
      </div>

      {error && (
        <div className="alert alert-error">
          {error}
        </div>
      )}

      {!showForm && !editingTask && (
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <button
            className="btn btn-primary"
            onClick={() => setShowForm(true)}
          >
            Add New Task
          </button>
        </div>
      )}

      {(showForm || editingTask) && (
        <TaskForm
          task={editingTask}
          onSave={editingTask ? handleUpdateTask : handleCreateTask}
          onCancel={editingTask ? handleCancelEdit : () => setShowForm(false)}
          isEditing={!!editingTask}
        />
      )}

      <TaskList
        tasks={tasks}
        onEdit={handleEditTask}
        onDelete={handleDeleteTask}
        loading={loading}
      />
    </div>
  );
};

export default Home;