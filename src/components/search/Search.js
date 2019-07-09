import React, {useState} from 'react';
import {Grid} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import ClearButton from './clearButton/ClearButton';
import SearchBar from './searchBar/SearchBar';
import ContactList from './contactList/ContactList';
import InfoMessage from '../messages/info/InfoMessage';
import {
    NO_CONTACTS_INFO_MESSAGE_BODY,
    NO_CONTACTS_INFO_MESSAGE_HEADER
} from '../../constants/messages';
import {searchQuery} from '../../utils/regex';

const Search = ({contacts, viewSelectedContact}) => {

	const [filteredConatcts, setFilteredConatcts] = useState(contacts);
	const [clearButtonState, setClearButtonState] = useState(true);
	const [searchValue, setSearchValue] = useState('');

	const onQueryChange = (query) => {
		const filters = ['first_name', 'last_name'];

		if (query) {
			setFilteredConatcts(searchQuery(query, contacts, filters));
			setClearButtonState(false);
			setSearchValue(query);
		} else {
			onClearAll();
		}
	}

	const onContactSelect = (contact) => {
		setClearButtonState(false);
		viewSelectedContact(contact);
	}

	const onClearAll = () => {
		setFilteredConatcts(contacts);
		setClearButtonState(true);
		setSearchValue('');
		viewSelectedContact(null);
	}

	if (contacts.length === 0) {
		return (
            <Grid.Column width={4}>
                <InfoMessage
                    messageBody={NO_CONTACTS_INFO_MESSAGE_BODY}
                    messageHeader={NO_CONTACTS_INFO_MESSAGE_HEADER}/>
           </Grid.Column>
       );
	}

  return (
    <Grid.Column centered={1} width={5}>
        <SearchBar
    	onQueryChange={onQueryChange}
    	searchValue={searchValue}/>
        <ContactList
    	contacts={filteredConatcts.slice(0, 5)}
    	onContactSelect={onContactSelect}/>
        <ClearButton
    	disabled={clearButtonState}
    	onClearAll={onClearAll}/>
    </Grid.Column>
  );
}

Search.propTypes = {
	viewSelectedContact: PropTypes.func,
	contacts: PropTypes.array.isRequired
}

export default Search;
