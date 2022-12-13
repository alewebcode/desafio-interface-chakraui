import { Box, Center, Divider, Flex, Stack, Text } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { SlideContinent } from "../components/SlideContinent";
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {
  return (
    <Flex flexDirection="column" h="100vh" >
      <Header />
      <Banner />
      <TravelTypes />

      <Center>
        <Divider orientation='horizontal' w="90px" bg="gray.800" borderColor="gray.800" border="2px solid" mt="20" />
      </Center>


      <Stack mt="52px" mx="auto" >
        <Box display="flex" flexDirection="column" justifyContent="center" fontWeight="500" fontSize="36">
          <Text align="center">Vamos nessa?</Text>
          <Text>Então escolha seu continente</Text>
        </Box>

      </Stack>
      <SlideContinent />
      <Box pt="10"></Box>

    </Flex>


  )
}

// export async function getStaticProps() {
//   const response = await fetch('http://localhost:4000/continents').then((res) => {
//     return res.json()
//   })

//   return {
//     props: {
//       continents: response
//     }
//   }

// }
