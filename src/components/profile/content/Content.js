import React from 'react';
import {Icon} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Content = ({content, icon}) => {
  return (
    <p>
      {icon && <Icon name={icon}/>}
      <span>
        {content}
      </span>
    </p>
  );
};

Content.propTypes = {
  content: PropTypes.string.isRequired,
  icon: PropTypes.string
}

export default Content;
