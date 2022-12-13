import { Flex, Grid, GridItem,Image,Text } from "@chakra-ui/react";


export function TravelTypes() {
    return (
        <Flex maxW={1160}  justifyContent="space-between" flexDirection="column" pt="20" mx="auto" w="100%" position="relative">
            <Grid templateColumns='repeat(5, 1fr)' gap={6} fontWeight="600" fontSize={24}  >
            <GridItem w="100%" display="flex" justifyContent="center" flexDirection="column" >
                <Image src="./images/cocktail.svg" alt="cocktail" w="85" h="85"/>
                <Text p="6"  align="center" >Vida noturna</Text>
            </GridItem>
            <GridItem w="100%" display="flex" justifyContent="center" flexDirection="column">
                <Image src="./images/surf.svg" alt="surf" w="85" h="85" />
                <Text p="6" align="center">Praia</Text>
            </GridItem>
            <GridItem w="100%" display="flex" justifyContent="center" flexDirection="column">
                <Image src="./images/building.svg" alt="building" w="85" h="85" />
                <Text p="6" align="center">Moderno</Text>
            </GridItem>
            <GridItem w="100%" display="flex" justifyContent="center" flexDirection="column">
                <Image src="./images/museum.svg" alt="museum"  w="85" h="85"/>
                <Text p="6" align="center">Clássico</Text>
            </GridItem> 
            <GridItem w="100%" display="flex" justifyContent="center" flexDirection="column">
                <Image src="./images/earth.svg" alt="earth"  w="85" h="85"/>
                <Text p="6" align="center">e mais...</Text>
            </GridItem>
            </Grid>
        </Flex>
       
    )

}