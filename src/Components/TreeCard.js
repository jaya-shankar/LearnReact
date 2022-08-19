import React from "react";
import { Text, Box, Image } from "grommet";


export default function TreeCard(props) {

    return (
        <Box align="center" justify="begin" margin="xsmall" border={{"style":"dashed","size":"xsmall","color":"active-text"}} round="xsmall" width="xsmall" height="xsmall">
            <Image src={props.imageSrc} fill />
            <Text margin={{"top":"none"}} size="xsmall">
                {props.name}
            </Text>
        </Box>
    );
}