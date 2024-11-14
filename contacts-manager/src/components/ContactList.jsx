import React from 'react'
import ContactView from './ContactView'

export default function ContactList(props) {
  return (
    <div>
        {
        props.list && props.list.map(contact => <ContactView contact={contact}/>)
    }
    </div>
  )
}
