import React from 'react';
import PropTypes from 'prop-types';
import {Header as Heading, Grid, Icon} from 'semantic-ui-react';
import './Header.css'

const Header = ({user}) => {
	const title = `${user}'s Phone Book`;

	return (
		<Grid.Row className='header_grid'>
			<Heading
				as='h1'
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
