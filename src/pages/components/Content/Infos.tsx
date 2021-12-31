import { Flex, Heading, Icon, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Text } from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";

export function Infos() {
    return  (
        <Flex
         align="center"
         justify="space-between"
        >
            <Flex
             direction="column"
             justify="center"
             align={["flex-start", "flex-start", "center"]}
            >
                <Heading
                 fontSize={["2xl", "5xl"]}
                 color="yellow.400"
                 fontWeight="500"
                >50</Heading>
                <Text fontWeight="500" fontSize={["md", "xl"]} color="dark.ht">países</Text>
            </Flex>
            <Flex
             direction="column"
             justify="center"
             align={["flex-start", "flex-start", "center"]}
            >
                <Heading
                 fontSize={["2xl", "5xl"]}
                 color="yellow.400"
                 fontWeight="500"
                >60</Heading>
                <Text fontWeight="500" fontSize={["md", "xl"]} color="dark.ht">línguas</Text>
            </Flex>
            <Flex
             direction="column"
             justify="center"
             align={["flex-start", "flex-start", "center"]}
            >
                <Heading
                 fontSize={["2xl", "5xl"]}
                 color="yellow.400"
                 fontWeight="500"
                >27</Heading>
                <Text fontWeight="500" fontSize={["md", "xl"]} color="dark.ht">cidades +100
                 <Popover>
                     <PopoverTrigger>
                        <span>
                            <Icon cursor="pointer" as={RiInformationLine} ml="1" color="dark.info50" w={["10px", "16px"]} h={["10px", "16px"]} />
                        </span>
                     </PopoverTrigger>
                     <PopoverContent bg="dark.ht" color="highlight.100">
                         <PopoverArrow bg="darkblue.ht" />
                         <PopoverCloseButton />
                         <PopoverBody fontWeight="400" fontSize="lg">
                            Paris, Europa, Chile, Canadá, China   
                         </PopoverBody>
                     </PopoverContent>
                 </Popover>
                </Text>
            </Flex>
        </Flex>
    )
}