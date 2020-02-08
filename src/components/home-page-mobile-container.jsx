import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
    Button,
    Container,
    Icon,
    Menu,
    Responsive,
    Segment,
    Image,
    Sidebar
} from 'semantic-ui-react';
import { HomePageHeading, TextLogo, Footer, CityDropdown } from "../components";
import { getWidth } from "../utils/style-utils";
import MobileBackgroundImg from "../static/img/mobile_bg.jpg";
import MobileSideBarImg from "../static/img/mobile-sidebar.jpg";

class MobileContainer extends Component {
    state = {}

    handleSidebarHide = () => this.setState({ sidebarOpened: false })

    handleToggle = () => this.setState({ sidebarOpened: true })

    render() {
        const { children } = this.props
        const { sidebarOpened } = this.state

        return (
            <Responsive
                as={Sidebar.Pushable}
                getWidth={getWidth}
                maxWidth={Responsive.onlyMobile.maxWidth}
            >
                <Sidebar
                    as={Menu}
                    animation='push'
                    onHide={this.handleSidebarHide}
                    vertical
                    visible={sidebarOpened}
                >
                    <Menu.Item as="div" style={{ backgroundImage: `url(${MobileSideBarImg})`, height: "150px", display: "flex", alignItems: "flex-end", color: "white" }}>
                        My Dream
                    </Menu.Item>
                    <Menu.Item as="div">
                        City: <CityDropdown />
                    </Menu.Item>
                    <Menu.Item as='a' active>Home</Menu.Item>
                    <Menu.Item as='a'>Vendors</Menu.Item>
                    <Menu.Item as='a'>Wedding Stories</Menu.Item>
                    <Menu.Item as='a'>Photos</Menu.Item>
                    <Menu.Item as='a'>Offers/Deals</Menu.Item>
                    <Menu.Item as='a' style={{color: "red"}}>List Your Business</Menu.Item>
                </Sidebar>

                <Sidebar.Pusher dimmed={sidebarOpened}>
                    <Segment
                        inverted
                        textAlign='center'
                        vertical
                        style={{
                            minHeight: "280px", padding: '1em 0em',
                            backgroundImage: `url(${MobileBackgroundImg})`,
                            backgroundSize: "cover",
                            boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.5)"
                        }}

                        vertical
                    >
                        <Container>
                            <Menu inverted pointing secondary size='large' fixed="top">
                                <Menu.Item onClick={this.handleToggle} style={{ margin: "1px" }}>
                                    <Icon name='sidebar' />
                                </Menu.Item>
                                <Menu.Item>
                                    <TextLogo />
                                </Menu.Item>
                                <Menu.Item position='right'>
                                    <Button inverted>
                                        Log In/Sign Up
                                    </Button>
                                </Menu.Item>
                            </Menu>
                        </Container>
                        <HomePageHeading mobile />
                    </Segment>
                    <Segment vertical style={{ padding: "3rem 0" }}>
                        {children}
                    </Segment>
                    <Footer />
                </Sidebar.Pusher>
            </Responsive>
        )
    }
}

MobileContainer.propTypes = {
    children: PropTypes.node,
}

export default MobileContainer;