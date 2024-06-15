import React, { useState } from 'react';

const Category = ({ name }) => {
    const [games, setGames] = useState([]);

    const addGame = (game) => {
        setGames([...games, game]);
    };

    return (
        <div>
            <h3>{name}</h3>
            <ul>
                {games.map((game, index) => (
                    <li key={index}>{game}</li>
                ))}
            </ul>
            <input
                type="text"
                placeholder="Add an achievement"
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        addGame(e.target.value);
                        e.target.value = '';
                    }
                }}
            />
        </div>
    );
};

export default Category;
