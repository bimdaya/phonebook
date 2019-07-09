import React from 'react';
import {Button} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './CloseButton.css'

const CloseButton = ({closeProfile}) => {
  return (
    <div>
      <Button
        className='btn-close'
        floated='right'
        onClick={() => closeProfile()}
        size='mini'>
        X
      </Button>
    </div>
  );
};

CloseButton.propTypes = {
  closeProfile: PropTypes.func
}

export default CloseButton;
