import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CityCard = (props) => {
  const { city } = props;

  const numberShortener = (number) => `${(number / 1000000).toFixed(1)}M`;

  return (
    <Link className="city-card" to={`/${city.Name}`}>
      <div className="p-2 shadow bg-gradient-to-tl from-blue-700 to-blue-300 min-h-full">
        <div className="flex justify-center">
          <img
            src={`https://countryflagsapi.com/svg/${city.Country}`}
            className="h-16 opacity-20"
            alt={`${city.Country} flag`}
          />
        </div>
        <div className="text-right mt-5 font-bold text-sm text-white font-puritan">
          <h3 className="uppercase">{city.Name}</h3>
          <div className="">
            <h5>{`${numberShortener(city.Population)} Population`}</h5>
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
