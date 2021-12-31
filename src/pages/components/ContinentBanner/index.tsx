import { Flex, Heading, Image } from "@chakra-ui/react";

export function ContinentBanner() {
    return (
        <Flex w="100%"
         h={["150px", "300px", "500px"]} 
         px={["0","0", "36"]} 
         pt={["0", "0", "72"]} 
         bgImage="url('/europe.png')"
         bgPosition="center"
         bgRepeat="no-repeat"
         bgSize="cover"
         align="center"
         justify={["center", "center", "flex-start"]}
         >
             <Heading
              textAlign={["center", "left"]}
              fontSize={["1.75", "5xl"]}
              color="light.ht"
              fontWeight="500"
             >Europa</Heading>
        </Flex>     
    )
}