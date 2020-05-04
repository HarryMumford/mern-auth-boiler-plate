import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [users, setUsers] = useState(null)

  const [username, setUsername] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/users')
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err))
  }, [])

  const submitUsername = () => {
    if (username === '') {
      alert('Please enter a username')
      return
    }
    axios
      .post('http://localhost:8000/api/users/user', {
        name: username,
      })
      .then(() => {
        console.log('Account created successfully')
      })
      .catch(() => {
        console.log('Could not create account')
      })
  }

  const noUsers = () => {
    if (users === null) {
      return <p>Loading...</p>
    }
    if (users.length === 0) {
      return <p>No users</p>
    }
  }

  return (
    <>
      {noUsers() ||
        users.map((u) => {
          return <p>{u.name}</p>
        })}
      <form onSubmit={submitUsername}>
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Enter your username"
        />
        <input type="submit" />
      </form>
    </>
  )
}

export default App
