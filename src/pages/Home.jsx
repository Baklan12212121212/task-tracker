import { Link } from "react-router-dom";

export default function Home(){
    return (
        <div className="m-3 p-3">
            <h1>Task Tracker</h1>
            <p>Простой и удобный способ управлять своими задачами и проектами. Добавляйте новые дела, отслеживайте прогресс и держите всё под контролем.</p>
            <Link className="btn btn-primary m-3" to= "/tasks">Перейти к задачам</Link>
            <Link className="btn btn-primary m-3" to="/about"> О проекте</Link>



        </div>
    )
}