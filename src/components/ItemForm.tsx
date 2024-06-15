import React, { useState, useEffect } from 'react';
import { fetchItem, updateItem } from '../api';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const ItemForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [initialTitle, setInitialTitle] = useState('');
  const [initialBody, setInitialBody] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchItem(id).then((response) => {
      const { title, body } = response.data;
      setTitle(title);
      setBody(body);
      setInitialTitle(title);
      setInitialBody(body);
    });
  }, [id]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateItem(id, { title, body }).then(() => {
      toast.success("Item updated successfully!");
      navigate(`/items/${id}`);
    });
  };

  const isSaveDisabled = title === initialTitle && body === initialBody;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6">Edit Item</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Body</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={5}
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSaveDisabled}
            className={`px-4 py-2 rounded-md shadow-md transition-colors duration-300 mr-2 ${
              isSaveDisabled ? 'bg-gray-400 text-gray-700 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            Save
          </button>
          <button
            type="button"
            onClick={() => navigate(`/items/${id}`)}
            className="px-4 py-2 bg-gray-500 text-white rounded-md shadow-md hover:bg-gray-600 transition-colors duration-300"
          >
            Back to Details
          </button>
        </div>
      </form>
    </div>
  );
};

export default ItemForm;
