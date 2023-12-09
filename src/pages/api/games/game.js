import { getGames } from "@/lib/mongo/games"

const handler = async (req, res) => {
    if (req.method === "GET") {
        try {
            const gameId = req.query.id; // Assuming the ID is passed as a query parameter

            const { games, error } = await getGames()
            const game = games.find(game => game.id === gameId) // Modify this line to find the game by ID
            if (!game) {
                return res.status(404).json({ error: 'Game not found' })
            }

            return res.status(200).json({ game })
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

    res.setHeader("Allow", ["GET"])
    res.status(425).end(`Method ${req.method} is not allowed.`)
}

export default handler
