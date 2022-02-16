import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import style from './Todo.module.css';
const axios = require("axios");

const URL = "http://localhost:3001"

function Todo() {

    let { id } = useParams();
    const [todos, setTodos] = useState([]);
    const [folder, setFolder] = useState();
    const [input, setInput] = useState("");

    const getTodos = async () => {
        const response = await axios.get(`${URL}/todo`);
        setTodos([])
        setTodos(response.data.filter(e => e.folder.id == id))
        console.log(response.data)
        return response.data
    }

    const getFolderById = async (id) => {
      const response = await axios.get(`${URL}/folder/${id}`);
      setFolder(response.data.name);
    };

    const onCompleted = async (e) => {
        const response = await axios.patch(`${URL}/todo/${e.target.id}`, { completed: true });
        getTodos();
    }

    const deleteTodo = async (id) => {
      const response = await axios.delete(`${URL}/todo/${id}`);
      // setTodos(todos.filter(todo => todo.id !== id))
      getTodos();
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        if (input) {
            let newTodo = axios.post(`${URL}/todo`, {
              name: input,
              folderId: id,
            });
        }
        setInput("");
        getTodos();
    };

    useEffect(() => {
        getTodos()
        getFolderById(id)
    },[])

    return (
      <div className={style.card}>
        <h1>To-Do List</h1>

        <h2>
          <Link to={"/"}>Folders </Link>
          {">"} {folder}
        </h2>

        {todos.length ? (
          <ul>
            {todos.map((todo) => (
              <div className={style.tododiv} key={todo.id}>
                <input
                  type="checkbox"
                  name="todo"
                  id={todo.id}
                  onClick={onCompleted}
                />
                <div className={style.todoName}>
                  <li className={todo.completed ? style.completed : null}>
                    {todo.name}
                  </li>
                </div>
                <div>
                  <Link className={style.editLink} to={`/edit/${todo.id}`}>
                    Edit
                  </Link>
                  <button
                    className={style.delete}
                    onClick={() => deleteTodo(todo.id)}
                  >
                    🗑
                  </button>
                </div>
              </div>
            ))}
          </ul>
        ) : (
          <p className={style.completed}>No todos available</p>
        )}
        <form className={style.form} action="" onSubmit={onSubmit}>
          <input
            type="text"
            name="addtodo"
            id="addtodo"
            placeholder="   New task"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <br />
          <button type="submit">
            Add
          </button>
        </form>
      </div>
    );
}

export default Todo;