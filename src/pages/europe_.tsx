
import { Box, Flex, Heading, HStack, SimpleGrid, Text,Image } from "@chakra-ui/react";
import { Header } from "../components/Header";


export default function Europe() {
    return (

        <Flex flexDirection="column" h="100vh"  w="100%" >
          <Header />

          <Flex w="auto" minH="527px" bgRepeat="no-repeat center" bgImage="url('./images/BannerEurope.svg')" bgSize="cover"  justifyContent="space-between" position="relative">
            
          
          </Flex>
          <Box display="flex" mt="20" mx="auto" maxW={1160} alignItems="center">
                <Text textAlign="justify" w="600px" fontSize="24" fontWeight="400">
                    A Europa é, por convenção, um dos seis
                    continentes do mundo. Compreendendo a 
                    península ocidental da Eurásia, a Europa
                    geralmente divide-se da Ásia a leste pela
                    divisória de águas dos montes Urais, o rio Ural, o 
                    mar Cáspio, o Cáucaso, e o mar Negro a sudeste
                </Text>

                <HStack spacing="42" h="99" ml="70px">
                    <Box w="98px" textAlign="center">
                        <Heading fontWeight="600" fontSize="48" color="yellow.500" >50</Heading>
                        <Text fontSize="24" color="gray.800" fontWeight="600">paises</Text>
                    </Box>
                    <Box  w="122px" textAlign="center">
                        <Heading fontWeight="600" fontSize="48" color="yellow.500">60</Heading>
                        <Text fontSize="24" color="gray.800" fontWeight="600">línguas</Text>
                    </Box>
                    <Box w="165px" textAlign="center">
                        <Heading fontWeight="600" fontSize="48" color="yellow.500">27</Heading>
                        <Text fontSize="24" color="gray.800" fontWeight="600">cidades + 100</Text>
                    </Box>

                </HStack>
          </Box>
          <Box maxW={1160} mx="auto" w="100vw" mt="20">
            <Heading fontWeight="500" fontSize="36">Cidades +100</Heading>
            <SimpleGrid minChildWidth="256px" spacing='45px' mt="10"  mb="5">
                <Box  h="279px" w="256px" borderRadius="4px" backgroundColor="#FFF" flexDirection="column" borderColor="yellow.500" borderWidth="1px">
                    <Image src="./images/LondonCity.svg" alt="london"  h="173px"/>

                    <Box display="flex" justifyContent="space-between"   alignItems="center"  p="4">
                         <Box>
                            <Text fontWeight="600" fontSize="20" color="gray.800" fontFamily="Barlow" >Londres</Text>
                            <Text fontWeight="500" fontSize="16" color="gray.900"  pt="3">Reino Unido</Text>
                        </Box>
                       
                        <Image src="./images/Ellipse-England.svg" alt="England"/>
                        
                        
                    </Box>
                    
                   
                </Box>
                <Box h="279px" w="256px" borderRadius="4px" backgroundColor="#FFF" borderColor="yellow.500" borderWidth="1px">
                    <Image src="./images/ParisCity.svg" alt="paris"  />

                    <Box display="flex" justifyContent="space-between"   alignItems="center"  p="4" >
                        <Box>
                            <Text fontWeight="600" fontSize="20" color="gray.800" fontFamily="Barlow">Paris</Text>
                            <Text fontWeight="500" fontSize="16" color="gray.900" pt="3">França</Text>
                        </Box>
                        
                   
                    <Image src="./images/Ellipse-French.svg" alt="England"/>
                    </Box>

                </Box>
                <Box h="279px" w="256px" borderRadius="4px" backgroundColor="#FFF" borderColor="yellow.500" borderWidth="1px">
                    <Image src="./images/RomaCity.svg" alt="roma"  />

                    <Box display="flex" justifyContent="space-between"   alignItems="center"  p="4" >
                        <Box>
                            <Text fontWeight="600" fontSize="20" color="gray.800" fontFamily="Barlow">Roma</Text>
                            <Text fontWeight="500" fontSize="16" color="gray.900" pt="3">Itália</Text>
                        </Box>
                        <Image src="./images/Ellipse-Italy.svg" alt="Italy"/>
                    </Box>
                  

                </Box>
                <Box h="279px" w="256px" borderRadius="4px" backgroundColor="#FFF" borderColor="yellow.500" borderWidth="1px">
                    <Image src="./images/PragaCity.svg" alt="praga"  />

                    <Box display="flex" justifyContent="space-between"   alignItems="center"  p="4" >

                        <Box>
                            <Text fontWeight="600" fontSize="20" color="gray.800" fontFamily="Barlow">Praga</Text>
                            <Text fontWeight="500" fontSize="16" color="gray.900"  pt="3">República Tcheca</Text>
                        </Box>
                        
                        <Image src="./images/Ellipse-Czech.svg" alt="Czech"/>
                    </Box>
                  
                </Box>
                <Box h="279px" w="256px" borderRadius="4px" backgroundColor="#FFF" borderColor="yellow.500" borderWidth="1px">
                    <Image src="./images/AmsterdaCity.svg" alt="Amsterdã"  />

                    <Box display="flex" justifyContent="space-between"   alignItems="center"  p="4" >
                        <Box>
                            <Text fontWeight="600" fontSize="20" color="gray.800" fontFamily="Barlow">Amsterdã</Text>
                            <Text fontWeight="500" fontSize="16" color="gray.900"  pt="3">Holanda</Text>
                        </Box>
                        <Image src="./images/Ellipse-Netherland.svg" alt="Czech"/>
                    </Box>
                   
                </Box>

            </SimpleGrid>    
          </Box>
          
         
        </Flex>
    )

}