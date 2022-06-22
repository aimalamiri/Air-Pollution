import { getCities } from '../Redux/cities/citiesSlice';

describe('Test citiesSlice', () => {
  it('Test the getCities action', () => {
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

    const action = getCities(cities);

    expect(action).toEqual({
      type: 'cities/getCities',
      payload: cities,
    });
  });
});
