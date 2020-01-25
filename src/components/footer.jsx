import React from "react";
import {
    Container,
    Grid,
    Header,
    List,
    Segment,
    Icon
} from 'semantic-ui-react';
import { TextLogo } from "./index";

const Footer = () => (
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
        <Container>
            <Grid divided inverted stackable>
                <Grid.Row>
                    <Grid.Column width={3}>
                        <Header inverted as='h4' content='About' />
                        <List link inverted>
                            <List.Item as='a'>About Us</List.Item>
                            <List.Item as='a'>List Your Business</List.Item>
                            <List.Item as='a'>Photos</List.Item>
                            <List.Item as='a'>Why DreamReality?</List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Header inverted as='h4' content='Contact Us' />
                        <p>
                            <Icon name="phone" /> 9090909009
                        </p>
                        <p>
                            <Icon name="mail" /> akshay.shekokar@gmail.com
                        </p>
                    </Grid.Column>
                    <Grid.Column width={8} textAlign="right">
                        <TextLogo />
                        <br />
                        <br />
                        Follow us on
                        <br/>
                        <Icon name="facebook" />
                        <Icon name="twitter" />
                        <Icon name="youtube" />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    </Segment >
);

export default Footer;