import React from 'react';
import Loader from '../loader';
import { render } from '@testing-library/react';

describe('Test loader', () => {
  it('should render loader', () => {
    const { container } = 
    render(
      <Loader />
    )
    const loaderBox = container.querySelector('.loader-box');
    const loaderBoxLength = container.querySelectorAll('.loader-box');
    expect(loaderBox).toBeInTheDocument();
    expect(loaderBoxLength).toHaveLength(30)
  })
})