import React from 'react';
import {
	Icon,
	Image as Img
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './Image.css'

const Image = ({imageSrc}) => {
	return (
		<>
			{
				imageSrc ?
					<Img
						centered
						circular
						size='medium'
						src={imageSrc}/> :
					<Icon
						className='profile_icon'
						name='user circle'
						size='massive'/>
			}
		</>
	);
};

Image.propTypes = {
	imageSrc: PropTypes.string
}

export default Image;
