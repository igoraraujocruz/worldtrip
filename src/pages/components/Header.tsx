import { Flex, Grid, Icon, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { RiArrowLeftSLine } from 'react-icons/ri';

export function Header() {
    const { asPath } = useRouter()
    const notHomePage = asPath !== "/"

    return (
        <Flex as="header" w="100%" mx="auto" px="1rem" align="center" justify="center" h={["50px", "100px"]}>

            <Grid
             h="100%"
             mx="auto"
             w="100%"
             maxW="1160px"
             alignItems="center"
             templateColumns="repeat(3, 1fr)"
             justifyContent="center"
             alignSelf="start"
            >
            {notHomePage && (
                <Link href="/">
                    <a>
                        <Icon as={RiArrowLeftSLine} fontSize={[20, 40]} justifySelf="start"></Icon>
                    </a>
                </Link>
            )}

            <Image alt="logo" justifySelf="center" gridColumn="2" src="/logo.svg" w={["81px", "184px"]} />
            </Grid>
		</Flex>
    )
}