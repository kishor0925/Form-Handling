const express = require('express');
const cors = require('cors');
const dns = require('dns');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
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

//getdata 

app.get('/getdata' , async(req,res) => {
  try{
    const result = await database.find().toArray();
    res.send(result);
  }
  catch(err){
    res.status(500).send('Error');
    console.log('err' , err.message)
  }
})


//Get data by id  

app.get('/getdata/:id' , async(req,res) => {
  try {

    const id = req.params.id;
    const obj = {_id : new ObjectId(id)}
    const result = await database.findOne(obj);
    res.send(result);

  } catch (error) {
    res.status(500).send('Error');
    console.log(error.message)

  }
})
 

//update data by patch


app.patch('/update/:id' , async(req, res) => {
  try {
    const id = req.params.id;
    const obj = {_id : new ObjectId(id)}
    const data = req.body;
    const updateddata = {$set : {...data}};
    const option = {upsert : true};
    const result = await database.updateOne(obj, updateddata, option);
    res.send(result);

  } catch (error) {
      res.status(500).send('Error');
      console.log(error.message)
  }
})


//Delete 


app.delete('/del/:id' , async(req,res) => {
  try {
    const id = req.params.id;
    const obj = {_id : new ObjectId(id)}
    const result = await database.deleteOne(obj)
    res.send(result)
  } catch (error) {
    res.status(500).send('Erro..');
    console.log(error.message);
  }
})
app.listen(PORT);