import React from "react";
import {Box} from "grommet";


export default function OuterBox(props) {
    
    return (
        <Box align="center" justify="center" margin={{"horizontal":"small","vertical":"small"}} elevation="large"  round="small"  fill="horizontal" direction={props.direction}>
        {props.children}
        </Box>
    
    );
}