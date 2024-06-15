import React, { useEffect, useState } from "react";
import { fetchItems } from "../api";
import { Item } from "../types";
import ItemList from "../components/ItemList";
import Pagination from "../components/Pagination";
import { useSearchParams, useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialPage = parseInt(searchParams.get("page") || "1", 10);
  const [page, setPage] = useState(initialPage);
  const [items, setItems] = useState<Item[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const pageSize = 10;

  useEffect(() => {
    fetchItems(page, pageSize).then(({ items, totalItems }) => {
      setItems(items);
      setTotalItems(totalItems);
      console.log(totalItems);
    });
  }, [page]);

  useEffect(() => {
    setSearchParams({ page: page.toString() }, { replace: true });
  }, [page, setSearchParams]);

  const totalPages = Math.ceil(totalItems / pageSize);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    navigate(`?page=${newPage}`, { replace: true });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Items</h1>
      <ItemList data={items} />
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        disableNext={page >= totalPages}
      />
    </div>
  );
};

export default Home;
