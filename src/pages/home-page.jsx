import PropTypes from 'prop-types';
import React from 'react';
import {
  Grid,
  Header,
  Image,
  Icon,
} from 'semantic-ui-react';
import { HomePageDesktopContainer, HomePageMobileContainer } from "../components";
import VendorImg from "../static/img/vendors/vendor.jpg";
import OfferImg from "../static/img/offers/offer.jpg";
import StoryImg from "../static/img/stories/story.jpg";
import PhotoImg from "../static/img/memories/photo.jpg";

// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.

const ResponsiveContainer = ({ children }) => (
  <div>
    <HomePageDesktopContainer>{children}</HomePageDesktopContainer>
    <HomePageMobileContainer>{children}</HomePageMobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Grid verticalAlign='middle' textAlign="center">
      <Grid.Row>
        <Grid.Column>
          <Header as='h3' style={{ color: "#777" }}>
            Contact Us for Easy Booking and Best Price
          </Header>
          <p style={{ color: "red" }}>
            <Icon name="phone" /> 9090909009 | <Icon name="mail" /> akshay.shekokar@gmail.com
          </p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Header as='h3' style={{ color: "#777" }}>
            Check Out Our Vendors
            </Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Image.Group size='small'>
            <Image src={VendorImg} label="ABC" as="a" href="#" />
            <Image src={VendorImg} label="ABC" as="a" href="#" />
            <Image src={VendorImg} label="ABC" as="a" href="#" />
            <Image src={VendorImg} label="ABC" as="a" href="#" />
          </Image.Group>
          <p style={{ color: "red" }}>
            View All <Icon name="arrow right" />
          </p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Header as='h3' style={{ color: "#777" }}>
            Our Wedding Stories....
            </Header>
          <p>
            Some Story Some Story Some Story Some Story Some Story Some Story Some Story Some Story Some Story Some Story Some Story Some Story Some Story Some Story Some Story Some Story Some Story Some Story Some Story Some Story Some Story Some Story Some Story Some Story Some Story Some Story Some Story Some Story Some Story Some Story Some Story Some Story Some Story Some Story Some Story Some Story Some Story Some Story Some Story Some Story Some Story Some Story Some Story Some Story Some Story Some Story Some Story
              <a href="#">Read More...</a>
          </p>
          <Header as='h3' style={{ color: "#777" }}>
            More Stories....
            </Header>
          <Image.Group size='small' circular>
            <Image src={StoryImg} label="ABC" as="a" href="#" />
            <Image src={StoryImg} label="ABC" as="a" href="#" />
            <Image src={StoryImg} label="ABC" as="a" href="#" />
            <Image src={StoryImg} label="ABC" as="a" href="#" />
          </Image.Group>
          <p style={{ color: "red" }}>
            View All <Icon name="arrow right" />
          </p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Header as='h3' style={{ color: "#777" }}>
            Best Offers and Deals
            </Header>
          <Image.Group size='medium' circular>
            <Image src={OfferImg} label="ABC" as="a" href="#" />
            <Image src={OfferImg} label="ABC" as="a" href="#" />
            <Image src={OfferImg} label="ABC" as="a" href="#" />
          </Image.Group>
          <p style={{ color: "red" }}>
            View All <Icon name="arrow right" />
          </p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Header as='h3' style={{ color: "#777" }}>
            Your Pics... Your Memories...
            </Header>
          <Image.Group size='medium' circular>
            <Image src={PhotoImg} label="Mehandi" as="a" href="#" />
            <Image src={PhotoImg} label="Wedding" as="a" href="#" />
            <Image src={PhotoImg} label="Prewedding" as="a" href="#" />
          </Image.Group>
          <p style={{ color: "red" }}>
            View All <Icon name="arrow right" />
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </ResponsiveContainer>
)

export default HomepageLayout