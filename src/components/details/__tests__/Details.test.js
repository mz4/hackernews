import React from 'react';
import { render } from '@testing-library/react';
import Details from '../Details';

describe('Details component', () => {
  it('It renders Details view', () => {
    const { getByTestId, getByText } = 
    render(
      <Details 
        title = 'This is a title'
        idx = '100'
        score = '300' 
        by = 'user A'
        time = '10:15:30'
        url = 'http://www.google.com'
      />)
    expect(getByTestId("Details")).toBeInTheDocument();
    getByText('100');
    getByText('This is a title');
    getByText('300 points');
    getByText('user A');
    getByText('10:15:30');
    getByText('http://www.google.com');
  })
})