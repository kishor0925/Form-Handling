const express = require('express');
const cors = require('cors');
const dns = require('dns');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const PORT = 5222;
app.use(cors());
app.use(express.json());


dns.setServers(['8.8.8.8' , '8.8.4.4']);
const uri = "mongodb+srv://formhandle:formhandles@cluster0.ejcepe9.mongodb.net/?appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
let database;

async function run() {
  try {
    await client.connect();
    database = await client.db('formhandle').collection('formcollection');
    console.log(" connected to MongoDB!");
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);



//post 

app.post('/upload' , async(req,res) => {
  try{
    const data = req.body;
    const result = await database.insertOne(data);
    res.send(result);
  }
  catch(error){
    res.status(500).send('Error');
    console.log(error.message);
  }
})


app.listen(PORT, () => {
  console.log('I m in Port..');
})