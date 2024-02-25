import { useState, useEffect } from 'react'
import './App.css'
import { BASE_URL } from './Utils/api'
import Header from './Components/Header/Header'
import NavBar from './Components/NavBar/NavBar'
import UserList from './Components/UserList/UserList'


function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers();
  }, [])

  const getUsers = async() => {
    const res = await fetch(`${BASE_URL}?results=100`)
    const data = await (res).json()
    console.log(data.results)
    setUsers(data.results)
    
  }

  const getUsersAll = async (name) => {
    const res = await fetch(`${BASE_URL}${name}`)
    const data = await (res).json()
    setUsers(data.results)
  }

  const getUsersByGender = async (gender) => {
    const res = await fetch(`${BASE_URL}?gender=${gender}&results=100`)
    const data = await (res).json()
    setUsers(data.results)
  }

  const getUsersByNumber = async (number) => {
    const res = await fetch(`${BASE_URL}?gender=""&results=${number}`)
    const data = await (res).json()
    setUsers(data.results)
  }

  return (
    <div className="App">
       {/* Header */}
        <Header/>

       {/* NavBar */}
        <NavBar getUsers={getUsers} getUsersByGender = {getUsersByGender} getUsersByNumber = {getUsersByNumber} getUsersByName = {getUsersAll}/>

       {/* UserList */}
        <UserList users={users}/>
       
       
    </div>
  )
}

export default App
