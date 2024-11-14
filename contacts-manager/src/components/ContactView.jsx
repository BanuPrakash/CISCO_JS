import React from 'react'

export default function ContactView(props) {
  return (
    <div>
        {props.contact.name} &nbsp; {props.contact.email}
        <button>Delete</button>
    </div>
  )
}
