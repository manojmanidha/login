import React, { useState } from 'react'
import './App.css';

function App() {
  const [username , setUserName]=useState('');
  const [password , setPassword]=useState('');
  const [waring1 , setWarning1] = useState(false)
  const [waring2 , setWarning2] = useState(false)
  const [welcome , setWelcome] = useState(false)
  const [error , setError]= useState('')
  // console.log(username)
  // console.log(password)

  const handleSubmit = (e)=>{
   e.preventDefault();
   if(username===''){
     setWarning1(true)
   }

   if(password===''){
    setWarning2(true)
  }

  if(username === 'user' && password === 'password'){
    setWelcome(true)
  }else{
    setError('Invalid username or password')
    setWelcome(false)
  }

  }

  return (
    <div className="App">
      <h1>Login Page</h1>
      {welcome ? <p>Welcome, {username}!</p> : 
        <form onSubmit={handleSubmit}> 
        <p>{error}</p>
        <label>Username:</label><input value={username} onChange={(e)=>setUserName(e.target.value)} placeholder='username'></input>
        {waring1 && <p style={{ color: 'red' }}>Please fill out this feild</p>}<br/>
        <label>Password:</label><input value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password'></input>
        {waring2 && <p style={{ color: 'red' }}>Please fill out this feild</p>}<br/>
        <button type='submit'>Submit</button>
      </form>}

    </div>
  );
}

export default App;
