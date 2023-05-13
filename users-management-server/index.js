const express = require('express');
const app = express();
const port = process.env.Port || 5101;

const users = [
    { id: 1, name: 'Benzema', email: 'ben@gmail.com' },
    { id: 2, name: 'Mane', email: 'mane@gmail.com' },
    { id: 3, name: 'Salah', email: 'salah@gmail.com' },
    { id: 4, name: 'CR7', email: 'cr7@gmail.com' },
    { id: 5, name: 'LM10', email: 'lm10@gmail.com' },
]

app.get('/', (req, res) => {
    res.send('Users Management Server is running');
})

app.get('/users', (req, res) => {
    res.send(users)
})

app.listen(port, () => {
    console.log(`Server is running on Port: ${port}`)
})