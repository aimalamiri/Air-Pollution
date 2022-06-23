import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
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
    <motion.div
      className="grid grid-cols-2"
      initial={{ width: '-100%' }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
    >
      {cities.length > 0 ? cities.map((city) => <CityCard city={city} key={city.Name} />) : ''}
    </motion.div>
  );
}
