import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCity } from '../Redux/city/citySlice';

export default function Details() {
  const city = useSelector((state) => state.city);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCity('Kabul'));
  }, []);

  console.log(city);

  return (
    <div>
      <h1>Details Page</h1>
      <Link to="/">Go to Home Page</Link>
    </div>
  );
}
