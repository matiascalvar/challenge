import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditTodo from "./components/EditTodo/EditTodo";
import Todo from "./components/Todo/Todo";
import Folder from "./components/Folder/Folder";
import './App.css';

export const URL = "http://localhost:3001";
// http://localhost:3001
// https://todos-nestjs.herokuapp.com

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Folder/>}/>
          <Route path="/todo/:id" element={<Todo />} />
          <Route path="/edit/:id" element={<EditTodo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
