import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import citiesData from '../data/cities.json';
import { getCities } from '../Redux/cities/citiesSlice';

export default function Home() {
  const cities = useSelector((state) => state.cities.cities);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCities(citiesData));
  }, []);

  return (
    <div className="">
      {' '}
      {Object.keys(cities).length > 0 ? (
        <div className="grid grid-cols-2">
          <div className="flex justify-between items-center p-2 shadow col-span-2 bg-gradient-to-br from-blue-300 to-blue-800">
            <img
              src={`https://countryflagsapi.com/svg/${cities[18].Country}`}
              className="w-1/2 opacity-20"
              alt={`${cities[18].Country} flag`}
            />

            <div className="font-bold text-white">
              <h3>{cities[18].Name}</h3>
              <div className="">
                <h5>{cities[18].Population.toLocaleString()}</h5>
                <span className="text-xs">people</span>
              </div>
            </div>
          </div>
          <div className="p-2 shadow bg-gradient-to-br from-blue-400 to-indigo-700">
            <div className="flex justify-center">
              <img
                src={`https://countryflagsapi.com/svg/${cities[2].Country}`}
                className="w-1/2 opacity-20"
                alt={`${cities[2].Country} flag`}
              />
            </div>
            <div className="flex flex-wrap justify-end mt-5 font-bold text-sm text-white">
              <div>
                <h3 className="uppercase">{cities[2].Name}</h3>
                <div className="">
                  <h5>{cities[2].Population.toLocaleString()}</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2 shadow bg-gradient-to-br from-blue-400 to-indigo-700">
            <img
              src={`https://countryflagsapi.com/svg/${cities[3].Country}`}
              className="w-1/2 opacity-20"
              alt={`${cities[3].Country} flag`}
            />
            <div className="font-bold">{cities[3].Name}</div>
          </div>
          <div className="p-2 shadow bg-gradient-to-br from-blue-400 to-indigo-700">
            <img
              src={`https://countryflagsapi.com/svg/${cities[14].Country}`}
              className="w-1/2 opacity-20"
              alt={`${cities[14].Country} flag`}
            />
            <div className="font-bold">{cities[14].Name}</div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
