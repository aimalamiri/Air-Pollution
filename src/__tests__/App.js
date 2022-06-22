import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../Redux/store';
import App from '../App';

test('renders learn react link', () => {
  const { getByText } = render(
    <MemoryRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </MemoryRouter>,
  );

  expect(getByText(/Kabul/i)).toBeInTheDocument();
});
