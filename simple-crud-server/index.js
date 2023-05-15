const express = require('express');
const cors = require('cors');


const app = express();
const port = process.env.Port || 5102;

//middleware
app.use(cors());
app.use(express.json())


app.get('/', (req, res) => {
    res.send('Users Management Server is running');
})

app.listen(port, () => {
    console.log(`Server is running on Port: ${port}`)
})