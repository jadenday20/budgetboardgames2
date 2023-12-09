import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import Button from '@/components/Button';
import axios from 'axios';
import formatPrice from '@/components/FormatPrice';
import FlexLayout from '@/components/Flex';
import Image from 'next/image';

interface Game {
    _id: number;
    name: string;
    age: string;
    players: string;
    playtime: string;
    price: number;
    imagePath: string;
}

export default function Page() {
    const router = useRouter();
    const { id } = router.query;
    const [game, setGame] = useState<Game | null>(null);

    useEffect(() => {
        const fetchGame = async () => {
            try {
                const response = await axios.get(`/api/games/${id}`); // Replace with your API route for fetching a single game
                setGame(response.data.game); // Assuming the response contains the game data
                // setGame( gameResponse.game)
            } catch (error) {
                console.error('Error fetching game:', error);
            }
        };

        if (id) {
            fetchGame();
        }
    }, [id]);

    if (!game) {
        return (
            <Layout headingTitle="Loading...">
                <p>Everything should be ready to go in just a minute.</p>
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
            <FlexLayout>
                <Image src={"/productImages/" + game.imagePath} alt={game.name} width={300} height={300}>

                </Image>
                <div>
                    <p className='text-xl font-bold'>{formatPrice(game.price)}</p>
                    <p>Age: {game.age}</p>
                    <p>Players: {game.players}</p>
                    <p>Playtime: {game.playtime}</p>
                    <Button linkTitle="Add to Cart" onClickEvent={addToCart} href="/cart" />
                    <Button linkTitle="Shop for More" href="/shop" />
                </div>

            </FlexLayout>
        </Layout>
    );
}