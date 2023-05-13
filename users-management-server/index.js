const express = require('express');
const app = express();
const port = process.env.Port || 5101;

app.get('/', (req, res) => {
    res.send('Users Management Server is running');
})

app.listen(port, () => {
    console.log(`Server is running on Port: ${port}`)
})