import Items from "./Items";
import { useState , useEffect ,createContext} from "react";
import '../index.css';
export const Context = createContext();

const Todo = () => {
    const [task , setTask] = useState();
    const [data , setData] = useState();
    

    useEffect (() => {
        setData(JSON.parse(localStorage.getItem('tasks')) !== null ? JSON.parse(localStorage.getItem('tasks')) : []);
    },[])

    const handleClick = () => {
        const data = JSON.parse(localStorage.getItem('tasks'));
        const chekckedData = data === null ? localStorage.setItem('tasks' , JSON.stringify([])) : data;
        const clonedValue = chekckedData !== undefined? chekckedData : [];
        clonedValue.push({index: clonedValue.length , description : task , completed : false});
        localStorage.setItem('tasks' , JSON.stringify(clonedValue));
        setData(JSON.parse(localStorage.getItem('tasks')));
    };

    const handleClear = () => {
        const filterdata = data.filter((element) => element.completed !== true);
        for(let i = 0 ; i < filterdata.length ; i++){
            filterdata[i].index = i;
        }
        localStorage.setItem('tasks' , JSON.stringify(filterdata));
        setData(filterdata)
    }

    return (
        <div className="todoClass">
            <div className="liste inp">
                <input type="text" className="inpute" onChange={(e) => setTask(e.target.value)} placeholder="Item" value={task}/>
                <button onClick={handleClick}>Insert</button>
            </div>
            <ul>
                {
                    <Context.Provider value={[data , setData]}>
                        <div className="todo">
                            <Items values={data}/>
                            <button className="btn" onClick={handleClear}>Clear all</button>
                        </div>
                    </Context.Provider>
                }
            </ul>
        </div>
    )
}

export default Todo ;