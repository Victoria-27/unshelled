import { Link } from "react-router-dom";
import { Item } from "../types";

const ItemList = ({ data }: { data: Item[] }) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {Array.isArray(data) &&
        data.map((item) => (
          <li
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2 truncate">{item.title}</h2>
              <p className="text-gray-700 mb-4 line-clamp">{item.body}</p>
              <Link
                to={`/items/${item.id}`}
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                Read More
              </Link>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default ItemList;
