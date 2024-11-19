// frontend/src/components/ItemList.js

const ItemList = ({ items = [] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((item) => (
        <div key={item.id} className="border p-4 rounded-lg">
          <img
            src={`https://via.placeholder.com/150?text=${item.category}`}
            alt={item.category}
            className="w-full h-40 object-cover"
          />
          <h3 className="text-lg font-semibold">{item.designer}</h3>
          <p>{item.category}</p>
          <p>${item.price}</p>
          <p>{item.rating} ★</p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
