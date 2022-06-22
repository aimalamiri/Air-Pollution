import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Home from '../Pages/Home';
import store from '../Redux/store';
import axios from '../services/axios';

jest.mock('../services/axios');

describe('Render Home Page', () => {
  beforeEach(async () => {
    const cities = [
      {
        Name: 'Tianjin',
        Country: 'China',
        Population: 14011828,
      },
      {
        Name: 'Kabul',
        Country: 'Afghanistan',
        Population: 4457882,
      },
    ];

    await axios.get.mockResolvedValue(cities);
  });

  it('Renders properly', async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(screen.getAllByText('Kabul').length).toBeGreaterThan(0);
    });
  });
});
