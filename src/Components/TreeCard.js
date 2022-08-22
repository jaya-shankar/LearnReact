import React from "react";
import { Text, Box, Image } from "grommet";
import { Link } from "react-router-dom";


export default function TreeCard(props) {

    return (
        <Link to="/load">
            <Box align="center" justify="start" margin="xsmall" border={{"style":"dashed","size":"xsmall","color":"active-text"}} round="xsmall" width="xsmall" height="xsmall" onClick={() => props.treeUpdate(props.trees)}>
                <Image src={props.imageSrc} fill />
                <Text margin={{"top":"none"}} size="xsmall">
                    Add {props.name}
                </Text>
            </Box>
        </Link>
        
    );
}