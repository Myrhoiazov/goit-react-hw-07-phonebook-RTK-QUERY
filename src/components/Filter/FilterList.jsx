import { useGetAllContactsQuery } from 'redux/contacts/rtk-Query';
import s from '../Filter/Filter.module.css';
import { selectFilter } from 'redux/contacts/selector-contacts';
// import PropTypes from 'prop-types';
import Loader from 'components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/contact-Slice';

const FilterList = () => {
  const filter = useSelector(selectFilter);
  console.log(filter);
  const dispatch = useDispatch();

  const { data, isLoading } = useGetAllContactsQuery();
  console.log(data);

  const handleFilterValue = ev => {
    dispatch(setFilter(ev.target.value.trim()));
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      {isLoading && <Loader />}
      <label>
        <span className={s.label}>Find contacts by name</span>
        <input
          className={s.input}
          type="text"
          value={filter.value}
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleFilterValue}
        />
      </label>
    </div>
  );
};

// FilterList.propTypes = {
//   filter: PropTypes.string.isRequired,
//   contacts: PropTypes.array.isRequired,
//   onFindContacts: PropTypes.func.isRequired,
// };

export default FilterList;
