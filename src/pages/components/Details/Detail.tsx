import { Image, Flex, Text } from "@chakra-ui/react";

import { useBreakpointValue } from "@chakra-ui/react";

interface DetailProps {
    icon: string;
    text: string;
}

export function Detail({icon, text}: DetailProps) {
    const isMobile = useBreakpointValue({
        base: false,
        sm: true,
    })

    return (
        <Flex
         direction={["row", "column"]}
         align="center"
         justify="center"
        >
         {isMobile ? <Image src={`/icons/${icon}.svg`} w="85px" h="85px" mb="6" /> : <Text color="highlight.100" fontSize="4xl" mr="2">•</Text>}
            <Text fontWeight="600" color="dark.ht" fontSize={["md", "xl", "2xl"]}>{text}</Text>
        </Flex>
    )
}