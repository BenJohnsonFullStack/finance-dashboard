// import express from 'express';
// import bodyParser from 'body-parser';
// import { MongoClient, ServerApiVersion } from 'mongodb'
// import cors from 'cors'
// import dotenv from 'dotenv'
// import helmet from 'helmet'
// import morgan from 'morgan'

// /** CONFIG */
// dotenv.config()
// const app = express()
// app.use(express.json())
// app.use(helmet())
// app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}))
// app.use(morgan("common"))
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extende: false}))
// app.use(cors())

// /** MONGOOSE SETUP */
// const PORT = process.env.PORT || 9000

// const uri = process.env.MONGO_URL
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir)
// .then(async () => {
//     app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
// })
// .catch((err) => console.log(`${err} did not connect`))

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from "mongoose"
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';

/** CONFIG */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/** MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGO_URL, {
  useMongoClient: true
})
.then(async () => {
  console.log("Connected to MongoDB!");
  app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
})
.catch((err) => console.error(`MongoDB connection error: ${err}`));