import React from 'react'
import {Link} from 'react-router-dom'
import {Image, Box} from "@chakra-ui/react"
import {motion} from 'framer-motion'

function LinksComponent(){
    const imgStyles = { width: '100%', height: 'auto', borderRadius: '50%' }
    const Hover = { scale: 1.1 }
    

    return(
        <Box
        display= 'flex'
        marginLeft= "220px"
        marginTop= "20px"
        >
            <a href="https://www.linkedin.com/in/keshia-wick/" target="_blank">
            <motion.div
              whileHover={Hover}
              style={{ width: '60px' }}
              >
                <Image
                    src="./src/assets/linkedin.PNG"
                    alt="LinkedIn"
                    style={imgStyles}
                />
            </motion.div>
            </a>

            <a href="https://github.com/Keshia-w" target="_blank">
                <motion.div
                whileHover={Hover}
                style={{ width: '60px', marginLeft: '20px' }}
                >
                    <Image
                    src="./src/assets/github-icon.PNG"
                    style={imgStyles}
                    />
                </motion.div>
              </a>

            <a>
              <motion.div
              whileHover={Hover}
              style={{ width: '60px', marginLeft: '20px' }}
              >
                <Image
                  src="./src/assets/gmail-img.PNG"
                  style={imgStyles}
                  />
              </motion.div>
            </a>
            
            <a href="https://www.credly.com/users/keshia-wick" target="_blank" >
                <motion.div
                    whileHover={Hover}
                    style={{ width: '60px', marginLeft: '20px' }}
                >
                    <Image
                    src="./src/assets/credly.svg"
                    style={imgStyles}
                    />
                </motion.div>
            </a>
          </Box>
    )
}

export default LinksComponent;