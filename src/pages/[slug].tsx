import { Box, Flex, Heading, HStack, SimpleGrid, Text, Image } from "@chakra-ui/react";
import { Header } from "../components/Header"

interface ContinentProps {
    continent: {
        name: string;
        slug: string;
        banner: string;
        text: string;
        count_countries: number;
        count_languages: number;
        count_cities: number;
        countries: [
            {
                name: string;
                city: string;
                image_city: string,
                flag: string
            }
        ];
    }

}

export default function Continent({ continent }: ContinentProps) {

    return (

        <Flex flexDirection="column" h="100vh" w="100%" >
            <Header />

            <Flex w="auto" minH="527px" bgRepeat="no-repeat center" bgImage={`url('./images/${continent?.banner}')`} bgSize="cover" justifyContent="space-between" position="relative">

                <Text ml="140" mb="59" mt="369" fontSize="48" fontWeight="600" color="gray.600">
                    {continent?.name}
                </Text>

            </Flex>
            <Box display="flex" mt="20" mx="auto" maxW={1160} alignItems="center">
                <Text textAlign="justify" w="600px" fontSize="24" fontWeight="400">
                    {continent?.text}
                </Text>

                <HStack spacing="42" h="99" ml="70px">
                    <Box w="98px" textAlign="center">
                        <Heading fontWeight="600" fontSize="48" color="yellow.500" >{continent?.count_countries}</Heading>
                        <Text fontSize="24" color="gray.800" fontWeight="600">países</Text>
                    </Box>
                    <Box w="122px" textAlign="center">
                        <Heading fontWeight="600" fontSize="48" color="yellow.500">{continent?.count_languages}</Heading>
                        <Text fontSize="24" color="gray.800" fontWeight="600">línguas</Text>
                    </Box>
                    <Box w="165px" textAlign="center">
                        <Heading fontWeight="600" fontSize="48" color="yellow.500">{continent?.count_cities}</Heading>
                        <Text fontSize="24" color="gray.800" fontWeight="600">cidades + 100</Text>
                    </Box>

                </HStack>
            </Box>
            <Box maxW={1160} mx="auto" w="100vw" mt="20">
                <Heading fontWeight="500" fontSize="36">Cidades +100</Heading>
                <SimpleGrid minChildWidth="256px" spacing='45px' mt="10" mb="5">
                    {

                        continent?.countries.map(country => (
                            <>
                                < Box h="279px" w="256px" borderRadius="4px" backgroundColor="#FFF" flexDirection="column" borderColor="yellow.500" borderWidth="1px" >
                                    <Image src={`./images/${country.image_city}`} alt="image-city" h="173px" />

                                    <Box display="flex" justifyContent="space-between" alignItems="center" p="4">
                                        <Box>
                                            <Text fontWeight="600" fontSize="20" color="gray.800" fontFamily="Barlow" >{country.city}</Text>
                                            <Text fontWeight="500" fontSize="16" color="gray.900" pt="3">{country.name}</Text>
                                        </Box>

                                        <Image borderRadius='full' boxSize='30px' src={`./images/${country.flag}`} alt="flag" />


                                    </Box>


                                </Box>
                            </>



                        ))}


                </SimpleGrid>
            </Box >


        </Flex >
    )
}

export const getStaticPaths = async () => {

    return {
        paths: [{ params: { slug: 'europe' } }, { params: { slug: 'south-america' } }],
        fallback: true
    }
}

export const getStaticProps = async ({ params }) => {
    const response = await fetch('http://localhost:4000/continents').then((res) => {
        return res.json()
    })

    const continent = response.find(continent => continent.slug == params.slug)


    return {
        props: {
            continent
        }
    }
}