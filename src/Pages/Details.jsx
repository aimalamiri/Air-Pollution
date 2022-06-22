import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCity } from '../Redux/city/citySlice';

export default function Details() {
  const city = useSelector((state) => state.city.city);
  const loading = useSelector((state) => state.city.loading);
  const dispatch = useDispatch();

  const params = useParams();

  useEffect(() => {
    dispatch(getCity(params.city));
  }, []);

  return (
    <div>
      {!loading ? (
        <div>
          <h1>{city.name}</h1>

          <span>{`Current temperature ${Math.round(city.main.temp - 273.15)}°C`}</span>
          <img src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`} alt="Icon" />
          <span>{`Humedity ${Math.round(city.main.humidity)}%`}</span>
        </div>
      ) : null}
    </div>
  );
}
