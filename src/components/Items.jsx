import { useContext } from 'react';
import Item from './Item';
import { Context } from './Todo';

const Items = () => {
  const [data] = useContext(Context);
  const checkedValues = data !== undefined ? data : [];

  return (
    <ul>
      {
            checkedValues.map((element) => (
              <Item
                key={element.index}
                index={element.index}
                completed={element.completed}
                description={element.description}
              />
            ))
        }
    </ul>
  );
};

export default Items;
