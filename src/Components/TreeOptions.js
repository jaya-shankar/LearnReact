import React from "react";
import { Text,Box } from "grommet";
import TreeCard from "./TreeCard";

export default function TreeOptions(props) {
    
    return (
        <Box align="start" justify="start" margin={{"horizontal":"small","vertical":"small"}} elevation="large"  round="small"  fill="horizontal">
            <Box align="start" justify="start" fill="horizontal" direction="row" pad={{"horizontal":"medium"}}>
            <Text weight="bold" textAlign="start" size="small">
                TYPES OF TREES
            </Text>
            </Box>
            <Box align="start" justify="start" direction="row" fill={false}>
                <TreeCard name="Oak" imageSrc= "https://photos.smugmug.com/Pinnacles-May-2019/n-8KLNDR/i-bxkrqwL/0/1c7fa7f2/M/i-bxkrqwL-M.jpg" trees="3" treeUpdate ={e => props.treeUpdate("3")}/>
                <TreeCard name="Pine" imageSrc= "https://photos.smugmug.com/Pinnacles-May-2019/n-8KLNDR/i-bxkrqwL/0/1c7fa7f2/M/i-bxkrqwL-M.jpg" trees="3" treeUpdate ={e => props.treeUpdate("3")}/>
                <TreeCard name="Mango" imageSrc= "https://photos.smugmug.com/Pinnacles-May-2019/n-8KLNDR/i-bxkrqwL/0/1c7fa7f2/M/i-bxkrqwL-M.jpg" trees="3" treeUpdate ={e => props.treeUpdate("3")}/>
                <TreeCard name="Neem" imageSrc= "https://photos.smugmug.com/Pinnacles-May-2019/n-8KLNDR/i-bxkrqwL/0/1c7fa7f2/M/i-bxkrqwL-M.jpg" trees="3" treeUpdate ={e => props.treeUpdate("3")}/>
                <TreeCard name="Oak" imageSrc= "https://photos.smugmug.com/Pinnacles-May-2019/n-8KLNDR/i-bxkrqwL/0/1c7fa7f2/M/i-bxkrqwL-M.jpg" trees="3" treeUpdate ={e => props.treeUpdate("3")}/>
            </Box>
        </Box>
    
    );
}