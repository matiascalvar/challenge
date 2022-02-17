import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
import style from './Todo.module.css';
import { URL } from '../../App';
const axios = require("axios");

function Todo() {

  let { id } = useParams();
  id = parseInt(id);
    const [todos, setTodos] = useState(null);
    const [folder, setFolder] = useState();
    const [input, setInput] = useState("");

    const getTodos = async () => {
        const response = await axios.get(`${URL}/todo`);
        setTodos([])
        setTodos(response.data.filter(e => e.folder.id === id))
        return response.data
    }

    const getFolderById = async (id) => {
      const response = await axios.get(`${URL}/folder/${id}`);
      setFolder(response.data.name);
    };

    const onCompleted = async (e) => {
      const response = await axios.patch(`${URL}/todo/${e.target.id}`, { completed: true });
      getTodos();
      return response;
    }

    const deleteTodo = async (id) => {
      const response = await axios.delete(`${URL}/todo/${id}`);
      getTodos();
      return response;
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        if (input) {
          await axios.post(`${URL}/todo`, {
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
    }, [])
  
  if (todos === null) {
    return (
      <>
        <div className={style.card}>
          <h1>To-Do List</h1>
          <h2>
            <Link className={style.goBackFolder} to={"/"}>
              Folders
            </Link>
            &nbsp;{">"} {folder}
          </h2>
          <div class={style.ldsdualring}></div>
          <form className={style.form} onSubmit={onSubmit}>
            <input
              type="text"
              name="addtodo"
              id="addtodo"
              placeholder="   New task"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <br />
            <button type="submit">Add</button>
          </form>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <div className={style.card}>
        <h1>To-Do List</h1>
        <h2>
          <Link className={style.goBackFolder} to={"/"}>
            Folders
          </Link>
          &nbsp;{">"} {folder}
        </h2>

        {todos.length ? (
          <ul>
            {todos.map((todo) => (
              <div className={style.tododiv} key={todo.id}>
                <input
                  className={style.control}
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
                <div className={style.editAndDelete}>
                  <Link className={style.editLink} to={`/edit/${todo.id}`}>
                    🖍
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
          <p>No todos available</p>
        )}
        <form className={style.form} onSubmit={onSubmit}>
          <input
            type="text"
            name="addtodo"
            id="addtodo"
            placeholder="   New task"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <br />
          <button type="submit">Add</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Todo;