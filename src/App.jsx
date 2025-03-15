import { useState } from "react"
import axios from "axios"

export default function App() {
  const [username,setUsername] = useState("")

  async function handleSubmit(e){
    e.preventDefault()
    const response = await axios.post("https://apsbackend.onrender.com/login",{username})
    setUsername(response.data)
    console.log(response.data)
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={(e)=>{setUsername(e.target.value)}}/>
      <input type="submit" />
    </form>

  )
}
