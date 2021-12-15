import axios from 'axios';

const Url = 'http://localhost:8000/Employees';


export const getUsers = async (id) => {
    id = id || '';
    return await axios.get(`${Url}/${id}`);
}

export const addUser = async (user) => {
    return await axios.post(`${Url}`, user);
}

export const deleteUser = async (id) => {
    return await axios.delete(`${Url}/${id}`);
}

export const editUser = async (id, user) => {
    return await axios.put(`${Url}/${id}`, user)
}