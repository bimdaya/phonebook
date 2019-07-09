import React from 'react';
import {Grid, Icon, Message} from 'semantic-ui-react';
import MessageContent from '../default/MessageContent';

const LoadingMessage = ({messageBody, messageHeader}) => {
	return (
		<Message
			color='teal'
			icon={true}>
			<Icon
				loading={true}
				name='circle notched'/>
			<MessageContent
				messageBody={messageBody}
				messageHeader={messageHeader}/>
		</Message>
	);
}

export default LoadingMessage;
