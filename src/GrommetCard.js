import React from "react";
import styled from "styled-components";
import { Box, Button,Avatar,Paragraph,Grid,CardBody,Card,Text,CardFooter,CardHeader,DataChart,Nav,DropButton,Header,Page,PageContent,Main } from "grommet";
import { LinkPrevious,Down } from 'grommet-icons';
import { Grommet,Box, Button,
  Avatar,Paragraph,
  Grid,CardBody,Card,
  Text,CardFooter,
  CardHeader,DataChart,
  Nav,DropButton,Header,
  PageContent,Main } from "grommet";
import { LinkPrevious,Down } from 'grommet-icons';
import { hpe as theme } from 'grommet-theme-hpe'

export default function GrommetCard() {

  return (
    <>  <Page background={{"dark":false,"color":"background-contrast"}}>
    <PageContent>
      <Main fill="vertical" flex="grow" overflow="auto" background={{"color":"background"}}>
        <Header align="center" direction="row" flex={false} justify="center" gap="medium" margin={{"top":"large"}}>
          <Button icon={<LinkPrevious />} />
          <Text weight="normal" textAlign="center" size="xxlarge" margin={{"right":"xlarge"}}>
            Trees Planted
          </Text>
        </Header>
        <Nav align="center" flex={false} direction="row" justify="between" pad={{"left":"large","right":"large","top":"medium"}}>
          <Button label="Jan" plain />
          <Button label="Feb" plain />
          <Button label="March" plain />
          <Button label="April" plain />
          <Button label="May" plain />
          <Button label="June" plain />
        </Nav>
      </Main>
      <Card justify="between" direction="row" height="xsmall" pad={{"right":"xlarge","left":"xlarge","top":"xsmall"}} gap="none" align="end" margin="small">
        <Box align="center" justify="center">
          <Text size="5xl">
            0
          </Text>
          <Text>
            Trees
Planted
          </Text>
        </Box>
        <Box align="center" justify="center">
          <Text size="5xl">
            0
          </Text>
          <Text>
            Projects
supported
          </Text>
        </Box>
        <Box align="center" justify="center">
          <Text size="5xl">
            0
          </Text>
          <Text>
            CO2e
restored
          </Text>
        </Box>
      </Card>
      <Card margin="small">
        <CardHeader align="center" direction="row" flex={false} justify="between" gap="medium" pad="small">
          <Text textAlign="start" color="active-text" size="xxlarge" weight="normal" margin={{"left":"small"}}>
            Trees Planted
          </Text>
          <DropButton label="Yearly" dropAlign={{"top":"bottom"}} open  dropContent={(
            <Box align="center" justify="center" pad="medium" >
              <Button label="2022" plain />
            </Box>
          )}
           icon={<Down />} reverse primary={false} secondary={false} plain />
        </CardHeader>
        <CardBody pad="small" justify="center" direction="column" align="center" flex="grow" fill="horizontal" wrap={false} margin="medium">
          <DataChart data={[{"trees":5},{"trees":20},{"trees":15},{"trees":25},{"trees":5},{"trees":20}]} series={[{"property":"trees","label":"Jan"}]} size={{"height":"small","width":"medium"}} chart={[{"type":"bar","color":"green","thickness":"small","property":"trees","dash":false,"round":true,"opacity":"strong"}]} bounds={{"y":[0,50]}} detail={false} offset legend={false} />
        </CardBody>
      </Card>
      <Card margin="small">
        <CardHeader align="center" direction="row" flex={false} justify="between" gap="medium" pad="small">
          <Text color="border" weight="bold" size="small">
            TYPES OF TREES
          </Text>
        </CardHeader>
        <CardBody pad="small">
          <Card width="xsmall" height="xsmall" border={{"style":"dashed","side":"all","size":"small"}}>
            <CardBody pad="small">
              <Avatar align="center" flex={false} justify="center" overflow="hidden" round="full" src="https://www.svgrepo.com/svg/27743/tree" />
            </CardBody>
            <CardFooter align="center" direction="row" justify="between" gap="medium" pad="small" margin={{"top":"medium"}} flex="grow">
              <Text size="small" textAlign="center" weight="normal">
                Add Tree
              </Text>
            </CardFooter>
          </Card>
        </CardBody>
      </Card>
      <Card margin="small">
        <CardBody pad="xsmall" margin="none">
          <Grid columns={["xsmall","medium","xsmall"]} fill="horizontal" width="100%" pad="small">
            <Avatar align="center" flex={false} justify="center" overflow="hidden" round="full" />
            <Paragraph size="medium">
              85%  of the Reewild users opted for Protect  earth project in 12 months
            </Paragraph>
            <Avatar align="center" flex={false} justify="center" overflow="hidden" round="full" />
          </Grid>
        </CardBody>
      </Card>
      <Card margin={{"horizontal":"large","bottom":"large"}} height="100%">
        <Button label="Plant Trees" primary plain={false} />
      </Card>
    </PageContent>
  </Page></>
  );
}