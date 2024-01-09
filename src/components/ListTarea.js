import React from 'react';
import '../App.css';

const ListTarea = ({ tasks, deleteTask }) => {
    const handleDelete = (id) => {
        deleteTask(id);
    };

    return (
        <div className="task-list">
            {tasks && tasks.length > 0 ? (
                tasks.map((task) => (
                    <div key={task._id} className="task-card">
                        <div className="task-info">
                            <h3>{task.title}</h3>
                            <p>Descripción: {task.description}</p>
                            <p>Prioridad: {task.priority}</p>
                        </div>
                        <div className="task-actions">
                            <button className="task-btn" onClick={() => handleDelete(task._id)}>
                                Eliminar
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <p className="empty-list">Lista vacía</p>
            )}
        </div>
    );
};

export default ListTarea;
