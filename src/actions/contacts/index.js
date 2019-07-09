import {getAllContacts} from '../../api/contacts';
import {GET_CONTACTS} from '../../constants/actions';

/**
* Action for loading contacts from api
* @return {object} An action with action type and payload
*/
const getAllContactsAction = () => {
  return(dispatch) => {
    dispatch({
			type: GET_CONTACTS,
			payload: getAllContacts()
		})
  }
}

export {
  getAllContactsAction
};
