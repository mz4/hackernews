import React from 'react';
import { render } from '@testing-library/react';
import { Route, MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('Test App component', () => {
  it('It renders App and Best News', () => {
    const { container, getByTestId, queryByTestId } =
    render(
      <MemoryRouter initialEntries={['/top']}>
        <Route path="/top">
          <App />
        </Route>
      </MemoryRouter>
    );
    expect(getByTestId("App")).toBeInTheDocument();
    expect(getByTestId("top")).toBeInTheDocument();
    expect(queryByTestId("best")).not.toBeInTheDocument();
  });
});

