import React, {Component} from 'react';
import {Grid, Icon, List} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Image from '../../image/Image';
import './ContactList.css';
import {getDisplayName} from '../../../utils/validate';

const ContactList = ({contacts, onContactSelect}) => {

  const onItemClick = (contact) => {
    onContactSelect(contact);
  }

  const contactList = contacts.map(contact => {
    const fullName = getDisplayName(contact.first_name, contact.last_name);

    return (
      <List.Item
        className='list-item-contact'
        key={contact.contact_id}
        onClick={e => onItemClick(contact)}>
        <Image
					iconSize='big'
					imageSize='mini'
					imageSrc={contact.avatar}/>
        <List.Content verticalAlign='middle'>
          <List.Header className='list-header-contact'>
            {fullName}
          </List.Header>
        </List.Content>
      </List.Item>
    )
  });

  return (
		<List
			className='list-contact'
			size='big'>
    	{contactList}
  	</List>
	);
};

ContactList.propTypes = {
  onContactSelect: PropTypes.func,
  contacts: PropTypes.array.isRequired
}

export default ContactList;
