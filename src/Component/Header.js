import React, { Component } from "react";
import {Link} from "react-router-dom";

export default class Header extends Component {
    render() {
        return(
            <header>
                <h1>ToDo</h1>
                <nav>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/todos"}>Todos</Link>
                </nav>
            </header>
        );
    }
}