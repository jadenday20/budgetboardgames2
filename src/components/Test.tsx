import React, { useEffect, useState } from 'react';
import axios from 'axios'; // If using axios

interface Game {
    _id: string; // Adjust types according to your game structure
    name: string; // Adjust types according to your game structure
    // Other properties...
}

function YourComponent() {
    const [games, setGames] = useState<Game[]>([]); // Set initial type as an empty array of Game

    useEffect(() => {
        async function fetchGames() {
            try {
                const response = await axios.get<{ games: Game[] }>('/api/games'); // Endpoint defined in your API route
                setGames(response.data.games);
            } catch (error) {
                console.error('Error fetching games:', error);
            }
        }

        fetchGames();
    }, []);

    return (
        <div>
            <ul>
                {games.map((game) => (
                    <li key={game._id}>
                        {game.name}
                        {/* Display other properties of the 'Game' type */}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default YourComponent;