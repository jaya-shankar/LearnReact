import { Box } from "grommet";
import React from "react";
import OffsetBox from "./OffsetBox";

export default function OffsetStats(props) {

    return ( 
        <Box align="start" justify="start" margin={{"horizontal":"small","vertical":"small"}} elevation="large"  round="small"  fill="horizontal" direction="row">
            <OffsetBox label="Trees Planted" value="176" />
            <OffsetBox label="Projects Supported" value="3" />
            <OffsetBox label="CO2e" value="35.4k" />
        </Box>
        );
}