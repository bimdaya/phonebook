import React from 'react';
import PropTypes from 'prop-types';
import {
	Grid,
	Icon,
	Message
} from 'semantic-ui-react';

import MessageContent from '../default/MessageContent';

const ErrorMessage = ({ messageBody, messageHeader }) => {
	return (
		<Message negative>
			<MessageContent
				messageBody={messageBody}
				messageHeader={messageHeader} />
		</Message>
	);
}

ErrorMessage.propTypes = {
	messageHeader: PropTypes.string,
	messageBody: PropTypes.string.isRequired
}

export default ErrorMessage;
