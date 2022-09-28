import { useState } from 'react';
import {
  useCreateContactMutation,
  useGetAllContactsQuery,
} from 'redux/contacts/rtk-Query';
import s from './Form.module.css';
import { toast } from 'react-toastify';
import Loader from 'components/Loader';

const Form = () => {
  const [name, setUserName] = useState('');
  const [number, setNumber] = useState('');

  const [createContact, { isLoading }] = useCreateContactMutation();
  const { data } = useGetAllContactsQuery();

  const handleChangeUser = ev => {
    const { name, value } = ev.target;

    switch (name) {
      case 'name':
        setUserName(value);
        // eslint-disable-next-line
        break;

      case 'number':
        setNumber(value);
        // eslint-disable-next-line
        break;

      default:
        return;
    }
  };

  const handleAddUser = e => {
    e.preventDefault();

    const hasUserContacts = data.some(user => user.name === name);
    
    if (hasUserContacts) {
      toast.error(`${name} is already in contacts`);
      return;
    }

    createContact({ name, number });
    setNumber('');
    setUserName('');
  };

  return (
    <>
      {isLoading && <Loader />}
      <form className={s.form} onSubmit={handleAddUser}>
        <label>
          <span className={s.label}>Name</span>
          <input
            className={s.input}
            type="text"
            value={name}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChangeUser}
          />
        </label>
        <label>
          <span className={s.label}>Tel</span>
          <input
            className={s.input}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChangeUser}
          />
        </label>

        <button className={s.btn} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};

export default Form;
