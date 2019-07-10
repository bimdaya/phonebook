import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Grid} from 'semantic-ui-react';
import Search from '../../components/search/search/Search';
import Profile from '../../components/profile/card/Card';
import LoadingMessage from '../../components/messages/loading/LoadingMessage';
import ErrorMessage from '../../components/messages/error/ErrorMessage';
import {
  CONTENT_FETCHING_MESSAGE_HEADER,
  CONTENT_FETCHING_MESSAGE_BODY,
  CONTENT_FETCHING_FAILED_MESSAGE_HEADER,
  CONTENT_FETCHING_FAILED_MESSAGE_BODY
} from '../../constants/messages';
import {getAllContactsAction} from '../../actions/contacts';
import './Home.css'

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedContact: null
    };
  }

  componentDidMount() {
    this.props.getAllContacts();
  }

  viewSelectedContact = (contact) => {
    this.setState({selectedContact: contact});
  }

  onClearAll = () => {
    this.setState({selectedContact: null});
  }

  closeProfile = () => {
    this.onClearAll()
  }

  render() {
    if (this.props.contacts.fetched) {
      return (
        <Grid.Row className='home' divided={true}>
          <Search
            onClearAll={this.onClearAll}
            contacts={this.props.contacts.data}
            viewSelectedContact={this.viewSelectedContact}/>
            {
              this.state.selectedContact &&
                <Profile
                  closeProfile={this.closeProfile}
                  contact={this.state.selectedContact}/>
            }
        </Grid.Row>
      );
    }

    if (this.props.contacts.failed) {
      return (
        <Grid.Column className='error' width={6}>
          <ErrorMessage
            messageBody={CONTENT_FETCHING_FAILED_MESSAGE_BODY}
            messageHeader={CONTENT_FETCHING_FAILED_MESSAGE_HEADER}/>
        </Grid.Column>
      );
    }

    return (
      <Grid.Column className='info' width={6}>
        <LoadingMessage
          messageBody={CONTENT_FETCHING_MESSAGE_BODY}
          messageHeader={CONTENT_FETCHING_MESSAGE_HEADER}/>
      </Grid.Column>
    );
  }
}

Home.propTypes = {
  contacts: PropTypes.object.isRequired,
  getAllContacts: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  const contacts = state.contacts;
  return {contacts};
};

const mapDispatchToProps = dispatch => ({
  getAllContacts: () => dispatch(getAllContactsAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
