import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ItemDetailsPage from './pages/ItemDetailsPage';
import EditItem from './pages/EditItem';

function App() {
  return (
    <Router>
      <div className="container mx-auto p-4">
      <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items/:id" element={<ItemDetailsPage />} />
          <Route path="/items/:id/edit" element={<EditItem />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
