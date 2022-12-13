import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "swiper/css/navigation";


import { Navigation } from "swiper";

export function SlideContinent() {

  return (
    <Flex maxW={1240} mx="auto" mt="13">

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper" >
        <SwiperSlide>
          {/* <Link href="/europe"> */}
          <Box
            w="100%"
            h="100%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            bgImage="url('./images/europe.svg')"
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPosition="center">

            <Link href="/europe" style={{ textDecoration: 'none' }}>
              <Text fontWeight="700" fontSize="48" color="gray.600">Europa</Text>
              <Text fontWeight="700" fontSize="24" color="gray.700">O continente mais antigo</Text>

            </Link>


          </Box>
          {/* </Link> */}

        </SwiperSlide>
        <SwiperSlide>
          <Box
            w="100%"
            h="100%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            bgImage="url('./images/south-america.svg')"
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPosition="center">

            <Link href="/south-america" style={{ textDecoration: 'none' }}>
              <Text fontWeight="700" fontSize="48" color="gray.600">América do Sul</Text>
              <Text fontWeight="700" fontSize="24" color="gray.700">O continente mais florido</Text>
            </Link>

          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            w="100%"
            h="100%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            bgImage="url('./images/asia.svg')"
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPosition="center">

            <Text fontWeight="700" fontSize="48" color="gray.600">Ásia</Text>
            <Text fontWeight="700" fontSize="24" color="gray.700">Um continente de contrastes</Text>


          </Box>
        </SwiperSlide>
      </Swiper>



    </Flex>



  )

}