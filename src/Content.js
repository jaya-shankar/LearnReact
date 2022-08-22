import React from "react";
import { Button,Box,Nav,
    PageContent,Main } from "grommet";

import OffsetStats from "./Components/OffsetStats";
import TreeOptions from "./Components/TreeOptions";
import RHeader from "./Components/RHeader";
import OffsetChart from "./Components/OffsetChart";


export default function Content(props) {

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
            
            <OffsetStats />
            <OffsetChart type="bar" color="green" data={props.graphData} />
            <TreeOptions treeUpdate = {props.UpdateGraphData}/>

        </Box>
    </PageContent>
    );
}
