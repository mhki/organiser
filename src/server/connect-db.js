import { MongoClient } from 'mongodb';
// const MongoClient = require("mongodb").MongoClient;
const url = `mongodb+srv://miki:mikemunene@cluster0.6hwj5.mongodb.net/myOrganiser?retryWrites=true&w=majority`;

let db = null;

export async function connectDB() {

    if (db) return db;
    let client = await MongoClient.connect(url, { useNewUrlParser: true });
    db = client.db();
    console.info("Got DB", db);
    return db;
}

connectDB();