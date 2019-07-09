import React from 'react';
import {
    Button,
    Grid,
    Segment
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const ClearButton = ({onClearAll, disabled}) => {
    return (
        <Button
			basic
			color='blue'
			content='Clear'
            disabled={disabled}
			onClick={() => onClearAll()} />
    )
}

ClearButton.defaultProps = {
	disabled: true
}

ClearButton.propTypes = {
	onClearAll: PropTypes.func,
	disabled: PropTypes.bool.isRequired
}

export default ClearButton;
