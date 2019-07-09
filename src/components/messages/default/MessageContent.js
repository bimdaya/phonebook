import React from 'react';
import PropTypes from 'prop-types';
import {Message} from 'semantic-ui-react';

const MessageContent = ({messageBody, messageHeader}) => {
	return (
		<Message.Content>
			{
				messageHeader &&
					<Message.Header>
						{messageHeader}
					</Message.Header>
			}
			<p>
				{messageBody}
			</p>
		</Message.Content>
	);
}

MessageContent.defaultProps = {
	messageBody: 'You have one message here...'
}

MessageContent.propTypes = {
	messageHeader: PropTypes.string,
	messageBody: PropTypes.string.isRequired
}

export default MessageContent;
