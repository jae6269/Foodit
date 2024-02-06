import FoodList from './FoodList';
import mocItems from '../mock.json';
import { useState } from 'react';

function App() {
  //items,정렬기준 state
  const [items, setItems] = useState(mocItems);
  const [order, setOrder] = useState('createdAt');

  //정렬기준 변경하는 함수
  const handleNewestClick = () => setOrder('createdAt');
  const handleCalorieClick = () => setOrder('calorie');

  //요소 삭제하는 함수
  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id != id);
    setItems(nextItems);
  };

  const sortedItems = items.sort((a, b) => b[order] - a[order]);
  return (
    <>
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleCalorieClick}>칼로리순</button>
      </div>
      <div>
        <FoodList items={sortedItems} onDelete={handleDelete} />
      </div>
    </>
  );
}

export default App;
