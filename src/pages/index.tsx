import { Header } from "./components/Header"
import { Banner } from "./components/Banner"
import { Details } from "./components/Details"
import { Flex, Heading } from "@chakra-ui/react"
import { Divider } from "./components/Divider"
import { Slider } from "./components/Slider"

export default function Home() {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <Details />
      <Divider />
      <Heading color="dark.ht" fontWeight="500" mb={["5", "14"]} fontSize={["lg", "3xl", "4xl"]} align="center">
        Vamos nessa? <br />Então escolha seu continente
      </Heading>
      <Slider />
    </Flex>
  )
}
