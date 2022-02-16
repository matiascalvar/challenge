import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./Folder.module.css";
const axios = require("axios");

const URL = "http://localhost:3001";

function Folder() {

  const [folders, setFolders] = useState([]);
  const [input, setInput] = useState("");

  // fn que trae la lista de carpetas del back
  async function getFolders() {
    const response = await axios.get(`${URL}/folder`);
      setFolders(response.data);
      console.log(response.data)
  }
  // fn que borra una carpeta
  const deleteFolder = async (id) => {
    const response = await axios.delete(`${URL}/folder/${id}`);
    // setFolders(folders.filter(e => e.id !== id))
    getFolders();
  };

  // fn para agregar carpeta con un form
  const onSubmit = async (e) => {
      e.preventDefault();
      if (input) {
        let newFolder = axios.post(`${URL}/folder`, {
        name: input});
      }
      setInput("");
    getFolders();
  };
  
  useEffect(() => {
    getFolders();
  }, []);

    return (
      <div className={style.card}>
        <h1>Folders</h1>
        {folders.length ? (
          <ul>
            {folders.map((folder) => (
              <div className={style.folderdiv} key={folder.id}>
                <li className={style.title}>-{folder.name}</li>
                <div>
                  <Link to={`/todo/${folder.id}`}>View items</Link>
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
        <form className={style.form} action="" onSubmit={onSubmit}>
          <input
            type="text"
            name=""
            id="addfolder"
            placeholder="  New Folder"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <br />
          <button type="submit">Add</button>
        </form>
      </div>
    );
}

export default Folder;
