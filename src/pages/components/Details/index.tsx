import { Grid, GridItem } from "@chakra-ui/react";
import {Detail} from "./Detail";

export function Details() {
    return (
        <Grid
         templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
         w="100%"
         justifyContent="space-between"
         align="center"
         mt={["18", "32"]}
         mx="auto"
         maxW="1160px"
         gap={[1, 5]}
         >
            <GridItem>
                <Detail icon="cocktail" text="vida noturna" />
            </GridItem>
            <GridItem>
                <Detail icon="surf" text="praia" />
            </GridItem>
            <GridItem>
                <Detail icon="building" text="moderno" />
            </GridItem>
            <GridItem>
                <Detail icon="museum" text="clássico" />
            </GridItem>
            <GridItem
             colSpan={[2, 2, 2, 1]}
            >
                <Detail icon="earth" text="e mais..." />
            </GridItem>
        </Grid>
    )
}