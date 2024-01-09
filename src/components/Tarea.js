import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

class Tarea extends Component {
    state = {
        title: '',
        description: '',
        priority: '',
    };

    addTask = () => {
        const task = {
            title: this.state.title,
            description: this.state.description,
            priority: this.state.priority,
        };

        console.log("Task:", task);

        if (task.title && task.description && task.priority) {
            axios
                .post('/task/addTask', task)
                .then((res) => {
                    console.log(res);
                    this.props.getTasks();
                    this.setState({ title: '', description: '', priority: '' });
                })
                .catch((err) => {
                    console.log(err.response.data);
                });
        } else {
            console.log('Campos obligatorios');
        }
    };

    handleChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value,
        });
    };

    render() {
        let { title, description, priority } = this.state;

        return (
            <div>
                <h2>Bienvenido</h2>
                <div>
                </div>
                <div>
                    Título:<input type="text" name="title" onChange={this.handleChange} value={title} />
                    <br />
                    Descripción:<input type="text" name="description" onChange={this.handleChange} value={description} />
                    <br />
                    Prioridad: <input type="number" name="priority" onChange={this.handleChange} value={priority} />
                    <br />
                    <button onClick={this.addTask}>Agregar Tarea</button>
                </div>
            </div>
        );
    }
}

export default Tarea;
