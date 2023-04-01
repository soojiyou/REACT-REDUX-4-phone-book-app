import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import SearchBox from './components/SearchBox';


/* Plan (phone book app using redux)
1.  top: the title of app
    left: 'form' to register contact, 
    right:  'list' of registered contact
            and 'search bar' to search contact in the list
2. 'List':  can be added the name and phone.
            show the number of contacts.
3. 'search bar': the user can search the contacts by name.
*/


function App() {
  return (
    <div className="App">
      <h1 class="title">Contacts</h1>
      <Container>
        <Row>
          <Col>
            <ContactForm />
          </Col>
          <Col>
            <ContactList />
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default App;
