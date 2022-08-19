import React from "react";
import { Box,Text } from "grommet";


export default function OffsetBox(props) {

    return (
        <Box align="center" justify="center" pad="small" flex="grow" fill={false} basis="xsmall">
            <Text size="3xl">
                {props.value}
            </Text>
            <Text>
                {props.label}
            </Text>
        </Box>
    );
}