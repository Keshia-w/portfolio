import React from 'react'
import ReactDOM from 'react-dom'
import {Box} from "@chakra-ui/react";

function Navbar(){
    const textColor = "#317874";

    return(
        <Box
        display={"flex"}
        w={"100%"}
        color={textColor}
        fontWeight="bold"
        fontSize="3xl"
        backgroundColor="#E2D2F9"
        height="70px"
        justifyContent="flex-end">
            <Box
            display={"flex"}
            className="animate-letters"
            mt={2}
            >
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
            mt={2}>
                <Box ml={20}>U</Box>
                <Box>X</Box>
                <Box ml={3}>D</Box>
                <Box>e</Box>
                <Box>s</Box>
                <Box>i</Box>
                <Box>g</Box>
                <Box mr={8}>n</Box>
            </Box>

        </Box>
    )
}

export default Navbar;