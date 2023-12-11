import clientPromise from "./index";
import { ObjectId } from 'mongodb';
import { BSON } from "mongodb";

let client;
let db;
let orders;

async function init() {
  if (db) return;
  try {
    client = await clientPromise;
    db = await client.db("BudgetBoardGames");
    orders = await db.collection('Orders');
  } catch (error) {
    throw new Error(`Failed to establish connection to database: ${error.message}`);
  }
}

// Ensure the database connection is initialized
(async () => {
  await init();
})();

export async function getOrders() {
  try {
    if (!orders) await init();

    // Use toArray directly on the find method to get an array of orders
    const result = await orders.find({}).toArray();
    
    // Convert ObjectId to string in each order object
    const ordersWithIdAsString = result.map(order => ({ ...order, _id: order._id.toString() }));

    return { orders: ordersWithIdAsString };
  } catch (error) {
    return { error: "Failed to fetch orders!" };
  }
}

export async function getOrdersById(id) {
    try {
        if (!orders) await init();
  
      // Find the order by its ID
    //   const result = await orders.findOne({ _id: ObjectId(id) });
    // const result = await orders.findById(ObjectId(id) );
    const result = await orders.findOne({ _id: new BSON.ObjectId(id) });
  
      if (!result) {
        return { error: "Order not found!" };
      }
  
      // Convert ObjectId to string in the order object
      const orderWithIdAsString = { ...result, _id: result._id.toString() };
  
      return { order: orderWithIdAsString };
    } catch (error) {
      return { error: "Failed to fetch order!" };
    }
  }

  export async function placeOrder(orderData) {
    try {
      if (!orders) await init();
  
      // Insert the new order into the Orders collection
      const result = await orders.insertOne(orderData);
  
      if (result.insertedCount === 1) {
        // If the order was successfully inserted, return the inserted order with its generated ID
        const insertedOrder = { ...orderData, _id: result.insertedId.toString() };
        return { order: insertedOrder };
      } else {
        return { error: "Failed to place the order!" };
      }
    } catch (error) {
      return { error: "Failed to place the order!" };
    }
  }