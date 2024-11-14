import React from 'react'

export default function ContactView(props) {
    return (
        <div>
            {props.contact.name} &nbsp; {props.contact.email}
            <button onClick={() => props.removeContact(props.contact.email)}>
                Delete
            </button>
        </div>
    )
}
