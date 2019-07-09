import React, {Component} from 'react';
import {
	Grid,
	Icon,
	List
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

import Image from '../../image/Image';
import './ContactList.css';
import { getDisplayName } from '../../../utils/validate';

const ContactList = ({contacts, onContactSelect}) => {

	const onItemClick = (contact) => {
		onContactSelect(contact);
	}

	const contactList = contacts.map(contact => {
		const fullName = getDisplayName(contact.first_name, contact.last_name);

		return (
            <List.Item
				className='list_item'
				key={contact.contact_id}
				onClick={e => onItemClick(contact)}>
				<Image
                    iconSize='big'
                    imageSize='mini'
                    imageSrc={contact.avatar} />
                <List.Content verticalAlign='middle'>
    				<List.Header className='contact_list_header'>
						{ fullName }
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
