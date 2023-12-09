import clientPromise from "./index";
import { ObjectId } from 'mongodb';
import { BSON } from "mongodb";

let client;
let db;
let games;

async function init() {
  if (db) return;
  try {
    client = await clientPromise;
    db = await client.db("BudgetBoardGames");
    games = await db.collection('Games');
  } catch (error) {
    throw new Error(`Failed to establish connection to database: ${error.message}`);
  }
}

// Ensure the database connection is initialized
(async () => {
  await init();
})();

export async function getGames() {
  try {
    if (!games) await init();

    // Use toArray directly on the find method to get an array of games
    const result = await games.find({}).toArray();
    
    // Convert ObjectId to string in each game object
    const gamesWithIdAsString = result.map(game => ({ ...game, _id: game._id.toString() }));

    return { games: gamesWithIdAsString };
  } catch (error) {
    return { error: "Failed to fetch games!" };
  }
}

export async function getGameById(id) {
    try {
        if (!games) await init();
  
      // Find the game by its ID
    //   const result = await games.findOne({ _id: ObjectId(id) });
    // const result = await games.findById(ObjectId(id) );
    const result = await games.findOne({ _id: new BSON.ObjectId(id) });
  
      if (!result) {
        return { error: "Game not found!" };
      }
  
      // Convert ObjectId to string in the game object
      const gameWithIdAsString = { ...result, _id: result._id.toString() };
  
      return { game: gameWithIdAsString };
    } catch (error) {
      return { error: "Failed to fetch game!" };
    }
  }