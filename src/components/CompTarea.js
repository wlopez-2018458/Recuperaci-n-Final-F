import React, { Component } from 'react';
import axios from 'axios';
import Tarea from './Tarea';
import ListTarea from './ListTarea';
import '../App.css';

class Todo extends Component {
    state = {
        tasks: [],
    };

    componentDidMount() {
        this.getTasks();
    }

    getTasks = () => {
        axios
            .get('/task/getTasks')
            .then((res) => {
                if (res.data) {
                    this.setState({
                        tasks: res.data.tasks,
                    });
                }
            })
            .catch((err) => console.log(err));
    };

    deleteTask = (id) => {
        axios
            .delete(`/task/deleteTask/${id}`)
            .then((res) => {
                if (res.data) {
                    this.setState((prevState) => ({
                        tasks: prevState.tasks.filter((task) => task._id !== id),
                    }));
                }
            })
            .catch((err) => console.log(err));
    };

    render() {
        const { tasks } = this.state;

        return (
            <div className="App">
                <h1>Tareas</h1>
                <Tarea getTasks={this.getTasks} />
                <ListTarea
                    tasks={tasks}
                    deleteTask={this.deleteTask}
                />
            </div>
        );
    }
}

export default Todo;
