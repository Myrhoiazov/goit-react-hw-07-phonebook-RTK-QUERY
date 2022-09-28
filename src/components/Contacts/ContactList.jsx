import s from '../Contacts/ContactList.module.css';
import Loader from 'components/Loader';
import {
  useGetAllContactsQuery,
  useDeleteContactMutation,
} from 'redux/contacts/rtk-Query';
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selector-contacts';

const ContactList = () => {
  const filter = useSelector(selectFilter);

  const { data, isLoading } = useGetAllContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  if (!data) {
    return;
  }

  // if (!filter) {
  //   return;
  // }

  const filterUsers = data.filter(user =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      {isLoading && <Loader />}
      <ul className={s.list}>
        {filterUsers.map(({ name, number, id }) => (
          <li className={s.item} key={id}>
            <p className={s.text}>
              {name} <span className={s.tel}>Tel: {number}</span>
            </p>
            <button
              className={s.btn}
              type="button"
              onClick={() => deleteContact(id)}
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
