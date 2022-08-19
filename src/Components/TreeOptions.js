import React from "react";
import { Grid,Text,Box } from "grommet";
import TreeCard from "./TreeCard";

export default function TreeOptions(props) {
    
    return (
        <>
            <Box align="start" justify="start" fill="horizontal" direction="row" pad={{"horizontal":"medium"}}>
            <Text weight="bold" textAlign="start" size="small">
                TYPES OF TREES
            </Text>
            </Box>
            <Box align="begin" justify="begin" direction="row" fill={false}>
                <TreeCard name="Add Oak" imageSrc= "https://photos.smugmug.com/Pinnacles-May-2019/n-8KLNDR/i-bxkrqwL/0/1c7fa7f2/M/i-bxkrqwL-M.jpg"/>
                <TreeCard name="Add Oak" imageSrc= "https://photos.smugmug.com/Pinnacles-May-2019/n-8KLNDR/i-bxkrqwL/0/1c7fa7f2/M/i-bxkrqwL-M.jpg"/>
                <TreeCard name="Add Oak" imageSrc= "https://photos.smugmug.com/Pinnacles-May-2019/n-8KLNDR/i-bxkrqwL/0/1c7fa7f2/M/i-bxkrqwL-M.jpg"/>
                <TreeCard name="Add Oak" imageSrc= "https://photos.smugmug.com/Pinnacles-May-2019/n-8KLNDR/i-bxkrqwL/0/1c7fa7f2/M/i-bxkrqwL-M.jpg"/>
                <TreeCard name="Add Oak" imageSrc= "https://photos.smugmug.com/Pinnacles-May-2019/n-8KLNDR/i-bxkrqwL/0/1c7fa7f2/M/i-bxkrqwL-M.jpg"/>
            </Box>
        </>
    
    );
}