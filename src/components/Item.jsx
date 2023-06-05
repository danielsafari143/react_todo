import { useState , useContext } from "react";
import { Context} from "./Todo";

const Item = ({description , index , completed}) => {
    const [data , setData] = useContext(Context);
    const [complete , setComplete ] = useState(completed);
    const [text , setTex] = useState(description);

    const handleClick = () => {
        const data = JSON.parse(localStorage.getItem('tasks'));
        const clone = {... data[index] , completed : !data[index].completed};
        const cloneData = [...data];
        cloneData[index] = clone;
        localStorage.setItem('tasks' , JSON.stringify(cloneData));
        setComplete(!data[index].completed);
        setData(cloneData);
    };

    const handDelete = () => {
            const filderedValues = data.filter((item) => {
               if(item.completed) {
                 return item.index !== index
               }
                return data
            })
            for(let i = 0 ; i < filderedValues.length ; i++){
                filderedValues[i].index = i;
            }
            localStorage.setItem('tasks' , JSON.stringify(filderedValues));
            setData(filderedValues);
    };

    const handleUpdate = (e) => {
       setTex(e.target.value);
       const data = JSON.parse(localStorage.getItem('tasks'));
       const clone = {... data[index] , description : e.target.value};
       const cloneData = [...data];
       cloneData[index] = clone;
       localStorage.setItem('tasks' , JSON.stringify(cloneData));
       setData(cloneData);
    }

    
    return (<li className="liste">
        <input checked={complete} onChange={handleClick} type="checkbox" /> 
        <input className="inpute" onChange={handleUpdate} value={text} /> 
        <button onClick={handDelete}>delete</button></li>);
};

export default Item;