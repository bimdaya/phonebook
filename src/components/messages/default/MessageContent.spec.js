import React from 'react';
import {render} from '@testing-library/react';
import MessageContent from './MessageContent';

describe('MessageContent', () => {
  const props = {
    messageBody: 'test message',
    messageHeader: 'test header'
  };

  it('should render the content', () => {
    const {container} = render(<MessageContent {...props}/>);

    expect(container.querySelector('.content')).not.toBeNull();
  });

  it('should render header with the props', () => {
    const {container} = render(<MessageContent {...props}/>);

    expect(container.querySelector('.header').innerHTML).toBe('test header');
  });

  it('should render body with the props', () => {
    const {container} = render(<MessageContent {...props}/>);

    expect(container.querySelector('p').innerHTML).toBe('test message');
  });

})
