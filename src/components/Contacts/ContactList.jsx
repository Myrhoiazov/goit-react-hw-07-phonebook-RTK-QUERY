// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import s from '../Contacts/ContactList.module.css';
import { useEffect } from 'react';
import { fetchAllContact } from '../../redux/contacts/operations-contact';
import { selectContact } from 'redux/contacts/selector-contacts';
import { deleteContact } from '../../redux/contacts/operations-contact';
import Loader from 'components/Loader';

const ContactList = () => {
  const contacts = useSelector(selectContact);
  const filter = useSelector(state => state.contacts.filter);
  const isLoading = useSelector(state => state.contacts.isLoading)
  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(fetchAllContact());
    // eslint-disable-next-line
  }, []);

  const filteredContacts = contacts.filter(user =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );
  
  if (contacts.length === 0) {
    return;
  }

  return (
    <div>
      {isLoading && <Loader/>}
      <ul className={s.list}>
        {filteredContacts.map(({ name, number, id }) => (
          <li className={s.item} key={id}>
            <p className={s.text}>
              {name} <span className={s.tel}>Tel: {number}</span>
            </p>
            <button
              className={s.btn}
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       userName: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   onDelete: PropTypes.func,
// };

export default ContactList;
