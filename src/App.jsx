import About from "./pages/About"
import Home from "./pages/Home"
import Task from "./pages/Task"
import {Link, Routes, Route} from 'react-router-dom';

export default function App(){
  return (
    <div>
      <nav className="d-flex justify-content-center gap-3 p-3">
        <Link className="btn btn-primary" to="/">Главная</Link>
        <Link className="btn btn-primary" to= "/tasks">Задачи</Link>
        <Link className="btn btn-primary" to="/about"> О проекте</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/tasks" element={<Task/>}/>
        <Route path="/about" element={<About/>}/>
        
      </Routes>
      
      
    </div>
  )
}