import s from '../Contacts/ContactList.module.css';
import Loader from 'components/Loader';
import {
  useGetAllContactsQuery,
  useDeleteContactMutation,
} from 'redux/contacts/rtk-Query';
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selector-contacts';
import { toast } from 'react-toastify';

const ContactList = () => {
  const filter = useSelector(selectFilter);

  const { data, isLoading } = useGetAllContactsQuery();
  const [deleteContact, { isLoading: deleteLoading }] =
    useDeleteContactMutation();

  if (!data) {
    return;
  }

  const filterUsers = data.filter(user =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDeleteContact = async id => {
    await deleteContact(id);
    toast.warning('contact deleted...');
  };

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
              disabled={deleteLoading}
              className={s.btn}
              type="button"
              onClick={() => handleDeleteContact(id)}
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
