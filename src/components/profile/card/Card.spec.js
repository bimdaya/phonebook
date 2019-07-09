import React from 'react';
import {render} from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  const contact = {
    "contact_id": 1,
    "first_name": "Bim",
    "last_name": "Dayananda",
    "email": "bim@gmail.com",
    "phone": [
      {
        "mobile": "123456789"
      }, {
        "work": "123456789"
      }, {
        "home": "123456789"
      }
    ],
    "address": "TLL",
    "avatar": "https://react.semantic-ui.com/images/avatar/small/rachel.png"
  };
  const closeProfile = jest.fn();
  const props = {
    contact,
    closeProfile
  }

  it('should render the card', () => {
    const {container} = render(<Card {...props}/>);

    expect(container.querySelector('.profile_card')).not.toBeNull();
  });

  it('should render the header', () => {
    const {container} = render(<Card {...props}/>);

    expect(container.querySelector('.header')).not.toBeNull();
  });

})
