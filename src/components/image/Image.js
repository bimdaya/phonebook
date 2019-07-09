import React from 'react';
import {Icon, Image as Img} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './Image.css';

const Image = ({imageSrc, imageSize, iconSize}) => {
  return (
    <>
      {
        imageSrc
          ?
            <Img
              centered={true}
              circular={true}
              size={imageSize}
              src={imageSrc}/>
          :
            <Icon
              className='icon-profile'
              name='user circle'
              size={iconSize}/>
      }
    < />
  );
}

Image.defaultProps = {
	imageSize: 'medium',
	iconSize: 'massive'
}

Image.propTypes = {
	imageSrc: PropTypes.string,
	imageSize: PropTypes.string,
	iconSize: PropTypes.string
}

export default Image;
