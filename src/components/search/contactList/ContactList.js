import React, {Component} from 'react';
import {
	Grid,
	Icon,
	Image,
	List
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './ContactList.css';

const ContactList = ({contacts, onContactSelect}) => {

	const onItemClick = (contact) => {
		onContactSelect(contact);
	}

	const contactList = contacts.map(contact => {
		return (
            <List.Item
				className='list_item'
				key={contact.contact_id}
				onClick={e => onItemClick(contact)}>
				{
					contact.avatar ?
					<Image
	                    avatar
	                    circular
	                    size='mini'
	                    src={contact.avatar}/> :
					<Icon
						size='big'
						name='user circle'/>
				}
                <List.Content verticalAlign='middle'>
    				<List.Header className='contact_list_header'>
						{
                            (contact.first_name) ?
                                `${contact.first_name} ${contact.last_name}` :
                                (contact.last_name) ?
                                    `${contact.last_name}` :
                                    'Anonymous'
                        }
                    </List.Header>
    			</List.Content>
		    </List.Item>
		)
	});

	return (
		<List
			className='contact_list'
			size='big'>
			{contactList}
		</List>
    )
};

ContactList.propTypes = {
	onContactSelect: PropTypes.func,
	contacts: PropTypes.array.isRequired
}

export default ContactList;
