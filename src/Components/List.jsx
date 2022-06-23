import PropTypes from 'prop-types';

const List = ({ name, value }) => (
  <div className="flex justify-between items-center px-4 py-6 bg-pink-500 text-white text-xl">
    <span>{name}</span>
    <span className="font-bold">{value}</span>
  </div>
);

List.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default List;
