import React from 'react'
import ItemForm from '../components/ItemForm';

const EditItem = () => {
    return (
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Edit Item</h1>
          <ItemForm />
        </div>
      );
}

export default EditItem