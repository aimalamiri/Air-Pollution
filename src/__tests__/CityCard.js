import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import CityCard from '../Components/CityCard';

it('Renders the CityCard component', () => {
  const city = {
    Name: 'Kabul',
    Population: 7000000,
  };
  const tree = renderer
    .create(
      <MemoryRouter>
        <CityCard city={city} />
      </MemoryRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
