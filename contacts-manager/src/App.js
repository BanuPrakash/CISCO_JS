import './App.css';

import { connect } from 'react-redux';
import ContactList from './components/ContactList';
import { useState } from 'react';

function App(props) {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  function add() {
    let contact = {
      name,
      email
    }
    props.addContact(contact);
  }
  return (
    <div className="App">
      Welcome {props.displayName} <br />
      <form>
        Email <input type="email" onChange={( evt) => setEmail(evt.target.value)}/> <br />
        Name <input type='text' onChange={( evt) => setName(evt.target.value)}/> <br />
        <button type='button' onClick={add}>Add New Contact</button>
      </form>
      <button type='button' onClick={props.clearContacts}>Clear Contacts</button>
      <ContactList list={props.contactlist} removeContact={props.removeContact}/>
    </div>
  );
}

// state ==> present in redux store
// return props to App
function mapStateToProps(state) {
  return {
    contactlist: state.contacts,
    pic: state.profile.avatar,
    displayName: state.profile.name
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addContact: contact => dispatch({type:'ADD_CONTACT', payload:contact}),
    removeContact: email => dispatch({type:'REMOVE_CONTACT', payload: email}),
    clearContacts: () => dispatch({type:'CLEAR_CONTACTS'})
  }
}

// bridge REDUX with React
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
