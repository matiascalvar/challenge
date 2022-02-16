import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import style from "./EditTodo.module.css";
const axios = require("axios");

const URL = "http://localhost:3001"

function EditTodo() {

  let { id } = useParams();
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const getTodoById = async () => {
    const response = await axios.get(`${URL}/todo/${id}`);
    setTodo(response.data);
    console.log(response.data)
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    if (input) {
      const response = await axios.patch(`${URL}/todo/${id}`, {
        name: input,
      });
    }
    setInput("");
    navigate(-1);
  };

  useEffect(() => {
    getTodoById();
    return () => {
      
    };
  }, []);

  return (
    <div className={style.card}>
      <h1>Edit Task "{todo.name}"</h1>

      <form action="" onSubmit={onSubmit}>
        <input
          type="text"
          name="edittodo"
          id="edittodo"
          placeholder="Edit todo"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <div>
          <button type="submit">Save</button>
          
            <button type="">Cancel</button>
          
        </div>
      </form>
    </div>
  );
}

export default EditTodo;
