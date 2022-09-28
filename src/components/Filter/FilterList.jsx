import s from '../Filter/Filter.module.css';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/contact-Slice';
import { selectContact } from 'redux/contacts/selector-contacts';
import Loader from 'components/Loader';

const FilterList = () => {
  const contacts = useSelector(selectContact);
  const filter = useSelector(state => state.contacts.filter);
  const isLoading = useSelector(state => state.contacts.isLoading);
  const dispatch = useDispatch();

  const handleFilterValue = ev => {
    dispatch(setFilter(ev.target.value.trim()));
  };

  if (contacts.length === 0) {
    return;
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
