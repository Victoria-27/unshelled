import axios from 'axios';


const API_URL = process.env.REACT_APP_API_URL
console.log(API_URL)

export const fetchItems = (page = 1, limit = 10) => {
    return axios.get(`${API_URL}/posts`, { params: { _page: page, _limit: limit } })
      .then(response => {
        console.log(response)
        const totalItems = parseInt(response.headers['x-total-count'], 10);
        return {
          items: response.data,
          totalItems,
        };
      });
  };

export const fetchItem = (id) => {
  return axios.get(`${API_URL}/posts/${id}`);
};

export const updateItem = (id, data) => {
  return axios.put(`${API_URL}/posts/${id}`, data);
};

export const deleteItem = (id) => {
  return axios.delete(`${API_URL}/posts/${id}`);
};
