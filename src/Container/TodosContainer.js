import React, { Component } from "react";
import ToDoModel from "../models/Todo";
import Todos from "../Component/Todos";
import CreateToDoForm from "../Component/CreateToDoForm";

export default class TodosContainer extends Component {
    constructor() {
        super();
        this.state = {
            todos:[]
        }
    }

    componentDidMount() {
        this.fetchData();
    }
    fetchData() {
        ToDoModel.all().then( (res) => {
            this.setState({
                todos:res.data.todos,
                todo: ""
            })
        });
    }

    createTodo = (todo) => {
        let newTodo = {
            body: todo,
            complete: false
        }
        ToDoModel.create(newTodo).then( (res) => {
            let todos = this.state.todos
            let newTodos = todos.push(res.data)
            this.setState({newTodos}) 
        })
    }
    
    render() {
        return (
            <div className="todosContainer">
                <Todos todos={this.state.todos} />
                <CreateToDoForm createTodo={this.createTodo} />
            </div>
        );

    }
} 