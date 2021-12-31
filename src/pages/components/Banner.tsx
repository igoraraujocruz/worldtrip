import { Box, Flex, HStack, Img, Stack, Text } from "@chakra-ui/react"

export function Banner() {
    return (
        <Flex w="100%" h={["163px", "250px", "250px", "335px"]} bgImage="url('/Background.svg')" bgRepeat="no-repeat"
         bgSize="cover">
            <HStack
             justify={["center", "space-between"]}
             align="center" w="100%" mx="auto" px={["4", "10", "15", "20", "36"]}>
                 <Stack>
                    <Text fontSize={["xl", "2l", "2xl", "2xl", "4xl"]} fontWeight="500" color="light.ht">5 Continentes,<br /> infinitas possibilidades.</Text>
                    <Text color="light.info">Chegou a hora de tirar do papel a viagem que você sempre sonhou. </Text>    
                </Stack>
            </HStack>
            <Img w={["300px", "300px", "300px", "430px"]} display={["none", "none", "block"]} transform={"translateY(48px)"} ml="8" src="Airplane.svg" alt="airplane" />
        </Flex>

    )
}