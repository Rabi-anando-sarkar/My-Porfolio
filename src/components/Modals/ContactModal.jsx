import React from 'react'

const ContactModal = ({isOpen, onClose,zIndex }) => {
    if(!isOpen) return null;
  return (
    <div style={{ zIndex }}>
        <h1>Contact Panel</h1>
        <button onClick={onClose}>Close</button>
    </div>
  )
}

export default ContactModal