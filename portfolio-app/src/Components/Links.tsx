import { Image, Box } from "@chakra-ui/react"
import { motion } from 'framer-motion'
import '../App.css'


function LinksComponent(){
    const imgStyles = { width: '100%', height: 'auto', borderRadius: '50%' };
    const textAreaStyles = { backgroundColor: "white", textColor: 'black', height: '20%'};
    const formMargins = {marginTop: '10x'}
    const Hover = { scale: 1.1 };

    
    const yourEmail = 'keshia.w196@gmail.com';

  const handleEmailButtonClick = () => {
    const subject = encodeURIComponent('Subject of the email');
    const body = encodeURIComponent('Your message goes here.');

    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&to=${yourEmail}&su=${subject}&body=${body}`;

    window.open(gmailComposeUrl);
  };


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

            <Box>
                <motion.div
                    whileHover={Hover}
                    style={{ width: '60px', marginLeft: '20px' }}
                >
                    <Image
                    src="./src/assets/gmail-img.PNG"
                    style={imgStyles}
                    className="btn-modal"
                    onClick={handleEmailButtonClick}
                    />
                </motion.div>

            </Box>
            
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