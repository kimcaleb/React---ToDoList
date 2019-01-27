import React, { Component } from "react";
import ToDoModel from "../models/Todo";

export default class TodosContainer extends Component {
    render() {
        ToDoModel.all().then( (res) => {
            console.log(res);
        });
        return (
            <div className="todosContainer">
                <h2>This is a todos container</h2>
            </div>
        );

    }
} 