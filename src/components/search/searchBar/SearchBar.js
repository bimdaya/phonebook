import React, {useState} from 'react';
import {Grid, Input, Label, Segment} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './SearchBar.css';
import {validateSearchInput} from '../../../utils/validate';
import {validateInputString} from '../../../utils/regex';

const SearchBar = ({onQueryChange, searchValue}) => {

	const [inputError, setInputError] = useState(false);

	const onValueChange = (e) => {
		const query = e.target.value
			? e.target.value
			: '';

		if (validateInputString(query)) {
			setInputError(false);
		}
		onQueryChange(query);
	}

	const validateInput = (e) => {
		const keyCode = e.which || e.keyCode;
		const charCode = String.fromCharCode(keyCode);

		if (!validateSearchInput(charCode, keyCode)) {
			setInputError(true);
		}
	}

	return (
        <>
            <Segment
                color='black'
                className='search_bar'>
                <Input
                    error={inputError}
                    fluid={true}
                    focus={true}
                    icon='search'
                    inverted={true}
                    onChange={e => onValueChange(e)}
                    onKeyDown={e => validateInput(e)}
                    placeholder='Type a name...'
                    size='big'
                    value={searchValue}/>
            </Segment>
			{
				inputError &&
					<Label
					    basic={true}
					    color='red'
					    pointing={true}>
						Please enter only alphabetical letters.
					</Label>
			}
        </>
    );
}

SearchBar.defaultProps = {
	searchValue: ''
}

SearchBar.propTypes = {
	onQueryChange: PropTypes.func,
	searchValue: PropTypes.string.isRequired
}

export default SearchBar;
