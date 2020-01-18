import PropTypes from 'prop-types';
import React from 'react';
import styled from "styled-components";
import {
    Container,
    Header,
} from 'semantic-ui-react';
import { CityDropdown, HomePageSearch } from "../components";

const StyledContainer = styled(Container)`
    &&&&{
        width: 450px;
    }
`;

const HomePageHeading = ({ mobile }) => (
    <StyledContainer text>
        <Header
            as='h1'
            content='We bring your Dream into Reality'
            inverted
            style={{
                fontSize: mobile ? '2em' : '2.5em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: mobile ? '1.5em' : '3em',
            }}
        />
        <br />
        <CityDropdown fluid search selection />
        <br />
        <HomePageSearch fluid />
    </StyledContainer>
)

HomePageHeading.propTypes = {
    mobile: PropTypes.bool,
}

export default HomePageHeading;