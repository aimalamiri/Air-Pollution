import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CityCard = (props) => {
  const { city } = props;
  return (
    <Link to={`/${city.Name}`}>
      <div className="p-2 shadow bg-gradient-to-br from-blue-400 to-indigo-700 min-h-full">
        <div className="flex justify-center">
          <img
            src={`https://countryflagsapi.com/svg/${city.Country}`}
            className="w-1/2 opacity-20"
            alt={`${city.Country} flag`}
          />
        </div>
        <div className="flex flex-wrap justify-end mt-5 font-bold text-sm text-white">
          <div>
            <h3 className="uppercase">{city.Name}</h3>
            <div className="">
              <h5>{city.Population.toLocaleString()}</h5>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

CityCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  city: PropTypes.object.isRequired,
};

export default CityCard;
