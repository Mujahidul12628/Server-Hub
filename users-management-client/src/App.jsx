/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5101/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(error => console.error(error));
  }, []);

  const handleAddUser = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;

    const user = { name, email }
    console.log(user)

    fetch('http://localhost:5101/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log('inside post response', data)
        const newUser = [...users, data];
        setUsers(newUser);
        form.reset();
      })



  }
  return (
    <div>
      <h1>Users Management Client Site</h1>
      <p>Total Users: {users.length}</p>
      <form onSubmit={handleAddUser} >
        <input type="text" name='name' id='name' /> <br />
        <input type="email" name="email" id="email" /><br />
        <input type="submit" value="Add User" />
      </form>
      <div>
        {
          users.map(user => {
            return (
              <div key={user.id}>
                <p><span>Id: {user.id} </span> <span>Name: {user.name} </span> <span>Email: {user.email} </span></p>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default App;
