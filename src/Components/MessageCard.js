import React from "react";
import { Card,CardBody,Grid,Paragraph, Avatar } from "grommet";


export default function MessageCard(props) {

    return (
        <Card margin="small" width="60%">
            <CardBody pad="xsmall" margin="none">
                <Grid columns={["xsmall","large","xsmall"]} fill="horizontal" width="100%" pad="small">
                    <Avatar align="center" flex={false} justify="center" overflow="hidden" round="full" />
                    <Paragraph size="medium">
                        {props.message}
                    </Paragraph>
                    <Avatar align="center" flex={false} justify="center" overflow="hidden" round="full" />
                </Grid>
            </CardBody>
        </Card>
    );
}