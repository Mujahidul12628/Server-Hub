/* eslint-disable no-unused-vars */
import React from 'react'
import './App.css'

function App() {

  const handleAddUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email }


    // fetch('http://localhost:5102/users', {
    //   method: 'POST',
    //   headers: {
    //     'content-type': 'application/json'
    //   },
    //   body: JSON.stringify(user)
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data);
    //   })

    fetch('http://localhost:5102/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })


    console.log(user);
  }

  return (
    <div>
      <h1>CRUD Client</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value="add user" />
      </form>
    </div>
  )
}

export default App
