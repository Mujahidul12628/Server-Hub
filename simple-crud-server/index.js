const express = require('express');
const cors = require('cors');

const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.Port || 5102;

//middleware
app.use(cors());
app.use(express.json())

// fardinihsan
// lcOH2xOQ407Zh4Nc

const uri = "mongodb+srv://fardinihsan:lcOH2xOQ407Zh4Nc@cluster0.dphnvzs.mongodb.net/?retryWrites=true&w=majority";

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
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);



app.get('/', (req, res) => {
    res.send('Users Management Server is running');
})

app.listen(port, () => {
    console.log(`Server is running on Port: ${port}`)
})