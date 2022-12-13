import { Box, Flex, Image, Text } from "@chakra-ui/react";

export function Banner(){
    return (
        <Flex w="100vw" mx="auto"  minH="335" bgRepeat="no-repeat" bgImage="url('./images/Background.svg')" bgSize="cover"  justifyContent="space-between" position="relative">
            <Box display="flex"  flexDir="column" ml="140">

                <Text fontWeight="500" fontSize={36}  color="gray.600" mt="20">
                    5 Continentes,<br/>
                    infinitas possibilidades.
                   
                </Text>
                <Text fontWeight="400" color="gray.700"  pt="5" fontSize={20}>
                    Chegou a hora de tirar do papel a viagem que você <br/> sempre sonhou. 
                </Text>

                
            </Box>
            <Box display="flex" right="140"  position="absolute" top="76">
                    <Image src="./images/Airplane.svg" alt="Airplane"/>
            </Box>
          
        </Flex>
    )
}