import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Todo.module.css';
const axios = require("axios");

const URL = "http://localhost:3001"

function Todo() {

    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    async function getTodos() {
        const response = await axios.get(`${URL}/todo`);
        setTodos(response.data)
        console.log(response.data)
    }

    const onCompleted = async (e) => {
        const response = await axios.patch(`${URL}/todo/${e.target.id}`, { completed: true });
    }

    const deleteTodo = async (id) => {
        const response = await axios.delete(`${URL}/todo/${id}`);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        if (input) {
            let newTodo = axios.post(`${URL}/todo`, {
              name: input,
            //   folderId: 1,
            });
        }
        setInput("")
    };

    useEffect(() => {
        getTodos()
    },[])

    return (
      <div className={style.card}>
        <h1>To-Do List</h1>
        {todos.length ?
                
            <ul>
            {todos.map((todo) => (
                <div className={style.tododiv} key={todo.id}>
                <input
                    type="checkbox"
                    name="todo"
                    id={todo.id}
                    onClick={onCompleted}
                />
                <li className={todo.completed ? style.completed : null}>
                    {todo.name}
                    </li>
                    <div>
                    <Link to={`/edit/${todo.id}`}>Edit</Link>
                    <button onClick={() => deleteTodo(todo.id)}>🗑</button>

                    </div>
                </div>
            ))}
            </ul>
            : <p className={style.completed}>No todos available</p>
        }
        <form action="" onSubmit={onSubmit}>
          <input
            type="text"
            name="addtodo"
            id="addtodo"
            placeholder="New task"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
}

export default Todo;