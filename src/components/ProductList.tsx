import React, { useEffect, useState } from "react";
import SingleProduct from "./Product";
import axios from 'axios';
import formatPrice from "./FormatPrice";

interface Game {
  _id: number;
  name: string;
  age: string;
  players: string;
  playtime: string;
  imagePath: string;
  condition: string;
  price: number;
}
export default function Products() {
  const [games, setGames] = useState<Game[]>([]);
  const [selectedCondition, setSelectedCondition] = useState<string>('All');

  useEffect(() => {
    async function fetchGames() {
      try {
        const response = await axios.get<{ games: Game[] }>('/api/games');
        setGames(response.data.games);
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    }

    fetchGames();
  }, []);

  const handleConditionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCondition(e.target.value);
  };

  const filteredGames = selectedCondition === 'All'
    ? games
    : games.filter((game) => game.condition === selectedCondition);

  return (
    <div className="flex flex-col">
      <div className="filter-options text-center m-3">
        <label htmlFor="conditionFilter">Filter by Condition: </label>
        <select
          className="hover:cursor-pointer"
          id="conditionFilter"
          value={selectedCondition}
          onChange={handleConditionChange}
        >
          <option value="All">All</option>
          <option value="Used">Used</option>
          <option value="Lightly-Used">Lightly Used</option>
          <option value="New">New</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-5 mx-auto text-center">
        {filteredGames.map((game) => (
          <SingleProduct
            LinkTitle={game.name}
            Condition={game.condition}
            key={game._id}
            href={`products/${game._id}`}
            imageSrc={game.imagePath}
            Price={formatPrice(game.price)} />
        ))}
      </div>
    </div>
  );
}