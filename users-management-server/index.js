const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.Port || 5101;

//middleware
app.use(cors());
app.use(express.json())

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

app.post('/users', (req, res) => {
    console.log('Post API hitting');
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);
})

app.listen(port, () => {
    console.log(`Server is running on Port: ${port}`)
})