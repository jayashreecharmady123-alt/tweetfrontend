import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registere from './pages/Registere';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Tweets from './pages/Tweets';
import CreateTweet from './pages/CreateTweet';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
         <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registere />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/tweets" element={<Tweets/>} />
        <Route path="/createtweet" element={<CreateTweet/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
