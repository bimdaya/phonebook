import React from 'react';
import PropTypes from 'prop-types';
import {Header as Heading, Grid, Icon} from 'semantic-ui-react';
import './Header.css'

const Header = ({user}) => {
  const title = `${user}'s Phone Book`;

  return (
    <Grid.Row className='grid-row-header'>
      <Heading
        as='h1'
        className='h1-header'
        inverted={true}>
        <Icon
          circular={true}
          name='call'/>
        <Heading.Content>
          {title}
        </Heading.Content>
      </Heading>
    </Grid.Row>
  )
};

Header.propTypes = {
  user: PropTypes.string.isRequired
};

export default Header;
