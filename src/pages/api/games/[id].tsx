// import { useRouter } from "next/router";

// import { getGames } from "@/lib/mongo/games"

// const handler = async (req, res) => {
//     if (req.method === "GET") {
//         try {
//             const { games, error } = await getGames()
//             if (error) throw new Error(error)

//             const id = useRouter().query

//             let specificGame = games.find(id)

//             return res.status(200).json({ specificGame })
//         } catch (error) {
//             return res.status(500).json({ error: error.message })
//         }
//     }

//     res.setHeader("Allow", ["GET"])
//     res.status(425).end(`Method ${req.method} is not allowed.`)
// }

// export default handler

// pages/api/game/[id].ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { getGameById, } from '@/lib/mongo/games';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;

    try {
        // Fetch game details from the database based on the ID
        const game = await getGameById(id); // Replace with your database query method

        if (!game) {
            return res.status(404).json({ message: 'Game not found' });
        }

        res.status(200).json(game);
    } catch (error) {
        console.error('Error fetching game:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}