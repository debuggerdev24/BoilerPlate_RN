import axios from 'axios';

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getPost = (id: number) => api.get(`/posts/${id}`);
export const createPost = (data: { title: string; body: string; userId: number }) => api.post('/posts', data);

export default api;
