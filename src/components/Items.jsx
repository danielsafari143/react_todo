import Item from "./Item";
import { Context} from "./Todo";
import { useContext } from "react";

const Items = () => {
    const [data] = useContext(Context);
    const checkedValues = data !== undefined ? data : [];
   
    return (<ul>
        {
            checkedValues.map((element) => {
                return <Item key={element.index} index={element.index} completed={element.completed} description={element.description} />
            })
        }
    </ul>)
};

export default Items;