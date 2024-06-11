import React, { useState } from 'react';
import './style/CategoryForm.css'
import axios from 'axios';

const CategoryForm = ({ userId, onCategoryCreated }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/categories', {
                userId,
                name,
                description
            });
            onCategoryCreated(response.data);
            setName('');
            setDescription('');
        } catch (error) {
            console.error('Error creating category:', error);
        }
    };

    return (
        <form className="category-form" onSubmit={handleSubmit}>
            <input
                className="category-form__input"
                type="text"
                placeholder="Category Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                className="category-form__input"
                type="text"
                placeholder="Category Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button className="category-form__button" type="submit">Create Category</button>
        </form>
    );
};

export default CategoryForm;
