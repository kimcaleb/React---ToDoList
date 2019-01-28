import axios from "axios";

const endPoint = "https://super-crud-api.herokuapp.com/api/todos";

export default class ToDoModel {
    static all() { // when we use the all method on our ToDoModel, it will make a get request to our API for all todos. We return the request so that we can chain promises to it. 
        let request = axios.get(endPoint);
        return request;
    }

    static create(todo) {
        let request = axios.post(endPoint, todo)
        return request
    }
}