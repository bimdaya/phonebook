import React from 'react';
import {
	Grid,
	Icon,
	Message
} from 'semantic-ui-react';

import MessageContent from '../default/MessageContent';

const InfoMessage = ({ messageBody, messageHeader }) => {
	return (
		<Message info >
			<MessageContent
				messageBody={messageBody}
				messageHeader={messageHeader} />
		</Message>
	);
}

export default InfoMessage;
