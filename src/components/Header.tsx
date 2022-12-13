import { Box, Flex } from "@chakra-ui/react";

export function Header(){
    return (
        <Flex width="100%" flexDirection="column" >
            <Box display="flex" alignItems="center" justifyContent="center" h="100px">
                    <img src="./images/Logo.svg" alt="logo"  />
            </Box>
        </Flex>    
    )
   
}