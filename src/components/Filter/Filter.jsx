import PropTypes from 'prop-types';

const Filter = ({ filterTitle, inputFilterValue, addCurrentValue }) => {
  return (
    <div>
      <form>
        <h4>{filterTitle}</h4>
        <input
          type="text"
          name="filter"
          value={inputFilterValue}
          onChange={addCurrentValue}
        />
      </form>
    </div>
  );
};

Filter.propTypes = {
  filterTitle: PropTypes.string,
  inputFilterValue: PropTypes.string,
  addCurrentValue: PropTypes.func,
};

export default Filter;
