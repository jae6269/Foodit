function FoodListItem({ item, onDelete }) {
  const { imgUrl, title, calorie, content } = item;

  const handleDeleteClick = () => onDelete(item.id);
  return (
    <div>
      <img src={imgUrl} alt={title} />
      <div>{title}</div>
      <div>{calorie}</div>
      <div>{content}</div>
      <button onClick={handleDeleteClick}>삭제</button>
    </div>
  );
}

function FoodList({ items, onDelete }) {
  return (
    <ul className="FoodList">
      {items.map((item) => (
        <il key={item.id}>
          <FoodListItem item={item} onDelete={onDelete} />
        </il>
      ))}
    </ul>
  );
}

export default FoodList;
