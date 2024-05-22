import axios from 'axios';

export const getBlogs = async () => {
    const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/blog`);
    return response.data
}

export const getBlogById = async (id) => {
    const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/blog/${id}`);
    return response.data.blog
}

export const addBlog = async (newBlog) => {
    const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/blog`, newBlog);
    return response.data;
};

export const updateBlog = async (updatedBlog) => {
    const { id } = updatedBlog;
    const response = await axios.put(`${import.meta.env.VITE_SERVER_URL}/blog/${id}`, updatedBlog);
    return response.data;
};

export const deleteBlog = async (id) => {
    const response = await axios.delete(`${import.meta.env.VITE_SERVER_URL}/blog/${id}`);
    return response.data;
};

export const increaseLikesCount = async (id) => {
    const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/blog/likes/${id}`);
    return response.data;
};


export const decreaseLikesCount = async (id) => {
    const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/blog/dislikes/${id}`);
    return response.data;
};




export const getAuthors = async () => {
    const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/author`);
    return response.data
}

export const getAuthorById = async (authorId) => {
    const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/author/${authorId}`);
    return response.data;
};

export const addAuthor = async (newAuthor) => {
    const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/author`, newAuthor);
    return response.data;
};

export const deleteAuthor = async (id) => {
    const response = await axios.delete(`${import.meta.env.VITE_SERVER_URL}/author/${id}`);
    return response.data;
};




export const getComments = async () => {
    const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/comment`);
    return response.data
}

export const addComment = async (newComment) => {
    const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/comment`, newComment);
    return response.data;
}

export const deleteComment = async (id) => {
    const response = await axios.delete(`${import.meta.env.VITE_SERVER_URL}/comment/${id}`);
    return response.data;
}