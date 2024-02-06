import FoodList from './FoodList';
import items from '../mock.json';
import { useState } from 'react';

function App() {
  //정렬기준 state
  const [order, setOrder] = useState('createdAt');

  //정렬기준 변경하는 함수
  const handleNewestClick = () => setOrder('createdAt');
  const handleCalorieClick = () => setOrder('calorie');

  const sortedItems = items.sort((a, b) => b[order] - a[order]);
  return (
    <>
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleCalorieClick}>칼로리순</button>
      </div>
      <div>
        <FoodList items={sortedItems} />
      </div>
    </>
  );
}

export default App;
