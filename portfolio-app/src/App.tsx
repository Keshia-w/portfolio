import { Box, Image } from "@chakra-ui/react";
import Navbar from './Components/Navbar'
import LinksComponent from './Components/Links'
import {motion} from 'framer-motion';
import './App.css'

function App() {

  return (
    <Box backgroundColor="#F6F0FF" minHeight="100vh">
      
        <Navbar />

        <motion.div
        >
          <Image
            src="./src/assets/portrait.jpg"
            style={{ 
              borderRadius: "50%",
              width: "350px",
              height: "300px",
              boxShadow: "0px 4px 6px -1px rgba(114, 90, 150, 0.6)",
              border: "2px solid #725A96",
              marginTop:"30px",
              marginLeft: "200px" }}
          />
        </motion.div>

        <LinksComponent />

        <Box 
        color={"#317874"}
        fontWeight={600}
        marginLeft={250}>
          <Box>
            Email: keshia.w196@gmail.com
          </Box>

          <Box>
          Phone: +64 27 355 0768
          </Box>
        </Box>
        
      </Box>
    
  );
}

export default App;