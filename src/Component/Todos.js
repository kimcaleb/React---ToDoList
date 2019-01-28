import React, { Component } from "react";
import Todo from "./Todo";

export default class Todos extends Component {
    render() {
        let todos = this.props.todos.map ( (todo) => {
            return(
                <Todo key={todo._id} todo={todo}/>
            )
        })
        
        return(
            <ul>
                {todos}
            </ul>
        )
        
    }
}