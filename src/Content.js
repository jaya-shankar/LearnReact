import React from "react";
import { Button,Box,Nav,
    PageContent,Main } from "grommet";

import OffsetStats from "./Components/OffsetStats";
import TreeOptions from "./Components/TreeOptions";
import OuterBox from "./Components/OuterBox";
import RHeader from "./Components/RHeader";
import OffsetChart from "./Components/OffsetChart";


export default function Content() {

    return (
    <PageContent align="center" justify="center">
          <Box align="center" justify="center" margin={{"horizontal":"medium"}}>
            <RHeader title="Trees Planted" />
            <Main fill="vertical" flex="grow" overflow="auto" background={{"color":"background"}}>

                <Nav align="center" flex={false} direction="row" justify="between" pad={{"left":"large","right":"large","top":"medium"}}>
                    <Button label="Jan" plain />
                    <Button label="Feb" plain />
                    <Button label="March" plain />
                    <Button label="April" plain />
                    <Button label="May" plain />
                    <Button label="June" plain />
                </Nav>
            </Main>
            <OuterBox direction="row">
                <OffsetStats />
            </OuterBox>
            <OuterBox >
                <OffsetChart type="bar" color="green" />
            </OuterBox>
            <OuterBox  >
                <TreeOptions/>
            </OuterBox>

        </Box>
    </PageContent>
    );
}
