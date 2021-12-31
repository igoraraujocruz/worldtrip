import { Swiper, SwiperSlide } from 'swiper/react';
import { Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import SwiperCore, {
    Navigation,Pagination,Mousewheel,Keyboard
  } from 'swiper';

SwiperCore.use([Navigation,Pagination,Mousewheel,Keyboard]);

export function Slider() {
  return (
    <Flex w="100%" maxW="1240px" mx="auto" mb={["5", "10"]} h={["250px", "450px"]}>  
    <Swiper
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
          delay: 4000,
      }}
      style={{width: '100%', flex: 1}}
    >
      <SwiperSlide>
          <Flex
           w="100%"
           h="100%"
           align="center"
           justify="center"
           direction="column"
           bgImage="url(/europe.png)"
           bgRepeat="no-repeat"
           bgSize="cover"
           textAlign="center"
           bgPosition="center"
           >
               <Link href="/continent/europe">
                   <a>
                       <Heading fontSize={["3xl", "4xl", "5xl"]} color="light.ht" fontWeight="700">Europa</Heading>
                       <Text
                        fontWeight="700"
                        color="light.ht"
                        fontSize={["0.8rem", "1xl", "2xl"]}
                        mt={["2", "4"]}
                       >O continente mais antigo</Text>
                   </a>
               </Link>
          </Flex>
      </SwiperSlide>
      <SwiperSlide>
          <Flex
           w="100%"
           h="100%"
           align="center"
           justify="center"
           direction="column"
           bgImage="url(/europe.png)"
           bgRepeat="no-repeat"
           bgSize="cover"
           textAlign="center"
           bgPosition="center"
           >
               <Link href="/continent/europe">
                   <a>
                       <Heading fontSize={["3xl", "4xl", "5xl"]} color="light.ht" fontWeight="700">Europa</Heading>
                       <Text
                        fontWeight="700"
                        color="light.ht"
                        fontSize={["0.8rem", "1xl", "2xl"]}
                        mt={["2", "4"]}
                       >O continente mais antigo</Text>
                   </a>
               </Link>
          </Flex>
      </SwiperSlide>
    </Swiper>
    </Flex>
  );
};