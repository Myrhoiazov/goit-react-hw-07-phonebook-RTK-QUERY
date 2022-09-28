import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from './Form/Form.jsx';
import Container from './Container/Container.jsx';
import ContactList from './Contacts/ContactList.jsx';
import FilterList from './Filter/FilterList.jsx';

export const App = () => {
  return (
    <Container>
      <Form />
      <FilterList />
      <ContactList />
      <ToastContainer />
    </Container>
  );
};
