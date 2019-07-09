import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import CloseButton from './CloseButton';

describe('CloseButton', () => {
  const props = {
    closeProfile: jest.fn()
  }

  it('should render close button', () => {
    const {container} = render(<CloseButton {...props}/>);

    expect(container.querySelector('.close_button')).not.toBeNull();
  });

  it('should render close button with "X"', () => {
    const {container} = render(<CloseButton {...props}/>);

    expect(container.querySelector('button').innerHTML).toBe('X');
  });

  it("calls the closeProfile function when the button is clicked", () => {
    const {container} = render(<CloseButton {...props}/>);

    fireEvent.click(container.querySelector('button'));
    expect(props.closeProfile).toHaveBeenCalled();
  });

})
