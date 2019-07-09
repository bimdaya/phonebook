import React from 'react';
import {List} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Content from '../content/Content';

const Phone = ({phone}) => {

  const phoneNumberList = Object.keys(phone).map(type => {
    const phoneNumber = phone[type];

    if (!phoneNumber)
      return;

    if (!type) {
      type = 'Other';
    }

    const content = `${type}: ${phoneNumber}`;
    let icon = '';

    switch (type) {
      case 'mobile':
        icon = 'mobile';
        break;
      case 'work':
        icon = 'briefcase';
        break;
      case 'home':
        icon = 'home';
        break;
      default:
        icon = 'call';
    }

    return (
      <List.Item key={type}>
        <Content content={content} icon={icon}/>
      </List.Item>
    )
  });

  return (
    <List>
      {phoneNumberList}
    </List>
  );
};

Phone.propTypes = {
  phone: PropTypes.object.isRequired
}

export default Phone;
