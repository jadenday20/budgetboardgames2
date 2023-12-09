// import { useRouter } from 'next/router';
// import React from 'react';
// import Layout from '@/components/Layout';
// import gamesData from '@/json/games.json';
// import Button from '@/components/Button';

// interface Game {
//     id: number;
//     name: string;
//     age: string;
//     players: string;
//     playtime: string;
// }

// export default function Page() {
//     const router = useRouter();
//     const { id } = router.query;

//     // Parse the ID as a number
//     const gameId = typeof id === 'string' ? parseInt(id, 10) : -1;

//     // Find the game object that matches the provided ID
//     const game: Game | undefined = gamesData.find((game: Game) => game.id === gameId);

//     // Check if the game is found
//     if (!game) {
//         return (
//             <Layout headingTitle='Game Not Found' children={undefined}>
//             </Layout>
//         );
//     }

//     const addToCart = () => {
//         // Retrieve existing cart items from localStorage or initialize an empty array
//         const existingCartItems = localStorage.getItem('cartItems');
//         const cartItems: Game[] = existingCartItems ? JSON.parse(existingCartItems) : [];

//         // Check if the game is already in the cart
//         const isAlreadyInCart = cartItems.some((item: Game) => item.id === game.id);

//         if (!isAlreadyInCart) {
//             // Add the game to the cart items list
//             cartItems.push(game);

//             // Update the cart items in localStorage
//             localStorage.setItem('cartItems', JSON.stringify(cartItems));
//             alert(`${game.name} added to cart!`);
//         } else {
//             alert(`${game.name} is already in the cart!`);
//         }
//     };

//     return (
//         <Layout headingTitle={game.name}>
//             <p>Age: {game.age}</p>
//             <p>Players: {game.players}</p>
//             <p>Playtime: {game.playtime}</p>
//             <Button linkTitle='Add to Cart' onClickEvent={addToCart} href='/cart'></Button>
//             <Button linkTitle='Shop for More' href='/shop'></Button>
//         </Layout>
//     );
// }