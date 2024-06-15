import React, { useEffect, useState } from 'react';
import { fetchItem, deleteItem } from '../api';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Item } from '../types';
import { toast } from 'react-toastify';
import Modal from './Modal';

const PostDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<Item | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchItem(id).then((response) => {
      setItem(response.data);
    });
  }, [id]);

  const handleDelete = () => {
    deleteItem(id).then(() => {
      toast.success("Item deleted successfully!");
      navigate('/');
    });
  };

  if (!item) return <div className="text-center py-8">Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">{item.title}</h1>
        <div className="flex">
          <Link
            to={`/items/${id}/edit`}
            className="mr-2 px-4 py-2 bg-yellow-500 text-white rounded-md shadow-md hover:bg-yellow-600 transition-colors duration-300"
          >
            Edit
          </Link>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 transition-colors duration-300"
          >
            Delete
          </button>
        </div>
      </div>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">{item.body}</p>
      <div className="flex justify-end">
        <button
          onClick={() => navigate('/')}
          className="px-4 py-2 bg-gray-500 text-white rounded-md shadow-md hover:bg-gray-600 transition-colors duration-300"
        >
          Back to List
        </button>
      </div>
      <Modal
        isOpen={isModalOpen}
        title="Confirm Deletion"
        message="Are you sure you want to delete this item?"
        onConfirm={handleDelete}
        onCancel={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default PostDetails;
