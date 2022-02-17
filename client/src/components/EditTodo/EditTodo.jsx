import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import style from "./EditTodo.module.css";
import { URL } from "../../App";
const axios = require("axios");

function EditTodo() {

  let { id } = useParams();
  const [todo, setTodo] = useState(null);
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const getTodoById = async () => {
    const response = await axios.get(`${URL}/todo/${id}`);
    setTodo(response.data);
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    if (input) {
      await axios.patch(`${URL}/todo/${id}`, {
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

  if (todo === null) {
    return (
      <>
        <div className={style.card}>
          <h1>Edit Task</h1>
          <div class={style.ldsdualring}></div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <div className={style.card}>
        <h1>Edit Task "{todo.name}"</h1>

        <form className={style.form} onSubmit={onSubmit}>
          <input
            type="text"
            name="edittodo"
            id="edittodo"
            placeholder="Edit todo"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <div>
            <button className={style.button} type="submit">Save</button>
          </div>
        </form>
        <button className={style.button} onClick={() => navigate(-1)}>Cancel</button>
      </div>
      <Footer />
    </>
  );
}

export default EditTodo;
