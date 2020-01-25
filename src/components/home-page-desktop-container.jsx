import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
    Button,
    Menu,
    Responsive,
    Segment,
    Visibility,
    Grid
} from 'semantic-ui-react';
import styled from "styled-components";
import { HomePageHeading, CityDropdown, TextLogo, Footer } from "../components";
import DesktopBackgroundImg from "../static/img/desktop_bg.jpg";
import { getWidth } from "../utils/style-utils";

const StyledGridRow = styled(Grid.Row)`
    &&&&{
        padding: 2px;
    }
`;

const StyledMenu = styled(Menu)`
    &.inverted.ui.menu {
        background: #7b7b7b;
     
        .item{
            font-weight: bolder;
            color: white;
        }
    }
    &.inverted.ui.menu.secondary {
        background: transparent;
    }
`;

class DesktopContainer extends Component {
    state = {}

    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })

    render() {
        const { children } = this.props
        const { fixed } = this.state

        return (
            <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
                <Visibility
                    once={false}
                    onBottomPassed={this.showFixedMenu}
                    onBottomPassedReverse={this.hideFixedMenu}
                >
                    <Segment
                        textAlign='center'
                        style={{
                            minHeight: 550,
                            padding: '1em 0em',
                            backgroundImage: `url(${DesktopBackgroundImg})`,
                            backgroundSize: "cover",
                            boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.5)"
                        }}
                        vertical
                    >
                        <StyledMenu
                            fixed={fixed ? 'top' : null}
                            inverted
                            secondary={!fixed}
                            size='large'
                            style={{ padding: "1em 8em" }}
                        >
                            <Grid>
                                <StyledGridRow>
                                    <Grid.Column width={16}>
                                        <Grid>
                                            <Grid.Column width={6} textAlign="left" verticalAlign="middle">
                                                <TextLogo />
                                                <CityDropdown compact style={{
                                                    color: "#f7f7f7",
                                                    fontWeight: "bolder",
                                                    margin: "0 10px",
                                                    border: "1px solid white",
                                                    padding: "5px"
                                                }} />
                                            </Grid.Column>
                                            <Grid.Column width={10} textAlign="right">
                                                <Button inverted>
                                                    Log In/Sign Up
                                                </Button>
                                            </Grid.Column>
                                        </Grid>
                                    </Grid.Column>
                                </StyledGridRow>
                                <StyledGridRow>
                                    <Menu.Item as='a' active>
                                        Home
                                    </Menu.Item>
                                    <Menu.Item as='a'>Vendors</Menu.Item>
                                    <Menu.Item as='a'>Wedding Stories</Menu.Item>
                                    <Menu.Item as='a'>Photos</Menu.Item>
                                    <Menu.Item as='a'>Offers/Deals</Menu.Item>
                                    <Menu.Item as='a'>List Your Business</Menu.Item>
                                </StyledGridRow>
                            </Grid>
                        </StyledMenu>
                        <HomePageHeading />
                    </Segment>
                </Visibility>
                <Segment vertical style={{ padding: "5rem 10rem" }}>
                    {children}
                </Segment>
                <Footer />
            </Responsive>
        )
    }
}

DesktopContainer.propTypes = {
    children: PropTypes.node,
}

export default DesktopContainer;