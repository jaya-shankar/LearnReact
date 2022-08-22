import React from "react";
import { DataChart,Text,
        Box,DropButton 
      } from "grommet";

import { Down } from 'grommet-icons';

export default function OffsetChart(props) {
    // later on can use API calls instead of static data
    // API call to get current month number
    // const data = [{ date: '01', amount: 2 }, { date: '02', amount: 47 }, { date: '03', amount: 33 }, { date: '04', amount: 23 }, { date: '05', amount: 27 },{ date: '06', amount: 44 },{ date: '07', amount: 54 }];
    const chartProp = [{"type":"bar","color":props.color,"opacity":"strong","thickness":"medium","property":"amount","dash":false}];
  
    return (
      <Box align="start" justify="start" margin={{"horizontal":"small","vertical":"small"}} elevation="large"  round="small"  fill="horizontal">
        <Box align="center" justify="between" direction="row" gap="small" overflow="auto" margin={{"horizontal":"small"}} pad="small" fill="horizontal">
            <Text weight="normal" size="xxlarge" textAlign="start" margin={{"left":"small"}}>
                Trees Planted
            </Text>
            <Box align="center" justify="center" pad="xsmall">
              <DropButton label="Yearly" dropAlign={{"top":"bottom"}} open icon={<Down />} primary={false} plain={false} reverse />
            </Box>
        </Box>
        <Box align="center" justify="center" margin={{"horizontal":"medium"}}>
          <DataChart axis data={props.data} series={[{"property":"amount","label":"Trees","suffix":"🌳"}]} chart={chartProp} size={{"width":"large"}} pad={{"horizontal":"medium"}} gap="xsmall" detail />
        </Box>
      </Box>
    );
}