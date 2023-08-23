import React from 'react'
import ReactDOM from 'react-dom'
import {Box} from "@chakra-ui/react";

function Navbar(){
    const textColor = "#317874";

    return(
        <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        w={"100%"}
        color={textColor}
        fontWeight="bold"
        fontSize="3xl"
        backgroundColor="#E2D2F9"
        className="navbar-container">
            <Box
            display={"flex"}
            className="animate-letters"
            ml={600}>
                <Box>P</Box>
                <Box>r</Box>
                <Box>o</Box>
                <Box>j</Box>
                <Box>e</Box>
                <Box>c</Box>
                <Box>t</Box>
                <Box>s</Box>
            </Box>

            <Box
            display={"flex"}
            className="animate-letters"
            ml={600}>
                <Box>U</Box>
                <Box>X</Box>
                <Box ml={3}>D</Box>
                <Box>e</Box>
                <Box>s</Box>
                <Box>i</Box>
                <Box>g</Box>
                <Box>n</Box>
            </Box>

        </Box>
    )
}

export default Navbar;