import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import style from "./Folder.module.css";
import { URL } from "../../App";
const axios = require("axios");

function Folder() {

  const [folders, setFolders] = useState(null);
  const [input, setInput] = useState("");

  async function getFolders() {
    const response = await axios.get(`${URL}/folder`);
      setFolders(response.data);
  }

  const deleteFolder = async (id) => {
    const response = await axios.delete(`${URL}/folder/${id}`);
    getFolders();
    return response;
  };

  const onSubmit = async (e) => {
      e.preventDefault();
      if (input) {
        await axios.post(`${URL}/folder`, {
        name: input});
      }
      setInput("");
    getFolders();
  };
  
  useEffect(() => {
    getFolders();
  }, []);

  if (folders === null) { 
    return (
      <>
        <div className={style.card}>
          <h1>To-Do List</h1>
          <h2>Folders</h2>
          <div className={style.ldsdualring}></div>
          <form className={style.form} onSubmit={onSubmit}>
            <input
              type="text"
              name="addfolder"
              id="addfolder"
              placeholder="  New Folder"
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
        <h2>Folders</h2>
        {folders.length ? (
          <ul>
            {folders.map((folder) => (
              <div className={style.folderdiv} key={folder.id}>
                <li className={style.title}>• {folder.name}</li>
                <div>
                  <Link className={style.editPen} to={`/todo/${folder.id}`}>🖍</Link>
                  <button
                    className={style.delete}
                    onClick={() => deleteFolder(folder.id)}
                  >
                    🗑
                  </button>
                </div>
              </div>
            ))}
          </ul>
        ) : (
          <p className={style.completed}>No folders available</p>
        )}
        <form className={style.form} onSubmit={onSubmit}>
          <input
            type="text"
            name="addfolder"
            id="addfolder"
            placeholder="  New Folder"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <br />
          <button type="submit">Add</button>
        </form>
      </div>
      <Footer/>
    </>
  );
}

export default Folder;
