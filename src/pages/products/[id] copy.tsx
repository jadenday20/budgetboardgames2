import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
// import gamesData from '@/json/games.json';
import Button from '@/components/Button';
import axios from 'axios';


interface Game {
    _id: number;
    name: string;
    age: string;
    players: string;
    playtime: string;
}

export default function Page() {
    const [games, setGames] = useState<Game[]>([]); // Set initial type as an empty array of Game

    useEffect(() => {
        async function fetchGames() {
            try {
                const response = await axios.get<{ games: Game[] }>(`/api/games/${id}`); // Endpoint defined in your API route
                alert(response)
                setGames(response.data.games);
            } catch (error) {
                console.error('Error fetching games:', error);
            }
        }

        fetchGames();
    }, []);

    const router = useRouter();
    const { id } = router.query;

    // Parse the ID as a number
    const gameId = typeof id === 'string' ? parseInt(id, 10) : -1;

    // Find the game object that matches the provided ID
    const game: Game | undefined = games.find((game: Game) => game._id === gameId);

    // Check if the game is found
    if (!game) {
        return (
            <Layout headingTitle='Game Not Found' children={undefined}>
            </Layout>
        );
    }

    const addToCart = () => {
        // Retrieve existing cart items from localStorage or initialize an empty array
        const existingCartItems = localStorage.getItem('cartItems');
        const cartItems: Game[] = existingCartItems ? JSON.parse(existingCartItems) : [];

        // Check if the game is already in the cart
        const isAlreadyInCart = cartItems.some((item: Game) => item._id === game._id);

        if (!isAlreadyInCart) {
            // Add the game to the cart items list
            cartItems.push(game);

            // Update the cart items in localStorage
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            alert(`${game.name} added to cart!`);
        } else {
            alert(`${game.name} is already in the cart!`);
        }
    };

    return (
        <Layout headingTitle={game.name}>
            <p>Age: {game.age}</p>
            <p>Players: {game.players}</p>
            <p>Playtime: {game.playtime}</p>
            <Button linkTitle='Add to Cart' onClickEvent={addToCart} href='/cart'></Button>
            <Button linkTitle='Shop for More' href='/shop'></Button>
        </Layout>
    );
}