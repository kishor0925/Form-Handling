const express = require('express');
const cors = require('cors');
const dns = require('dns');

const PORT = 5666;

const app = express();
dns.setServers(['8.8.8.8','8.8.4.4']);

app.use(express.json());
app.use(cors());


let database;

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://formhandle:formhandles@cluster0.ejcepe9.mongodb.net/?appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


async function run() {
  try {
    await client.connect();

    database = await client.db('formhandle').collection('formcollection');
   
    
    console.log("MongoDb connected!");

  } finally {
    // await client.close();
  }
}
run().catch(console.dir);


app.post('/upload', async(req, res) => {

    try{
        const data = req.body;
        const result = await database.insertOne(data);
        res.send(result);
    }
    catch(error)
    {
        res.status(500).send('Error');
        console.log(error.message);
    }
 


})



app.listen(PORT, () => {
    console.log('I m in Port' , PORT);
})
