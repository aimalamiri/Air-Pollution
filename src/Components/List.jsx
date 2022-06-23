import PropTypes from 'prop-types';

const List = ({ name, value }) => (
  <div className="flex justify-between items-center px-4 py-8 bg-gradient-to-bl from-blue-300 to-blue-700 text-white text-xl">
    <span>{name}</span>
    <span className="font-bold">{value}</span>
  </div>
);

List.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default List;
