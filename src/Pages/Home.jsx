import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CityCard from '../Components/CityCard';
import citiesData from '../data/cities.json';
import { getCities } from '../Redux/cities/citiesSlice';

export default function Home() {
  const cities = useSelector((state) => state.cities.cities);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cities.lenght !== 0) dispatch(getCities(citiesData));
  }, []);

  return (
    <div className="grid grid-cols-2">
      {cities.length > 0 ? cities.map((city) => <CityCard city={city} key={city.Name} />) : ''}
    </div>
  );
}
