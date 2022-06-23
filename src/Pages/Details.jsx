import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import List from '../Components/List';
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
          <div className="flex justify-between items-center px-4 py-10 bg-gradient-to-br from-pink-700 to-pink-300  text-white font-lato">
            <div className="w-1/2 text-center">
              <h1 className="text-2xl">{city.name}</h1>
              <span className="text-4xl font-bold">
                {`${Math.round(city.main.temp - 273.15)}°C`}
              </span>
            </div>
            <div className="w-1/2 text-center">
              <img
                src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@4x.png`}
                alt="Icon"
              />
            </div>
          </div>
          <List name="Feels like" value={`${Math.round(city.main.feels_like - 273.15)}°C`} />
          <List name="Humidity" value={`${Math.round(city.main.humidity)}%`} />
          <List name="Wind" value={`${Math.round(city.wind.speed)} km/h`} />
          <List name="Pressure" value={`${Math.round(city.main.pressure)} mb`} />
          <List
            name="Sunrise"
            value={new Date(city.sys.sunrise * 1000).toLocaleString('en-US', {
              hour: 'numeric',
              minute: '2-digit',
            })}
          />
          <List
            name="Sunset"
            value={new Date(city.sys.sunset * 1000).toLocaleString('en-US', {
              hour: 'numeric',
              minute: '2-digit',
            })}
          />
        </div>
      ) : null}
    </div>
  );
}
