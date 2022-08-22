import React from "react";
import {Box, Spinner, Button} from "grommet";
import { Link } from "react-router-dom";


export default function Load() {
    
    return (
        <Box align="center" justify="center" margin={{"horizontal":"small","vertical":"small"}} elevation="large"  round="small"  fill="horizontal" height="100%">
            <Spinner size="medium"/>
            
            <Box align="center" justify="center">
                <Link to="/">
                    <Button label="Back" />
                </Link>
            </Box>
        </Box>
    
    );
}