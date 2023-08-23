import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Box} from "@chakra-ui/react";
import Navbar from './Components/Navbar'

import './App.css'

function App() {

  return (
    <Box
    backgroundColor="#F6F0FF"
    minHeight="100vh">
      <Box>
        <Navbar />

        <img src="./src/assets/portrait.jpg"
        width="300px"/>
        <Box>

        </Box>
      
      </Box>
    </Box>
  )
}

export default App
