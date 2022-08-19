import React from "react";
import { Header,Button,Text } from "grommet";
import { LinkPrevious } from 'grommet-icons';


export default function RHeader(props) {

    return (
        <Header align="center" direction="row" flex={false} justify="center" gap="xlarge" margin={{"top":"large"}}>
            <Button icon={<LinkPrevious />} />
            <Text weight="normal" textAlign="center" size="xxlarge" margin={{"right":"xlarge"}}>
                {props.title}
            </Text>
        </Header>
    );
}